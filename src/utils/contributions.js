// Pure helpers for the contribution calendar. Kept out of the component so
// the date maths can be reasoned about (and tested) in isolation.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function isValidDate(value) {
  if (!DATE_PATTERN.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function normalizeLevel(level) {
  const value = Number(level);
  if (!Number.isFinite(value)) return 0;
  return Math.min(4, Math.max(0, Math.round(value)));
}

// The live endpoint is third-party data: validate and normalise it before it
// reaches class bindings or layout code.
export function sanitizePayload(payload) {
  if (!payload || !Array.isArray(payload.contributions)) return null;

  const contributions = [];
  for (const entry of payload.contributions) {
    if (!entry || typeof entry.date !== 'string' || !isValidDate(entry.date)) continue;
    const count = Number(entry.count);
    if (!Number.isFinite(count) || count < 0) continue;
    contributions.push({ date: entry.date, count, level: normalizeLevel(entry.level) });
  }

  if (!contributions.length) return null;
  const total = payload.total && typeof payload.total === 'object' ? payload.total : {};
  return { contributions, total };
}

export function collectYears(payload) {
  const years = new Set(Object.keys((payload && payload.total) || {}));
  const contributions = (payload && payload.contributions) || [];
  for (const entry of contributions) {
    if (entry && typeof entry.date === 'string') years.add(entry.date.slice(0, 4));
  }
  return Array.from(years).sort((a, b) => Number(b) - Number(a));
}

export function contributionsForYear(contributions, year) {
  const prefix = `${year}-`;
  return (contributions || []).filter((entry) => entry.date.startsWith(prefix));
}

export function totalForYear(totals, year, days) {
  const recorded = Number(totals && totals[year]);
  if (Number.isFinite(recorded)) return recorded;
  return days.reduce((sum, day) => sum + day.count, 0);
}

// Builds 53-ish week columns, Sunday first, with nulls for padding.
export function buildWeeks(year, contributions) {
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);

  const byDate = {};
  for (const entry of contributions) byDate[entry.date] = entry;

  const weeks = [];
  let week = [];
  for (let i = 0; i < start.getDay(); i++) week.push(null);

  const cursor = new Date(start);
  while (cursor <= end) {
    const y = cursor.getFullYear();
    const m = String(cursor.getMonth() + 1).padStart(2, '0');
    const d = String(cursor.getDate()).padStart(2, '0');
    const date = `${y}-${m}-${d}`;

    week.push(byDate[date] || { date, count: 0, level: 0 });
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return weeks;
}

export function buildMonthHeaders(year, weeks) {
  const headers = [];
  MONTHS.forEach((name, monthIndex) => {
    const target = new Date(year, monthIndex, 1);
    const date = [
      target.getFullYear(),
      String(target.getMonth() + 1).padStart(2, '0'),
      String(target.getDate()).padStart(2, '0')
    ].join('-');

    const column = weeks.findIndex((week) => week.some((day) => day && day.date === date));
    if (column !== -1) headers.push({ name, col: column });
  });
  return headers;
}

export function formatDayLabel(day) {
  const [year, month, date] = day.date.split('-').map(Number);
  const formatted = new Date(year, month - 1, date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const count = day.count || 0;
  const summary =
    count === 0 ? 'No contributions' : count === 1 ? '1 contribution' : `${count} contributions`;
  return `${summary} on ${formatted}`;
}
