import { onBeforeUnmount, onMounted } from 'vue';

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
      // Re-measure only after scrolling; pointer movement alone never forces
      // a layout read.
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

  const onScroll = () => {
    if (hoveredCard) rectDirty = true;
  };

  onMounted(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    enabled = canHover && !reduceMotion;
    if (!enabled) return;

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerover', onPointerOver, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
  });

  onBeforeUnmount(() => {
    if (!enabled) return;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerover', onPointerOver);
    window.removeEventListener('scroll', onScroll);
    if (frame) cancelAnimationFrame(frame);
  });
}
