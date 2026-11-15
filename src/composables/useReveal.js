import { onBeforeUnmount, onMounted } from 'vue';

const STAGGER_MS = 80;
const MAX_STAGGER_STEPS = 6;

export function useReveal(rootRef) {
  let observer = null;

  onMounted(() => {
    const root = rootRef.value;
    if (!root) return;

    const items = Array.from(root.querySelectorAll('[data-reveal]'));
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    // Stagger siblings so grids cascade instead of popping in together.
    items.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const siblings = Array.from(parent.children).filter((child) => child.hasAttribute('data-reveal'));
      const index = siblings.indexOf(el);
      if (index > 0) {
        el.style.setProperty('--reveal-delay', `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
      }
    });

    document.documentElement.classList.add('reveal-ready');

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );

    items.forEach((el) => observer.observe(el));
  });

  onBeforeUnmount(() => {
    if (observer) observer.disconnect();
    document.documentElement.classList.remove('reveal-ready');
  });
}
