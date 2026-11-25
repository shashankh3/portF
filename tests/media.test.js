import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  canHoverPointer,
  getMediaQueryList,
  matchesMedia,
  prefersReducedMotion
} from '@/utils/media.js';

describe('media helpers', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns safe defaults when window or matchMedia is absent', () => {
    expect(getMediaQueryList('(prefers-reduced-motion: reduce)')).toBeNull();
    expect(matchesMedia('(prefers-reduced-motion: reduce)')).toBe(false);
    expect(prefersReducedMotion()).toBe(false);
    expect(canHoverPointer()).toBe(false);
  });

  it('queries window.matchMedia when available', () => {
    vi.stubGlobal('window', {
      matchMedia: vi.fn((query) => ({
        matches: query.includes('prefers-reduced-motion')
      }))
    });

    expect(prefersReducedMotion()).toBe(true);
    expect(canHoverPointer()).toBe(false);
  });
});
