// Pure helpers for the contribution calendar. Kept out of the component so
// the date maths can be reasoned about (and tested) in isolation.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const YEAR_PATTERN = /^\d{4}$/;

function toFiniteNumber(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : NaN;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : NaN;
  }
  return NaN;
}

function isValidDate(value) {
  if (typeof value !== 'string' || !DATE_PATTERN.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function isValidYearNumber(year) {
  return Number.isInteger(year) && year >= 1970 && year <= 9999;
}

function formatUtcIsoDate(date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function normalizeLevel(level) {
  const value = toFiniteNumber(level);
  if (!Number.isFinite(value)) return 0;
  return Math.min(4, Math.max(0, Math.round(value)));
}

// The live endpoint is third-party data: validate and normalise it before it
// reaches class bindings or layout code.
export function sanitizePayload(payload) {
  if (!payload || typeof payload !== 'object' || !Array.isArray(payload.contributions)) {
    return null;
  }

  const contributions = [];
  for (const entry of payload.contributions) {
    if (!entry || !isValidDate(entry.date)) continue;
    const count = toFiniteNumber(entry.count);
    if (!Number.isFinite(count) || count < 0) continue;
    contributions.push({ date: entry.date, count, level: normalizeLevel(entry.level) });
  }

  if (!contributions.length) return null;

  const total = {};
  if (payload.total && typeof payload.total === 'object' && !Array.isArray(payload.total)) {
    for (const [key, value] of Object.entries(payload.total)) {
      if (!YEAR_PATTERN.test(key)) continue;
      const numericTotal = toFiniteNumber(value);
      if (Number.isFinite(numericTotal) && numericTotal >= 0) {
        total[key] = numericTotal;
      }
    }
  }

  return { contributions, total };
}

export function collectYears(payload) {
  const years = new Set();
  if (payload?.total && typeof payload.total === 'object' && !Array.isArray(payload.total)) {
    for (const key of Object.keys(payload.total)) {
      if (YEAR_PATTERN.test(key)) years.add(key);
    }
  }

  const contributions = Array.isArray(payload?.contributions) ? payload.contributions : [];
  for (const entry of contributions) {
    if (entry && typeof entry.date === 'string') {
      const year = entry.date.slice(0, 4);
      if (YEAR_PATTERN.test(year)) years.add(year);
    }
  }

  return Array.from(years).sort((a, b) => Number(b) - Number(a));
}

export function contributionsForYear(contributions, year) {
  const yearStr = String(year ?? '');
  if (!YEAR_PATTERN.test(yearStr) || !Array.isArray(contributions)) return [];
  const prefix = `${yearStr}-`;
  return contributions.filter((entry) => typeof entry?.date === 'string' && entry.date.startsWith(prefix));
}

export function totalForYear(totals, year, days) {
  const recorded = toFiniteNumber(totals?.[year]);
  if (Number.isFinite(recorded) && recorded >= 0) return recorded;
  if (!Array.isArray(days)) return 0;
  return days.reduce((sum, day) => {
    const count = toFiniteNumber(day?.count);
    return sum + (Number.isFinite(count) && count > 0 ? count : 0);
  }, 0);
}

// Builds 53-ish week columns, Sunday first, with nulls for padding.
export function buildWeeks(year, contributions) {
  const yearNum = Number(year);
  if (!isValidYearNumber(yearNum)) return [];

  const start = new Date(Date.UTC(yearNum, 0, 1));
  const end = new Date(Date.UTC(yearNum, 11, 31));

  const byDate = new Map();
  if (Array.isArray(contributions)) {
    for (const entry of contributions) {
      if (entry && typeof entry.date === 'string') {
        byDate.set(entry.date, entry);
      }
    }
  }

  const weeks = [];
  let week = new Array(start.getUTCDay()).fill(null);

  const cursor = new Date(start);
  while (cursor <= end) {
    const date = formatUtcIsoDate(cursor);
    week.push(byDate.get(date) || { date, count: 0, level: 0 });
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return weeks;
}

export function buildMonthHeaders(year, weeks) {
  const yearNum = Number(year);
  if (!isValidYearNumber(yearNum) || !Array.isArray(weeks) || !weeks.length) return [];

  const headers = [];
  MONTHS.forEach((name, monthIndex) => {
    const firstOfMonth = `${yearNum}-${String(monthIndex + 1).padStart(2, '0')}-01`;
    const column = weeks.findIndex((week) => week.some((day) => day && day.date === firstOfMonth));
    if (column !== -1) headers.push({ name, col: column });
  });
  return headers;
}

export function formatDayLabel(day) {
  if (!day || !isValidDate(day.date)) return '';

  const [year, month, date] = day.date.split('-').map(Number);
  const formatted = new Date(Date.UTC(year, month - 1, date)).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });

  const count = Math.max(0, toFiniteNumber(day.count) || 0);
  const summary =
    count === 0 ? 'No contributions' : count === 1 ? '1 contribution' : `${count} contributions`;
  return `${summary} on ${formatted}`;
}
