import { onBeforeUnmount, onMounted } from 'vue';

const STAGGER_MS = 25;
const MAX_STAGGER_STEPS = 2;
const IDLE_REVEAL_TIMEOUT_MS = 400;

export function useReveal(rootRef) {
  let observer = null;
  let idleHandle = null;
  let idleTimer = null;

  const clearIdle = () => {
    if (idleHandle !== null && typeof window !== 'undefined' && typeof window.cancelIdleCallback === 'function') {
      window.cancelIdleCallback(idleHandle);
      idleHandle = null;
    }
    if (idleTimer) {
      clearTimeout(idleTimer);
      idleTimer = null;
    }
  };

  onMounted(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const root = rootRef.value;
    if (!root) return;

    const items = Array.from(root.querySelectorAll('[data-reveal]'));
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    // Stagger siblings lightly so grids feel cohesive without delaying reads.
    const siblingCounts = new WeakMap();
    for (const el of items) {
      const parent = el.parentElement;
      if (!parent) continue;
      const index = siblingCounts.get(parent) ?? 0;
      siblingCounts.set(parent, index + 1);
      if (index > 0) {
        el.style.setProperty('--reveal-delay', `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
      }
    }

    document.documentElement.classList.add('reveal-ready');

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: '180px 0px 180px 0px' }
    );

    items.forEach((el) => observer.observe(el));

    // Pre-reveal remaining off-screen sections once the browser is idle after
    // initial paint, so scrolling down never triggers mid-scroll GPU tile raster flushes.
    const revealAll = () => {
      for (const el of items) {
        el.classList.add('is-visible');
      }
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };

    if (typeof window.requestIdleCallback === 'function') {
      idleHandle = window.requestIdleCallback(revealAll, { timeout: IDLE_REVEAL_TIMEOUT_MS });
    } else {
      idleTimer = setTimeout(revealAll, IDLE_REVEAL_TIMEOUT_MS);
    }
  });

  onBeforeUnmount(() => {
    clearIdle();
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('reveal-ready');
    }
  });
}
