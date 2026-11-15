import { describe, expect, it } from 'vitest';
import { resolveAsset } from '../src/utils/asset.js';

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
});
