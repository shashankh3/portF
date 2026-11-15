import { onBeforeUnmount, onMounted } from 'vue';

// The falling-code effect. Visual constants are intentionally fixed: this is
// the signature look of the site, so speed, cell size and trail fade must not
// drift. Only render resolution adapts to the device.

const CHARS = 'アァイィウェオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]/*+-=|\\:;'.split('');
const SIZE = 15;
const FRAME_MS = 40;
const FADE = 'rgba(0,0,0,0.055)';
const HEAD_BLOOM = 'rgba(52,255,110,0.18)';
const COLOR_HEAD = '#ffffff';
const COLOR_BRIGHT = '#b2ffd6';
const COLOR_MID = '#34ff6e';
const COLOR_BODY = '#16a842';

// Startup work (compile, layout, font swap) delays the first frame. Ignore it
// rather than mistaking it for a device that cannot keep up.
const WARMUP_MS = 4000;
const LAG_THRESHOLD = 40;
const LAG_SMOOTHING = 0.95;

export function useMatrixRain(canvasRef) {
  let ctx = null;
  let drops = [];
  let width = 0;
  let height = 0;
  let interval = null;
  let lastTick = 0;
  let scale = 1;
  let lag = 0;
  let downgraded = false;
  let warmupUntil = 0;
  let reduceMotion = false;
  let motionQuery = null;

  // Rendering past ~1.5x gains almost nothing for a soft glow effect while
  // quadrupling the per-frame fill cost of the full-canvas fade.
  const idealScale = () => {
    const dpr = window.devicePixelRatio || 1;
    const cap = window.innerWidth < 768 ? 1.25 : 1.5;
    return Math.min(dpr, cap);
  };

  // Reduced motion gets a single static frame instead of an animation.
  const paintStatic = () => {
    if (!ctx) return;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    ctx.font = `${SIZE}px monospace`;
    for (let i = 0; i < drops.length; i++) {
      ctx.fillStyle = Math.random() > 0.75 ? COLOR_MID : COLOR_BODY;
      ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * SIZE, Math.random() * height);
    }
  };

  const resize = () => {
    if (!ctx) return;
    // Follow the device cap unless a struggling device already downgraded.
    if (!downgraded) scale = idealScale();

    const nextWidth = window.innerWidth;
    const nextHeight = window.innerHeight;
    const cols = Math.floor(nextWidth / SIZE);

    // Rebuild columns only when the grid changed, so a quality downgrade does
    // not make the rain visibly restart.
    if (nextWidth !== width || nextHeight !== height || drops.length !== cols) {
      drops = Array.from({ length: cols }, () => Math.floor((Math.random() * -nextHeight) / SIZE));
    }
    width = nextWidth;
    height = nextHeight;

    canvasRef.value.width = Math.floor(width * scale);
    canvasRef.value.height = Math.floor(height * scale);
    canvasRef.value.style.width = `${width}px`;
    canvasRef.value.style.height = `${height}px`;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);

    // A canvas resize clears its bitmap; restore the still frame.
    if (reduceMotion) paintStatic();
  };

  const draw = () => {
    const now = performance.now();
    if (now > warmupUntil) {
      // Only sustained, severe lag counts as "this device is struggling".
      lag = lag * LAG_SMOOTHING + Math.max(0, now - lastTick - FRAME_MS) * (1 - LAG_SMOOTHING);
      if (!downgraded && lag > LAG_THRESHOLD) {
        downgraded = true;
        // Never below 1x: that would be softer than the original effect.
        scale = 1;
        resize();
      }
    }
    lastTick = now;

    ctx.fillStyle = FADE;
    ctx.fillRect(0, 0, width, height);
    ctx.font = `${SIZE}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const x = i * SIZE;
      const y = drops[i] * SIZE;
      const r = Math.random();
      const glyph = CHARS[Math.floor(Math.random() * CHARS.length)];

      if (r > 0.98) {
        // Bright head glyph with a faux-bloom for the phosphor glow.
        ctx.font = `${SIZE + 4}px monospace`;
        ctx.fillStyle = HEAD_BLOOM;
        ctx.fillText(glyph, x, y - 2);
        ctx.font = `${SIZE}px monospace`;
        ctx.fillStyle = COLOR_HEAD;
        ctx.fillText(glyph, x, y);
      } else if (r > 0.92) {
        ctx.fillStyle = COLOR_BRIGHT;
        ctx.fillText(glyph, x, y);
      } else if (r > 0.7) {
        ctx.fillStyle = COLOR_MID;
        ctx.fillText(glyph, x, y);
      } else {
        ctx.fillStyle = COLOR_BODY;
        ctx.fillText(glyph, x, y);
      }

      if (y > height && Math.random() > 0.977) drops[i] = 0;
      drops[i]++;
    }
  };

  const start = () => {
    if (interval || reduceMotion) return;
    lastTick = performance.now();
    interval = setInterval(draw, FRAME_MS);
  };

  const stop = () => {
    if (!interval) return;
    clearInterval(interval);
    interval = null;
  };

  const onVisibilityChange = () => {
    if (document.hidden) stop();
    else start();
  };

  const onMotionPreferenceChange = (event) => {
    reduceMotion = event.matches;
    if (reduceMotion) {
      stop();
      paintStatic();
    } else {
      start();
    }
  };

  onMounted(() => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    if (!ctx) return;

    motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduceMotion = motionQuery.matches;
    scale = idealScale();
    warmupUntil = performance.now() + WARMUP_MS;

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibilityChange);
    if (typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', onMotionPreferenceChange);
    }

    // resize() has already painted the still frame when motion is reduced;
    // start() is a no-op in that case.
    start();
  });

  onBeforeUnmount(() => {
    stop();
    window.removeEventListener('resize', resize);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    if (motionQuery && typeof motionQuery.removeEventListener === 'function') {
      motionQuery.removeEventListener('change', onMotionPreferenceChange);
    }
  });
}
