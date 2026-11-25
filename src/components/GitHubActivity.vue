<template>
  <div ref="cardRef" class="glass github-activity-card">
    <!-- Header with GitHub Icon, Total Count & Year Selector -->
    <div class="gh-top-bar">
      <div class="gh-top-left">
        <AppIcon name="github" :size="22" class="gh-logo-icon" />
        <div>
          <div class="gh-headline-row">
            <span class="gh-count">{{ totalContributions }}</span>
            <span class="gh-subhead">contributions in {{ selectedYear }}</span>
          </div>
          <div class="gh-user-handle">
            <span class="gh-status-dot" aria-hidden="true"></span>
            <span>{{ activity.handle }}</span>
          </div>
        </div>
      </div>

      <!-- Year Selector Tabs -->
      <div class="gh-year-tabs">
        <button
          v-for="year in availableYears"
          :key="year"
          type="button"
          class="gh-year-btn"
          :class="{ active: selectedYear === year }"
          :aria-pressed="selectedYear === year"
          :aria-label="`Show contributions for ${year}`"
          @click="selectYear(year)"
        >
          {{ year }}
        </button>
      </div>
    </div>

    <!-- GitHub Calendar Grid -->
    <div class="gh-calendar-box">
      <div class="gh-calendar-scroll" aria-hidden="true" @scroll="hideTooltip">
        <div class="gh-grid-wrapper">
          <!-- Month Labels Header -->
          <div class="gh-months-row">
            <div class="gh-weekday-spacer"></div>
            <div class="gh-month-labels">
              <span
                v-for="month in monthHeaders"
                :key="month.name + month.col"
                class="gh-month-label"
                :style="{ left: `${month.col * 14}px` }"
              >
                {{ month.name }}
              </span>
            </div>
          </div>

          <!-- Main Calendar Grid: Left Day Labels + Canvas Heatmap -->
          <div class="gh-days-and-grid">
            <div class="gh-weekday-labels">
              <span></span>
              <span>Mon</span>
              <span></span>
              <span>Wed</span>
              <span></span>
              <span>Fri</span>
              <span></span>
            </div>

            <canvas
              ref="gridCanvas"
              class="gh-grid-canvas"
              :class="{ 'has-hover': hoveredCell !== null }"
              @mousemove="onCanvasMouseMove"
              @mouseleave="hideTooltip"
            ></canvas>
          </div>
        </div>
      </div>

      <!-- Footer Bar: Link + GitHub Legend -->
      <div class="gh-calendar-footer">
        <a
          :href="activity.profileUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="gh-learn-link"
        >
          View full profile on GitHub ↗
        </a>
        <div class="gh-legend" aria-hidden="true">
          <span>Less</span>
          <span class="gh-legend-sq level-0" title="No contributions"></span>
          <span class="gh-legend-sq level-1" title="1-3 contributions"></span>
          <span class="gh-legend-sq level-2" title="4-9 contributions"></span>
          <span class="gh-legend-sq level-3" title="10-19 contributions"></span>
          <span class="gh-legend-sq level-4" title="20+ contributions"></span>
          <span>More</span>
        </div>
      </div>
    </div>

    <!-- Telemetry Highlights Bar -->
    <div class="gh-telemetry-row">
      <div class="gh-tele-item">
        <span class="gh-tele-label">MAX COMMITS IN A DAY</span>
        <span class="gh-tele-val text-green">{{ maxDayCount }} commits</span>
      </div>
      <div class="gh-tele-item">
        <span class="gh-tele-label">ACTIVE DAYS</span>
        <span class="gh-tele-val">{{ activeDaysCount }} days active in {{ selectedYear }}</span>
      </div>
      <div class="gh-tele-item">
        <span class="gh-tele-label">PRIMARY LANGUAGE</span>
        <span class="gh-tele-val">{{ activity.primaryLanguage }}</span>
      </div>
    </div>

    <!-- Floating Interactive Tooltip -->
    <div
      v-if="tooltip.visible"
      class="gh-tooltip"
      aria-hidden="true"
      :style="{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }"
    >
      {{ tooltip.text }}
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import defaultPayload from '@/assets/github-contributions.json';
import AppIcon from '@/components/AppIcon.vue';
import {
  buildMonthHeaders,
  buildWeeks,
  collectYears,
  contributionsForYear,
  formatDayLabel,
  sanitizePayload,
  totalForYear
} from '@/utils/contributions';

const FETCH_TIMEOUT_MS = 8000;
const TOOLTIP_EDGE_PADDING_PX = 108;
const CELL_SIZE = 10;
const CELL_GAP = 4;
const CELL_STRIDE = CELL_SIZE + CELL_GAP;
const CELL_RADIUS = 2;
const LEVEL_COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

const bundledData = sanitizePayload(defaultPayload) || { contributions: [], total: {} };
const bundledYears = collectYears(bundledData);

const props = defineProps({
  activity: { type: Object, required: true }
});

const cardRef = ref(null);
const gridCanvas = ref(null);
// Bundled snapshot renders instantly; the live fetch only replaces it
// when it succeeds and passes validation.
const contributionsData = ref(bundledData);
const selectedYear = ref(bundledYears[0] || String(new Date().getFullYear()));
const hoveredCell = ref(null);
const tooltip = ref({
  visible: false,
  text: '',
  x: 0,
  y: 0
});

let abortController = null;
let canvasRect = null;
let cardRect = null;

const availableYears = computed(() => collectYears(contributionsData.value));
const yearContributions = computed(() =>
  contributionsForYear(contributionsData.value.contributions, selectedYear.value)
);
const totalContributions = computed(() =>
  totalForYear(contributionsData.value.total, selectedYear.value, yearContributions.value)
);
const maxDayCount = computed(() =>
  yearContributions.value.reduce((max, day) => Math.max(max, day.count || 0), 0)
);
const activeDaysCount = computed(
  () => yearContributions.value.filter((day) => (day.count || 0) > 0).length
);
const weeksData = computed(() =>
  buildWeeks(Number(selectedYear.value), yearContributions.value)
);
const monthHeaders = computed(() =>
  buildMonthHeaders(Number(selectedYear.value), weeksData.value)
);

function drawRoundedCell(ctx, x, y, size, radius) {
  if (typeof ctx.roundRect === 'function') {
    ctx.beginPath();
    ctx.roundRect(x, y, size, size, radius);
    return;
  }
  ctx.beginPath();
  ctx.rect(x, y, size, size);
}

function renderGrid() {
  const canvas = gridCanvas.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const weeks = weeksData.value;
  const cols = Math.max(1, weeks.length);
  const cssWidth = cols * CELL_STRIDE - CELL_GAP;
  const cssHeight = 7 * CELL_STRIDE - CELL_GAP;
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;

  const targetWidth = Math.round(cssWidth * dpr);
  const targetHeight = Math.round(cssHeight * dpr);
  if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;
  }

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssWidth, cssHeight);

  const hover = hoveredCell.value;
  for (let col = 0; col < weeks.length; col++) {
    const week = weeks[col];
    const x = col * CELL_STRIDE;
    for (let row = 0; row < week.length; row++) {
      const day = week[row];
      if (!day) continue;
      const y = row * CELL_STRIDE;
      const isHovered = hover && hover.col === col && hover.row === row;

      ctx.fillStyle = LEVEL_COLORS[day.level] || LEVEL_COLORS[0];
      drawRoundedCell(ctx, x, y, CELL_SIZE, CELL_RADIUS);
      ctx.fill();

      if (day.level === 0) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      if (isHovered) {
        ctx.strokeStyle = 'rgba(52, 255, 110, 0.85)';
        ctx.lineWidth = 1.25;
        ctx.stroke();
      }
    }
  }
}

function selectYear(year) {
  selectedYear.value = year;
  hideTooltip();
}

async function fetchLiveContributions() {
  if (typeof fetch !== 'function' || typeof AbortController === 'undefined') return;

  const controller = new AbortController();
  abortController = controller;
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(props.activity.endpoint, {
      signal: controller.signal,
      headers: { Accept: 'application/json' }
    });
    if (!response.ok) return;

    const payload = sanitizePayload(await response.json());
    if (!payload) return;

    contributionsData.value = payload;
    const years = collectYears(payload);
    if (!years.includes(selectedYear.value)) {
      selectedYear.value = years[0] || selectedYear.value;
    }
  } catch {
    // Offline, blocked or timed out: keep the bundled snapshot.
  } finally {
    clearTimeout(timeout);
    if (abortController === controller) abortController = null;
  }
}

function onCanvasMouseMove(event) {
  const canvas = gridCanvas.value;
  const card = cardRef.value;
  if (!canvas || !card) return;

  canvasRect = canvas.getBoundingClientRect();
  cardRect = card.getBoundingClientRect();
  const offsetX = event.clientX - canvasRect.left;
  const offsetY = event.clientY - canvasRect.top;

  const col = Math.floor(offsetX / CELL_STRIDE);
  const row = Math.floor(offsetY / CELL_STRIDE);
  const inCell =
    offsetX >= 0 &&
    offsetY >= 0 &&
    offsetX - col * CELL_STRIDE <= CELL_SIZE &&
    offsetY - row * CELL_STRIDE <= CELL_SIZE;

  const day = inCell ? weeksData.value[col]?.[row] : null;
  if (!day) {
    hideTooltip();
    return;
  }

  if (hoveredCell.value?.col === col && hoveredCell.value?.row === row) return;
  hoveredCell.value = { col, row };

  const cellLeft = canvasRect.left + col * CELL_STRIDE;
  const cellTop = canvasRect.top + row * CELL_STRIDE;
  const rawX = cellLeft - cardRect.left + CELL_SIZE / 2;
  const clampedX =
    cardRect.width > TOOLTIP_EDGE_PADDING_PX * 2
      ? Math.min(cardRect.width - TOOLTIP_EDGE_PADDING_PX, Math.max(TOOLTIP_EDGE_PADDING_PX, rawX))
      : rawX;

  tooltip.value = {
    visible: true,
    text: formatDayLabel(day),
    x: clampedX,
    y: cellTop - cardRect.top - 32
  };
}

function hideTooltip() {
  if (hoveredCell.value !== null) hoveredCell.value = null;
  if (tooltip.value.visible) tooltip.value.visible = false;
  canvasRect = null;
  cardRect = null;
}

watch([weeksData, hoveredCell], () => {
  renderGrid();
});

onMounted(() => {
  renderGrid();
  fetchLiveContributions();
});

onBeforeUnmount(() => {
  if (abortController) {
    abortController.abort();
    abortController = null;
  }
});
</script>

<style scoped>
.github-activity-card {
  padding: var(--s8);
  margin-top: var(--s10);
}

/* Top bar with icon, count, and year tabs */
.gh-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--s5);
  flex-wrap: wrap;
  margin-bottom: var(--s6);
}
.gh-top-left {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}
.gh-logo-icon {
  color: var(--green);
  flex-shrink: 0;
}
.gh-headline-row {
  display: flex;
  align-items: baseline;
  gap: 0.45rem;
}
.gh-count {
  font-size: 1.6rem;
  font-weight: 700;
  color: #e8fff2;
  letter-spacing: -0.02em;
}
.gh-subhead {
  font-size: 0.95rem;
  color: var(--muted);
}
.gh-user-handle {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--faint);
  letter-spacing: 0.05em;
  margin-top: 0.15rem;
}
.gh-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
}

.gh-year-tabs {
  display: flex;
  gap: 0.35rem;
  background: rgba(0, 0, 0, 0.45);
  padding: 0.25rem;
  border-radius: 8px;
  border: 1px solid rgba(52, 255, 110, 0.12);
}
.gh-year-btn {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  color: var(--muted);
  transition: color 0.2s var(--ease-out), background 0.2s var(--ease-out);
}
.gh-year-btn:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}
.gh-year-btn.active {
  color: #031c0a;
  background: var(--green);
  font-weight: 700;
}

/* GitHub Exact Calendar Box */
.gh-calendar-box {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 1.25rem 1.4rem;
}

.gh-calendar-scroll {
  overflow-x: auto;
  padding-bottom: 0.6rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(52, 255, 110, 0.3) #0d1117;
}
.gh-calendar-scroll::-webkit-scrollbar {
  height: 6px;
}
.gh-calendar-scroll::-webkit-scrollbar-track {
  background: #0d1117;
}
.gh-calendar-scroll::-webkit-scrollbar-thumb {
  background: rgba(52, 255, 110, 0.3);
  border-radius: 4px;
}

.gh-grid-wrapper {
  display: inline-block;
  min-width: 760px;
}

/* Month labels row */
.gh-months-row {
  display: flex;
  margin-bottom: 6px;
}
.gh-weekday-spacer {
  width: 28px;
  flex-shrink: 0;
}
.gh-month-labels {
  position: relative;
  height: 16px;
  flex: 1;
}
.gh-month-label {
  position: absolute;
  top: 0;
  font-family: var(--font-mono);
  font-size: 0.64rem;
  color: #7d8590;
  white-space: nowrap;
}

/* Weekday labels + Heatmap canvas */
.gh-days-and-grid {
  display: flex;
  gap: 6px;
  align-items: flex-start;
}
.gh-weekday-labels {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 22px;
  flex-shrink: 0;
}
.gh-weekday-labels span {
  height: 10px;
  font-family: var(--font-mono);
  font-size: 0.58rem;
  line-height: 10px;
  color: #7d8590;
}
.gh-grid-canvas {
  display: block;
  flex-shrink: 0;
}
.gh-grid-canvas.has-hover {
  cursor: pointer;
}

/* Legend squares */
.level-0 {
  background-color: #161b22;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.level-1 {
  background-color: #0e4429;
}
.level-2 {
  background-color: #006d32;
}
.level-3 {
  background-color: #26a641;
}
.level-4 {
  background-color: #39d353;
}

/* Footer & Legend */
.gh-calendar-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 0.9rem;
  padding-top: 0.75rem;
  border-top: 1px solid #21262d;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: #7d8590;
}
.gh-learn-link {
  color: #2f81f7;
  transition: color 0.2s;
}
.gh-learn-link:hover {
  color: #58a6ff;
  text-decoration: underline;
}

.gh-legend {
  display: flex;
  align-items: center;
  gap: 4px;
}
.gh-legend-sq {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
}

/* Bottom telemetry row */
.gh-telemetry-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--s4);
  margin-top: var(--s5);
}
.gh-tele-item {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.gh-tele-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.12em;
  color: var(--faint);
  margin-bottom: 0.25rem;
}
.gh-tele-val {
  font-size: 0.84rem;
  font-weight: 500;
  color: #dcfae7;
}

/* Floating Tooltip */
.gh-tooltip {
  position: absolute;
  transform: translate(-50%, -100%);
  background: #1f242c;
  border: 1px solid #30363d;
  color: #f0f6fc;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  padding: 0.4rem 0.65rem;
  border-radius: 6px;
  pointer-events: none;
  white-space: nowrap;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  z-index: 50;
}
.gh-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 4px;
  border-style: solid;
  border-color: #1f242c transparent transparent transparent;
}

@media (max-width: 800px) {
  .gh-year-tabs {
    width: 100%;
  }
  .gh-year-btn {
    flex: 1;
    padding: 0.5rem 0.25rem;
  }
  .gh-telemetry-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .github-activity-card {
    padding: 1.1rem;
    border-radius: 16px;
  }
  .gh-top-bar {
    gap: 0.8rem;
    margin-bottom: 1rem;
  }
  .gh-top-left {
    gap: 0.7rem;
  }
  .gh-logo-icon {
    width: 19px;
    height: 19px;
  }
  .gh-count {
    font-size: 1.35rem;
  }
  .gh-subhead {
    font-size: 0.82rem;
  }
  .gh-user-handle {
    font-size: 0.6rem;
  }
  .gh-year-tabs {
    padding: 0.2rem;
    gap: 0.15rem;
  }
  .gh-year-btn {
    font-size: 0.65rem;
    min-height: 40px;
  }
  .gh-calendar-box {
    padding: 0.8rem 0.65rem;
    border-radius: 10px;
  }
  .gh-calendar-footer {
    gap: 0.55rem;
    margin-top: 0.75rem;
    padding-top: 0.65rem;
    font-size: 0.6rem;
  }
  .gh-telemetry-row {
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .gh-tele-item {
    padding: 0.65rem 0.8rem;
  }
  .gh-tele-val {
    font-size: 0.8rem;
  }
}
</style>
