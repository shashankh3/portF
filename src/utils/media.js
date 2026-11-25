// Browser media-query helpers guarded for SSR and non-DOM test environments.

export function getMediaQueryList(query) {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return null;
  }
  return window.matchMedia(query);
}

export function matchesMedia(query) {
  const list = getMediaQueryList(query);
  return Boolean(list && list.matches);
}

export function prefersReducedMotion() {
  return matchesMedia('(prefers-reduced-motion: reduce)');
}

export function canHoverPointer() {
  return matchesMedia('(hover: hover) and (pointer: fine)');
}
