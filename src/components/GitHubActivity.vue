<template>
  <div class="glass github-activity-card">
    <!-- Header with GitHub Icon, Total Count & Year Selector -->
    <div class="gh-top-bar">
      <div class="gh-top-left">
        <svg class="gh-logo-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.478-10-10-10z"/>
        </svg>
        <div>
          <div class="gh-headline-row">
            <span class="gh-count">{{ totalContributions }}</span>
            <span class="gh-subhead">contributions in {{ selectedYear }}</span>
          </div>
          <div class="gh-user-handle">
            <span class="gh-status-dot" aria-hidden="true"></span>
            <span>github.com/shashankh3</span>
          </div>
        </div>
      </div>

      <!-- Year Selector Tabs (2026, 2025, 2024...) -->
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

    <!-- GitHub Exact Calendar Box Container -->
    <div class="gh-calendar-box">
      <div class="gh-calendar-scroll" aria-hidden="true">
        <div class="gh-grid-wrapper">
          <!-- Month Labels Header -->
          <div class="gh-months-row">
            <div class="gh-weekday-spacer"></div>
            <div class="gh-month-labels">
              <span
                v-for="m in monthHeaders"
                :key="m.name + m.col"
                class="gh-month-label"
                :style="{ left: `${m.col * 14}px` }"
              >
                {{ m.name }}
              </span>
            </div>
          </div>

          <!-- Main Calendar Grid: Left Day Labels + 53 Week Columns -->
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

            <div class="gh-weeks-grid">
              <div v-for="(week, wIdx) in weeksData" :key="wIdx" class="gh-week-col">
                <template v-for="(day, dIdx) in week" :key="dIdx">
                  <span
                    v-if="day"
                    class="gh-day-square"
                    :class="`level-${day.level}`"
                    :data-date="day.date"
                    :data-count="day.count"
                    @mouseenter="showTooltip($event, day)"
                    @mouseleave="hideTooltip"
                  ></span>
                  <span v-else class="gh-day-square level-empty"></span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bar: Link + Exact GitHub Legend -->
      <div class="gh-calendar-footer">
        <a href="https://github.com/shashankh3" target="_blank" rel="noreferrer" class="gh-learn-link">
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
        <span class="gh-tele-val">TypeScript · Python · Vue/React</span>
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

<script>
import defaultPayload from '@/assets/github-contributions.json';
import {
  buildMonthHeaders,
  buildWeeks,
  collectYears,
  contributionsForYear,
  formatDayLabel,
  sanitizePayload,
  totalForYear
} from '@/utils/contributions';

const LIVE_ENDPOINT = 'https://github-contributions-api.jogruber.de/v4/shashankh3';
const FETCH_TIMEOUT_MS = 8000;

const bundledData = sanitizePayload(defaultPayload) || { contributions: [], total: {} };
const bundledYears = collectYears(bundledData);

export default {
  name: 'GitHubActivity',
  data() {
    return {
      // Bundled snapshot renders instantly; the live fetch only replaces it
      // when it succeeds and passes validation.
      contributionsData: bundledData,
      selectedYear: bundledYears[0] || String(new Date().getFullYear()),
      tooltip: {
        visible: false,
        text: '',
        x: 0,
        y: 0
      }
    };
  },
  computed: {
    availableYears() {
      return collectYears(this.contributionsData);
    },
    yearContributions() {
      return contributionsForYear(this.contributionsData.contributions, this.selectedYear);
    },
    totalContributions() {
      return totalForYear(this.contributionsData.total, this.selectedYear, this.yearContributions);
    },
    maxDayCount() {
      if (!this.yearContributions.length) return 0;
      return Math.max(...this.yearContributions.map((day) => day.count || 0));
    },
    activeDaysCount() {
      return this.yearContributions.filter((day) => (day.count || 0) > 0).length;
    },
    weeksData() {
      return buildWeeks(Number(this.selectedYear), this.yearContributions);
    },
    monthHeaders() {
      return buildMonthHeaders(Number(this.selectedYear), this.weeksData);
    }
  },
  mounted() {
    this.fetchLiveContributions();
  },
  beforeUnmount() {
    if (this.abortController) this.abortController.abort();
  },
  methods: {
    selectYear(year) {
      this.selectedYear = year;
      this.tooltip.visible = false;
    },
    async fetchLiveContributions() {
      const controller = new AbortController();
      this.abortController = controller;
      const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

      try {
        const response = await fetch(LIVE_ENDPOINT, {
          signal: controller.signal,
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) return;

        const payload = sanitizePayload(await response.json());
        if (!payload) return;

        this.contributionsData = payload;
        const years = collectYears(payload);
        if (!years.includes(this.selectedYear)) {
          this.selectedYear = years[0] || this.selectedYear;
        }
      } catch {
        // Offline, blocked or timed out: keep the bundled snapshot.
      } finally {
        clearTimeout(timeout);
        if (this.abortController === controller) this.abortController = null;
      }
    },
    showTooltip(event, day) {
      const rect = event.target.getBoundingClientRect();
      const parentRect = this.$el.getBoundingClientRect();

      this.tooltip = {
        visible: true,
        text: formatDayLabel(day),
        x: rect.left - parentRect.left + rect.width / 2,
        y: rect.top - parentRect.top - 32
      };
    },
    hideTooltip() {
      this.tooltip.visible = false;
    }
  }
};
</script>


<style scoped>
.github-activity-card {
  padding: var(--s8);
  margin-top: var(--s10);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  position: relative;
  box-shadow: var(--shadow);
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
  transition: all 0.2s var(--ease-out);
}
.gh-year-btn:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}
.gh-year-btn.active {
  color: #031c0a;
  background: var(--green);
  font-weight: 700;
  box-shadow: 0 0 14px rgba(52, 255, 110, 0.4);
}

/* GitHub Exact Calendar Box */
.gh-calendar-box {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 1.25rem 1.4rem;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.4);
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

/* Weekday labels + Weeks grid */
.gh-days-and-grid {
  display: flex;
  gap: 6px;
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

.gh-weeks-grid {
  display: flex;
  gap: 4px;
}
.gh-week-col {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Exact GitHub Squares */
.gh-day-square {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;
}
.gh-day-square:hover {
  transform: scale(1.35);
  z-index: 5;
  filter: drop-shadow(0 0 6px rgba(52, 255, 110, 0.8));
}
.level-empty {
  visibility: hidden;
}

/* Exact GitHub Dark Theme Green Color Steps */
.level-0 {
  background-color: #161b22;
  outline: 1px solid rgba(255, 255, 255, 0.05);
  outline-offset: -1px;
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
  box-shadow: 0 0 5px rgba(57, 211, 83, 0.4);
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
  animation: tooltip-fade 0.15s ease-out;
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
@keyframes tooltip-fade {
  from { opacity: 0; transform: translate(-50%, -90%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
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
