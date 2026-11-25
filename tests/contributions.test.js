import { describe, expect, it } from 'vitest';
import {
  buildMonthHeaders,
  buildWeeks,
  collectYears,
  contributionsForYear,
  formatDayLabel,
  normalizeLevel,
  sanitizePayload,
  totalForYear
} from '@/utils/contributions.js';

describe('normalizeLevel', () => {
  it('clamps levels to the four CSS classes and rejects non-numeric coercions', () => {
    expect(normalizeLevel(2)).toBe(2);
    expect(normalizeLevel(9)).toBe(4);
    expect(normalizeLevel(-3)).toBe(0);
    expect(normalizeLevel('3')).toBe(3);
    expect(normalizeLevel('nope')).toBe(0);
    expect(normalizeLevel(null)).toBe(0);
    expect(normalizeLevel(true)).toBe(0);
    expect(normalizeLevel('')).toBe(0);
  });
});

describe('sanitizePayload', () => {
  it('rejects values that are not contribution payloads', () => {
    expect(sanitizePayload(null)).toBeNull();
    expect(sanitizePayload({})).toBeNull();
    expect(sanitizePayload({ contributions: [] })).toBeNull();
  });

  it('drops malformed entries and normalises the rest', () => {
    const payload = sanitizePayload({
      total: { 2026: 4, lastYear: 99, bad: -5 },
      contributions: [
        { date: '2026-01-01', count: 4, level: 9 },
        { date: 'not-a-date', count: 1, level: 1 },
        { date: '2026-02-31', count: 1, level: 1 },
        { date: '2026-01-02', count: -1, level: 1 },
        { date: '2026-01-03', count: null, level: 1 },
        { date: '2026-01-04', count: '', level: 1 },
        { date: '2026-01-05', count: '2', level: -1 }
      ]
    });

    expect(payload.contributions).toEqual([
      { date: '2026-01-01', count: 4, level: 4 },
      { date: '2026-01-05', count: 2, level: 0 }
    ]);
    expect(payload.total).toEqual({ 2026: 4 });
  });
});

describe('collectYears', () => {
  it('merges totals and contribution dates, newest first, ignoring non-year keys', () => {
    const years = collectYears({
      total: { 2024: 1, 2026: 2, lastYear: 50 },
      contributions: [{ date: '2025-05-01' }, { date: '2026-01-01' }]
    });
    expect(years).toEqual(['2026', '2025', '2024']);
  });

  it('is safe on empty data', () => {
    expect(collectYears(null)).toEqual([]);
  });
});

describe('contributionsForYear', () => {
  it('only keeps the requested year', () => {
    const days = contributionsForYear(
      [
        { date: '2025-12-31', count: 1 },
        { date: '2026-01-01', count: 2 },
        { date: '2026-01-02', count: 3 }
      ],
      '2026'
    );
    expect(days.map((day) => day.date)).toEqual(['2026-01-01', '2026-01-02']);
    expect(contributionsForYear([], 'bad')).toEqual([]);
  });
});

describe('totalForYear', () => {
  it('prefers valid recorded totals including zero', () => {
    expect(totalForYear({ 2026: 10 }, '2026', [{ count: 1 }])).toBe(10);
    expect(totalForYear({ 2023: 0 }, '2023', [{ count: 2 }])).toBe(0);
  });

  it('falls back to summing days when total is missing, null, or invalid', () => {
    expect(totalForYear({}, '2026', [{ count: 2 }, { count: 3 }])).toBe(5);
    expect(totalForYear(null, '2026', [{ count: 2 }, { count: 3 }])).toBe(5);
    expect(totalForYear({ 2026: null }, '2026', [{ count: 4 }])).toBe(4);
    expect(totalForYear({ 2026: '' }, '2026', [{ count: 4 }])).toBe(4);
  });
});

describe('buildWeeks', () => {
  it('always returns full seven-day columns', () => {
    const weeks = buildWeeks(2026, []);
    expect(weeks.every((week) => week.length === 7)).toBe(true);
  });

  it('returns empty array for invalid years', () => {
    expect(buildWeeks(NaN, [])).toEqual([]);
    expect(buildWeeks(1800, [])).toEqual([]);
  });

  it('pads the first week to the weekday of January 1', () => {
    const weeks = buildWeeks(2026, []);
    // Jan 1 2026 is a Thursday, so Sunday-Wednesday are empty.
    expect(weeks[0].slice(0, 4)).toEqual([null, null, null, null]);
    expect(weeks[0][4].date).toBe('2026-01-01');
  });

  it('covers every day of the year exactly once', () => {
    const weeks = buildWeeks(2026, []);
    const dates = weeks.flat().filter(Boolean).map((day) => day.date);
    expect(dates).toHaveLength(365);
    expect(new Set(dates).size).toBe(365);
    expect(dates[0]).toBe('2026-01-01');
    expect(dates[dates.length - 1]).toBe('2026-12-31');
  });

  it('handles leap years', () => {
    const dates = buildWeeks(2024, []).flat().filter(Boolean);
    expect(dates).toHaveLength(366);
  });

  it('attaches contribution counts to their dates', () => {
    const weeks = buildWeeks(2026, [{ date: '2026-03-04', count: 7, level: 3 }]);
    const day = weeks.flat().find((entry) => entry && entry.date === '2026-03-04');
    expect(day).toEqual({ date: '2026-03-04', count: 7, level: 3 });
  });
});

describe('buildMonthHeaders', () => {
  it('places all twelve month labels on their week columns', () => {
    const weeks = buildWeeks(2026, []);
    const headers = buildMonthHeaders(2026, weeks);
    expect(headers).toHaveLength(12);
    expect(headers[0]).toEqual({ name: 'Jan', col: 0 });
    expect(headers[11].name).toBe('Dec');
    expect(headers.every((header) => header.col >= 0 && header.col < weeks.length)).toBe(true);
  });

  it('returns empty list for empty weeks or invalid years', () => {
    expect(buildMonthHeaders(2026, [])).toEqual([]);
    expect(buildMonthHeaders(NaN, [[]])).toEqual([]);
  });
});

describe('formatDayLabel', () => {
  it('pluralises contributions correctly and handles invalid input', () => {
    expect(formatDayLabel({ date: '2026-01-01', count: 0 })).toBe('No contributions on Jan 1, 2026');
    expect(formatDayLabel({ date: '2026-01-01', count: 1 })).toBe('1 contribution on Jan 1, 2026');
    expect(formatDayLabel({ date: '2026-01-01', count: 9 })).toBe('9 contributions on Jan 1, 2026');
    expect(formatDayLabel(null)).toBe('');
  });
});
