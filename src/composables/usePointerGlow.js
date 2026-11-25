import { onBeforeUnmount, onMounted } from 'vue';
import { canHoverPointer, prefersReducedMotion } from '@/utils/media';

// Pointer-tracking glow for the background spotlight and card sheen.
// Only runs on devices with a real hovering pointer; touch devices get a
// static backdrop instead of a 60fps no-op.
export function usePointerGlow(spotlightRef) {
  let frame = null;
  let hoveredCard = null;
  let hoveredRect = null;
  let rectDirty = false;
  let enabled = false;

  const onPointerMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    if (frame) return;

    frame = requestAnimationFrame(() => {
      frame = null;

      const spotlight = spotlightRef.value;
      if (spotlight) {
        spotlight.style.setProperty('--mx', `${x}px`);
        spotlight.style.setProperty('--my', `${y}px`);
      }

      if (!hoveredCard) return;
      // Re-measure only after scrolling or resizing; pointer movement alone
      // never forces a layout read.
      if (!hoveredRect || rectDirty) {
        hoveredRect = hoveredCard.getBoundingClientRect();
        rectDirty = false;
      }
      hoveredCard.style.setProperty('--cx', `${x - hoveredRect.left}px`);
      hoveredCard.style.setProperty('--cy', `${y - hoveredRect.top}px`);
    });
  };

  const onPointerOver = (event) => {
    const target = event.target;
    const card = target && target.closest ? target.closest('.glass') : null;
    if (card === hoveredCard) return;
    hoveredCard = card;
    hoveredRect = card ? card.getBoundingClientRect() : null;
    rectDirty = false;
  };

  const markRectDirty = () => {
    if (hoveredCard) rectDirty = true;
  };

  onMounted(() => {
    if (typeof window === 'undefined') return;
    enabled = canHoverPointer() && !prefersReducedMotion();
    if (!enabled) return;

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerover', onPointerOver, { passive: true });
    window.addEventListener('scroll', markRectDirty, { passive: true });
    window.addEventListener('resize', markRectDirty, { passive: true });
  });

  onBeforeUnmount(() => {
    if (!enabled) return;
    if (typeof window !== 'undefined') {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerover', onPointerOver);
      window.removeEventListener('scroll', markRectDirty);
      window.removeEventListener('resize', markRectDirty);
    }
    if (frame) {
      cancelAnimationFrame(frame);
      frame = null;
    }
    hoveredCard = null;
    hoveredRect = null;
  });
}
