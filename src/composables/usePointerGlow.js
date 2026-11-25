import { onBeforeUnmount, onMounted } from 'vue';
import { canHoverPointer, prefersReducedMotion } from '@/utils/media';

const SCROLL_PAUSE_MS = 100;

function nowMs() {
  return typeof performance !== 'undefined' && typeof performance.now === 'function'
    ? performance.now()
    : Date.now();
}

// Pointer-tracking glow for the background spotlight and card sheen.
// Only runs on devices with a real hovering pointer; defers layout reads into
// rAF and pauses per-card gradient repaints during active scroll.
export function usePointerGlow(spotlightRef) {
  let frame = null;
  let hoveredCard = null;
  let hoveredRect = null;
  let rectDirty = false;
  let enabled = false;
  let lastX = NaN;
  let lastY = NaN;
  let lastScrollAt = -Infinity;

  const onPointerMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    if (x === lastX && y === lastY) return;
    lastX = x;
    lastY = y;
    if (frame) return;

    frame = requestAnimationFrame(() => {
      frame = null;

      const spotlight = spotlightRef.value;
      if (spotlight) {
        spotlight.style.setProperty('--mx', `${lastX}px`);
        spotlight.style.setProperty('--my', `${lastY}px`);
      }

      if (!hoveredCard || nowMs() - lastScrollAt < SCROLL_PAUSE_MS) return;

      // Re-measure only inside rAF after hover target changes, scroll, or resize.
      if (!hoveredRect || rectDirty) {
        hoveredRect = hoveredCard.getBoundingClientRect();
        rectDirty = false;
      }
      hoveredCard.style.setProperty('--cx', `${lastX - hoveredRect.left}px`);
      hoveredCard.style.setProperty('--cy', `${lastY - hoveredRect.top}px`);
    });
  };

  const onPointerOver = (event) => {
    const target = event.target;
    const card = target && target.closest ? target.closest('.glass') : null;
    if (card === hoveredCard) return;
    hoveredCard = card;
    hoveredRect = null;
    rectDirty = Boolean(card);
  };

  const onScroll = () => {
    lastScrollAt = nowMs();
    if (hoveredCard) rectDirty = true;
  };

  const onResize = () => {
    if (hoveredCard) rectDirty = true;
  };

  onMounted(() => {
    if (typeof window === 'undefined') return;
    enabled = canHoverPointer() && !prefersReducedMotion();
    if (!enabled) return;

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerover', onPointerOver, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
  });

  onBeforeUnmount(() => {
    if (!enabled) return;
    if (typeof window !== 'undefined') {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerover', onPointerOver);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    }
    if (frame) {
      cancelAnimationFrame(frame);
      frame = null;
    }
    hoveredCard = null;
    hoveredRect = null;
  });
}
