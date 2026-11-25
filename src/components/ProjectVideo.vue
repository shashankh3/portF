<template>
  <figure class="pv" :data-testid="`project-video-${id}`">
    <div class="pv-bar">
      <span class="pv-dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="pv-url">{{ url }}</span>
    </div>
    <div ref="stageRef" class="pv-stage">
      <img
        v-if="poster"
        ref="posterRef"
        :src="poster"
        alt=""
        class="pv-poster"
        decoding="async"
        loading="eager"
        @click="toggle"
      >
      <video
        v-if="videoMounted"
        ref="videoRef"
        :src="src"
        :poster="poster || undefined"
        preload="metadata"
        muted
        loop
        playsinline
        disablepictureinpicture
        disableremoteplayback
        :aria-label="`${label || id} demo recording`"
        @click="toggle"
        @play="playing = true"
        @pause="playing = false"
        @error="failed = true"
      ></video>
      <button
        v-if="!failed"
        class="pv-btn"
        type="button"
        :aria-label="playing ? 'Pause video' : 'Play video'"
        :data-testid="`project-video-toggle-${id}`"
        @click="toggle"
      >
        <AppIcon :name="playing ? 'pause' : 'play'" :size="14" />
      </button>
    </div>
  </figure>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import AppIcon from '@/components/AppIcon.vue';
import { prefersReducedMotion } from '@/utils/media';

const PLAY_SETTLE_MS = 260;

defineProps({
  id: { type: String, required: true },
  label: { type: String, default: '' },
  src: { type: String, required: true },
  poster: { type: String, default: '' },
  url: { type: String, default: '' }
});

const stageRef = ref(null);
const posterRef = ref(null);
const videoRef = ref(null);
const playing = ref(false);
const videoMounted = ref(false);
const failed = ref(false);

let userPaused = false;
let visible = false;
let reduceMotion = false;
let unmounted = false;
let observer = null;
let visibilityHandler = null;
let scrollHandler = null;
let settleTimer = null;
let idleDecodeHandle = null;
let idleDecodeTimer = null;

function clearSettleTimer() {
  if (settleTimer) {
    clearTimeout(settleTimer);
    settleTimer = null;
  }
}

function clearIdleDecode() {
  if (
    idleDecodeHandle !== null &&
    typeof window !== 'undefined' &&
    typeof window.cancelIdleCallback === 'function'
  ) {
    window.cancelIdleCallback(idleDecodeHandle);
    idleDecodeHandle = null;
  }
  if (idleDecodeTimer) {
    clearTimeout(idleDecodeTimer);
    idleDecodeTimer = null;
  }
}

function playVideo() {
  const video = videoRef.value;
  if (!video || failed.value) return;
  const result = video.play();
  if (result && typeof result.catch === 'function') result.catch(() => {});
}

function mountAndPlay({ force = false } = {}) {
  if (!force && (!visible || userPaused || reduceMotion)) return;
  if (!videoMounted.value) {
    videoMounted.value = true;
    nextTick(() => {
      if (unmounted) return;
      const video = videoRef.value;
      if (!video) return;
      // Safari/iOS only honour autoplay when the property is set before play().
      video.muted = true;
      if (force || (visible && !userPaused && !reduceMotion)) {
        playVideo();
      }
    });
    return;
  }
  playVideo();
}

function scheduleSettlePlay() {
  clearSettleTimer();
  if (!visible || userPaused || reduceMotion) return;
  // Mount and decode video only after scroll settles so fast scrolling stays at 60fps
  // with crisp pre-decoded poster images and zero MediaFoundation stalls.
  settleTimer = setTimeout(() => {
    settleTimer = null;
    mountAndPlay();
  }, PLAY_SETTLE_MS);
}

function toggle() {
  if (failed.value) return;
  clearSettleTimer();
  if (!videoMounted.value) {
    userPaused = false;
    mountAndPlay({ force: true });
    return;
  }
  const video = videoRef.value;
  if (!video) return;
  if (video.paused) {
    userPaused = false;
    playVideo();
  } else {
    userPaused = true;
    video.pause();
  }
}

onMounted(() => {
  const stage = stageRef.value;
  if (!stage || typeof window === 'undefined') return;

  reduceMotion = prefersReducedMotion();

  // Pre-decode poster JPEG during idle time so scrolling past project cards
  // never stalls waiting on image decode.
  const predecodePoster = () => {
    const img = posterRef.value;
    if (img && typeof img.decode === 'function') {
      img.decode().catch(() => {});
    }
  };
  if (typeof window.requestIdleCallback === 'function') {
    idleDecodeHandle = window.requestIdleCallback(predecodePoster, { timeout: 600 });
  } else {
    idleDecodeTimer = setTimeout(predecodePoster, 200);
  }

  scrollHandler = () => {
    if (!visible) return;
    clearSettleTimer();
    const video = videoRef.value;
    if (video && !video.paused) video.pause();
    scheduleSettlePlay();
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });

  visibilityHandler = () => {
    if (typeof document === 'undefined') return;
    const video = videoRef.value;
    if (document.hidden) {
      clearSettleTimer();
      if (video) video.pause();
    } else if (visible && !userPaused && !reduceMotion) {
      scheduleSettlePlay();
    }
  };
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', visibilityHandler);
  }

  if (!('IntersectionObserver' in window)) {
    visible = true;
    mountAndPlay();
    return;
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        scheduleSettlePlay();
      } else {
        clearSettleTimer();
        const video = videoRef.value;
        if (video) video.pause();
      }
    },
    { threshold: 0.45 }
  );
  observer.observe(stage);
});

onBeforeUnmount(() => {
  unmounted = true;
  clearSettleTimer();
  clearIdleDecode();
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  if (scrollHandler && typeof window !== 'undefined') {
    window.removeEventListener('scroll', scrollHandler);
    scrollHandler = null;
  }
  if (visibilityHandler && typeof document !== 'undefined') {
    document.removeEventListener('visibilitychange', visibilityHandler);
    visibilityHandler = null;
  }
  const video = videoRef.value;
  if (video) {
    video.pause();
    video.removeAttribute('src');
    video.load();
  }
});
</script>

<style scoped>
.pv{margin:0;border-radius:14px;overflow:hidden;border:1px solid rgba(52,255,110,.22);background:#050b07;box-shadow:0 12px 32px rgba(0,0,0,.5);transition:border-color .2s var(--ease-out);}
.pv:hover{border-color:rgba(52,255,110,.45)}
.pv-bar{display:flex;align-items:center;gap:.75rem;padding:.55rem .8rem;background:rgba(255,255,255,.035);border-bottom:1px solid rgba(52,255,110,.12)}
.pv-dots{display:flex;gap:.35rem}
.pv-dots i{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.14)}
.pv-dots i:first-child{background:rgba(52,255,110,.55)}
.pv-url{flex:1;font-family:var(--font-mono);font-size:.62rem;letter-spacing:.06em;color:var(--muted);padding:.2rem .6rem;border-radius:5px;background:rgba(0,0,0,.35);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pv-stage{position:relative;aspect-ratio:16/10;background:#000;contain:layout style paint}
.pv-poster,.pv-stage video{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;cursor:pointer}
.pv-btn{position:absolute;right:.7rem;bottom:.7rem;z-index:2;width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:rgba(0,0,0,.72);border:1px solid rgba(52,255,110,.45);color:var(--green);opacity:.75;transition:opacity .2s,transform .2s var(--ease-out),background .2s}
.pv-btn :deep(svg){display:block}
.pv-stage:hover .pv-btn,.pv-btn:focus-visible{opacity:1}
.pv-btn:hover{transform:scale(1.08);background:rgba(52,255,110,.18)}
@media(max-width:640px){
  .pv{border-radius:12px}
  .pv-bar{gap:.55rem;padding:.45rem .65rem}
  .pv-dots i{width:7px;height:7px}
  .pv-url{font-size:.56rem;padding:.16rem .5rem}
  .pv-btn{width:40px;height:40px;right:.55rem;bottom:.55rem;opacity:1}
}
</style>
