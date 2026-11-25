import { onBeforeUnmount, onMounted, ref } from 'vue';

// Defers mounting a heavy child past initial paint, then warms it eagerly on
// idle (or immediately if the sentinel approaches the viewport) so scrolling
// never triggers mid-scroll chunk loads or layout shifts.
export function useLazySection(sentinelRef, { rootMargin = '900px 0px', eagerDelayMs = null } = {}) {
  const ready = ref(false);
  let observer = null;
  let idleHandle = null;
  let timer = null;

  const activate = () => {
    if (ready.value) return;
    ready.value = true;
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (idleHandle !== null && typeof window !== 'undefined' && typeof window.cancelIdleCallback === 'function') {
      window.cancelIdleCallback(idleHandle);
      idleHandle = null;
    }
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  onMounted(() => {
    const sentinel = sentinelRef.value;
    if (typeof window === 'undefined' || !sentinel || !('IntersectionObserver' in window)) {
      ready.value = true;
      return;
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) activate();
      },
      { rootMargin }
    );
    observer.observe(sentinel);

    if (typeof eagerDelayMs === 'number' && eagerDelayMs >= 0) {
      if (typeof window.requestIdleCallback === 'function') {
        idleHandle = window.requestIdleCallback(activate, { timeout: eagerDelayMs });
      } else {
        timer = setTimeout(activate, eagerDelayMs);
      }
    }
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (idleHandle !== null && typeof window !== 'undefined' && typeof window.cancelIdleCallback === 'function') {
      window.cancelIdleCallback(idleHandle);
      idleHandle = null;
    }
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  });

  return ready;
}
