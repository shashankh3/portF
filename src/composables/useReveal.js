import { onBeforeUnmount, onMounted } from 'vue';

const STAGGER_MS = 25;
const MAX_STAGGER_STEPS = 2;

export function useReveal(rootRef) {
  let observer = null;

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
      // Pre-reveal slightly ahead of the viewport so content is already visible
      // and composited before the user's eye reaches it during fast scrolling.
      { threshold: 0, rootMargin: '180px 0px 180px 0px' }
    );

    items.forEach((el) => observer.observe(el));
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('reveal-ready');
    }
  });
}
