import { onBeforeUnmount, onMounted, ref } from 'vue';

const ACTIVE_LINE_OFFSET = 160;

export function useScrollSpy({ sectionIds, progressRef }) {
  const activeSection = ref('');
  const showBackToTop = ref(false);

  let sectionOffsets = [];
  let maxScroll = 1;
  let scrollRaf = null;
  let measureRaf = null;
  let resizeObserver = null;

  const update = () => {
    const y = window.scrollY;
    showBackToTop.value = y > 400;

    // Write the progress bar transform straight to the DOM. Binding it to a
    // reactive value would re-render the whole page on every scroll frame.
    const bar = progressRef.value;
    if (bar) {
      const progress = Math.min(1, Math.max(0, y / maxScroll));
      bar.style.transform = `scaleX(${progress})`;
    }

    // Scroll spy against cached offsets: no layout reads while scrolling.
    let current = '';
    for (let i = 0; i < sectionOffsets.length; i++) {
      if (y + ACTIVE_LINE_OFFSET >= sectionOffsets[i]) current = sectionIds[i];
    }
    if (y >= maxScroll - 6 && sectionIds.length) {
      current = sectionIds[sectionIds.length - 1];
    }
    if (current !== activeSection.value) activeSection.value = current;
  };

  const onScroll = () => {
    // Scroll events fire far more often than the compositor paints. Coalesce
    // them into one update per frame.
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(() => {
      scrollRaf = null;
      update();
    });
  };

  const measure = () => {
    // Measuring forces layout, so never do it more than once per frame.
    if (measureRaf) return;
    measureRaf = requestAnimationFrame(() => {
      measureRaf = null;
      sectionOffsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + window.scrollY : Infinity;
      });
      maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      // Re-evaluate the spy now that offsets are known.
      update();
    });
  };

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  onMounted(() => {
    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);

    // Section offsets shift as content reveals and videos load, so re-measure
    // whenever the page height changes.
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(document.body);
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', measure);
    window.removeEventListener('orientationchange', measure);
    if (resizeObserver) resizeObserver.disconnect();
    if (scrollRaf) cancelAnimationFrame(scrollRaf);
    if (measureRaf) cancelAnimationFrame(measureRaf);
  });

  return { activeSection, showBackToTop, scrollToTop };
}
