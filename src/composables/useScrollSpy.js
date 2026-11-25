import { onBeforeUnmount, onMounted, ref } from 'vue';
import { prefersReducedMotion } from '@/utils/media';

const ACTIVE_LINE_OFFSET = 160;
const BOTTOM_THRESHOLD_PX = 6;
const BACK_TO_TOP_THRESHOLD_PX = 400;

export function resolveScrollState({ scrollY, maxScroll, sectionIds, sectionOffsets }) {
  const showBackToTop = scrollY > BACK_TO_TOP_THRESHOLD_PX;
  const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;

  let activeSection = '';
  for (let i = 0; i < sectionOffsets.length; i++) {
    if (scrollY + ACTIVE_LINE_OFFSET >= sectionOffsets[i]) {
      activeSection = sectionIds[i];
    }
  }
  if (maxScroll > 0 && scrollY >= maxScroll - BOTTOM_THRESHOLD_PX && sectionIds.length) {
    activeSection = sectionIds[sectionIds.length - 1];
  }

  return { activeSection, showBackToTop, progress };
}

export function useScrollSpy({ sectionIds, progressRef = null }) {
  const activeSection = ref('');
  const showBackToTop = ref(false);

  let sectionOffsets = [];
  let maxScroll = 0;
  let lastProgress = -1;
  let scrollRaf = null;
  let measureRaf = null;
  let resizeObserver = null;
  let listening = false;

  const update = () => {
    const state = resolveScrollState({
      scrollY: window.scrollY,
      maxScroll,
      sectionIds,
      sectionOffsets
    });

    if (state.showBackToTop !== showBackToTop.value) {
      showBackToTop.value = state.showBackToTop;
    }

    // Write the progress bar transform straight to the DOM. Binding it to a
    // reactive value would re-render the whole page on every scroll frame.
    const bar = progressRef?.value;
    if (bar && state.progress !== lastProgress) {
      lastProgress = state.progress;
      bar.style.transform = `scaleX(${state.progress})`;
    }

    if (state.activeSection !== activeSection.value) {
      activeSection.value = state.activeSection;
    }
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
      maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      // Re-evaluate the spy now that offsets are known.
      update();
    });
  };

  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  onMounted(() => {
    if (
      typeof window === 'undefined' ||
      typeof document === 'undefined' ||
      typeof window.addEventListener !== 'function'
    ) {
      return;
    }

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    listening = true;

    // Section offsets shift as content reveals and videos load, so re-measure
    // whenever the page height changes.
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(document.body);
    }
  });

  onBeforeUnmount(() => {
    if (listening && typeof window !== 'undefined' && typeof window.removeEventListener === 'function') {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measure);
      listening = false;
    }
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
    if (scrollRaf) {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = null;
    }
    if (measureRaf) {
      cancelAnimationFrame(measureRaf);
      measureRaf = null;
    }
  });

  return { activeSection, showBackToTop, scrollToTop };
}
