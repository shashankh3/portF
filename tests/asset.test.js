import { describe, expect, it } from 'vitest';
import { resolveAsset } from '@/utils/asset.js';

describe('resolveAsset', () => {
  it('resolves public files from the deployment root', () => {
    expect(resolveAsset('/videos/demo.mp4', '/')).toBe('/videos/demo.mp4');
    expect(resolveAsset('videos/demo.mp4', '/')).toBe('/videos/demo.mp4');
  });

  it('prefixes project pages served from a subdirectory', () => {
    expect(resolveAsset('/videos/demo.mp4', '/portF/')).toBe('/portF/videos/demo.mp4');
    expect(resolveAsset('videos/demo.mp4', '/portF')).toBe('/portF/videos/demo.mp4');
  });

  it('collapses duplicate leading slashes', () => {
    expect(resolveAsset('//videos/demo.mp4', '/')).toBe('/videos/demo.mp4');
  });

  it('falls back to root when base is blank or nullish', () => {
    expect(resolveAsset('/favicon.svg', '')).toBe('/favicon.svg');
    expect(resolveAsset('/favicon.svg', '   ')).toBe('/favicon.svg');
    expect(resolveAsset('/favicon.svg', null)).toBe('/favicon.svg');
  });

  it('leaves external URLs and data URIs untouched', () => {
    expect(resolveAsset('https://example.com/demo.mp4', '/portF/')).toBe('https://example.com/demo.mp4');
    expect(resolveAsset('data:image/svg+xml,<svg/>', '/portF/')).toBe('data:image/svg+xml,<svg/>');
  });
});
