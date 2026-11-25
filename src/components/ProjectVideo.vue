<template>
  <figure class="pv" :data-testid="`project-video-${id}`">
    <div class="pv-bar">
      <span class="pv-dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="pv-url">{{ url }}</span>
    </div>
    <div class="pv-stage">
      <video
        ref="videoRef"
        :src="videoSrc"
        :poster="poster || undefined"
        muted
        loop
        playsinline
        preload="none"
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

const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, default: '' },
  src: { type: String, required: true },
  poster: { type: String, default: '' },
  url: { type: String, default: '' }
});

const videoRef = ref(null);
const playing = ref(false);
const videoSrc = ref(null);
const failed = ref(false);

let userPaused = false;
let visible = false;
let reduceMotion = false;
let unmounted = false;
let observer = null;
let lazyObserver = null;
let visibilityHandler = null;

function play() {
  const video = videoRef.value;
  if (!video || failed.value) return;
  if (!videoSrc.value) {
    load({ autoplay: true });
    return;
  }
  const result = video.play();
  if (result && typeof result.catch === 'function') result.catch(() => {});
}

function load({ autoplay = false } = {}) {
  if (videoSrc.value) return;
  // null -> the src attribute is absent until we actually need the bytes.
  videoSrc.value = props.src;
  nextTick(() => {
    if (unmounted) return;
    const video = videoRef.value;
    if (!video) return;
    video.preload = 'metadata';
    video.load();
    // Play if user explicitly triggered it, or if visible with autoplay allowed.
    if (autoplay || (visible && !userPaused && !reduceMotion)) {
      play();
    }
  });
}

function toggle() {
  const video = videoRef.value;
  if (!video || failed.value) return;
  if (!videoSrc.value) {
    userPaused = false;
    load({ autoplay: true });
    return;
  }
  if (video.paused) {
    userPaused = false;
    play();
  } else {
    userPaused = true;
    video.pause();
  }
}

onMounted(() => {
  const video = videoRef.value;
  if (!video || typeof window === 'undefined') return;

  // Safari/iOS only honour autoplay when the property (not just the
  // attribute) is set before play() is called.
  video.muted = true;
  reduceMotion = prefersReducedMotion();

  // A backgrounded tab should not keep decoding frames.
  visibilityHandler = () => {
    if (typeof document === 'undefined') return;
    if (document.hidden) {
      video.pause();
    } else if (visible && !userPaused && !reduceMotion) {
      play();
    }
  };
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', visibilityHandler);
  }

  if (!('IntersectionObserver' in window)) {
    visible = true;
    load();
    return;
  }

  // Only pull the video bytes once the card is near the viewport. Without
  // this every clip is fetched during initial page load.
  lazyObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      load();
      lazyObserver?.disconnect();
      lazyObserver = null;
    },
    { rootMargin: '400px 0px' }
  );
  lazyObserver.observe(video);

  observer = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !userPaused && !reduceMotion) play();
      else if (!visible) video.pause();
    },
    { threshold: 0.5 }
  );
  observer.observe(video);
});

onBeforeUnmount(() => {
  unmounted = true;
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  if (lazyObserver) {
    lazyObserver.disconnect();
    lazyObserver = null;
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
.pv{margin:0;border-radius:14px;overflow:hidden;border:1px solid rgba(52,255,110,.22);background:#050b07;box-shadow:0 18px 50px rgba(0,0,0,.65),0 0 0 1px rgba(0,0,0,.4),0 0 32px rgba(52,255,110,.06);transition:box-shadow .3s var(--ease-out),border-color .3s var(--ease-out);}
.pv:hover{border-color:rgba(52,255,110,.45);box-shadow:0 22px 60px rgba(0,0,0,.7),0 0 40px rgba(52,255,110,.14)}
.pv-bar{display:flex;align-items:center;gap:.75rem;padding:.55rem .8rem;background:rgba(255,255,255,.035);border-bottom:1px solid rgba(52,255,110,.12)}
.pv-dots{display:flex;gap:.35rem}
.pv-dots i{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.14)}
.pv-dots i:first-child{background:rgba(52,255,110,.55)}
.pv-url{flex:1;font-family:var(--font-mono);font-size:.62rem;letter-spacing:.06em;color:var(--muted);padding:.2rem .6rem;border-radius:5px;background:rgba(0,0,0,.35);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pv-stage{position:relative;aspect-ratio:16/10;background:#000}
.pv-stage video{display:block;width:100%;height:100%;object-fit:cover;cursor:pointer}
.pv-btn{position:absolute;right:.7rem;bottom:.7rem;width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:rgba(0,0,0,.6);border:1px solid rgba(52,255,110,.45);color:var(--green);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);opacity:.75;transition:opacity .2s,transform .2s var(--ease-out),background .2s}
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
