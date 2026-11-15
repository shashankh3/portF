import { onBeforeUnmount, onMounted, ref } from 'vue';

// Defers mounting a heavy child until a sentinel approaches the viewport.
export function useLazySection(sentinelRef, { rootMargin = '900px 0px' } = {}) {
  const ready = ref(false);
  let observer = null;

  onMounted(() => {
    const sentinel = sentinelRef.value;
    if (!sentinel || !('IntersectionObserver' in window)) {
      ready.value = true;
      return;
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        ready.value = true;
        observer.disconnect();
        observer = null;
      },
      { rootMargin }
    );
    observer.observe(sentinel);
  });

  onBeforeUnmount(() => {
    if (observer) observer.disconnect();
  });

  return ready;
}
