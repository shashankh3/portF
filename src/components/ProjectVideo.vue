<template>
  <figure class="pv" :data-testid="`project-video-${id}`">
    <div class="pv-bar">
      <span class="pv-dots"><i></i><i></i><i></i></span>
      <span class="pv-url">{{ url }}</span>
    </div>
    <div class="pv-stage">
      <video
        ref="video"
        :src="videoSrc"
        :poster="poster"
        muted
        loop
        playsinline
        preload="none"
        disablepictureinpicture
        disableremoteplayback
        :aria-label="`${id} demo recording`"
        @click="toggle"
      ></video>
      <button
        class="pv-btn"
        type="button"
        :aria-label="playing ? 'Pause video' : 'Play video'"
        :data-testid="`project-video-toggle-${id}`"
        @click="toggle"
      >
        <svg v-if="playing" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
        <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>
      </button>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'ProjectVideo',
  props: { id: String, src: String, poster: String, url: String },
  data: () => ({ playing: false, userPaused: false, visible: false, videoSrc: null }),
  mounted() {
    const v = this.$refs.video;
    if (!v) return;
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    v.addEventListener('play', () => { this.playing = true; });
    v.addEventListener('pause', () => { this.playing = false; });

    // Only pull the video bytes once the card is near the viewport. Without
    // this every clip is fetched during initial page load.
    this.lazyObserver = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        this.load();
        if (this.lazyObserver) this.lazyObserver.disconnect();
      }
    }, { rootMargin: '400px 0px' });
    this.lazyObserver.observe(this.$el);

    this.observer = new IntersectionObserver(([e]) => {
      this.visible = e.isIntersecting;
      if (this.visible && !this.userPaused && !this.reduceMotion) this.play();
      else if (!this.visible) v.pause();
    }, { threshold: 0.5 });
    this.observer.observe(v);

    // A backgrounded tab should not keep decoding frames.
    this.visibilityHandler = () => {
      if (document.hidden) {
        v.pause();
      } else if (this.visible && !this.userPaused && !this.reduceMotion) {
        this.play();
      }
    };
    document.addEventListener('visibilitychange', this.visibilityHandler);
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
    if (this.lazyObserver) this.lazyObserver.disconnect();
    if (this.visibilityHandler) document.removeEventListener('visibilitychange', this.visibilityHandler);
    const v = this.$refs.video;
    if (v) {
      v.pause();
      v.removeAttribute('src');
      v.load();
    }
  },
  methods: {
    load() {
      if (this.videoSrc) return;
      const v = this.$refs.video;
      if (v) v.preload = 'metadata';
      // null -> the src attribute is absent until we actually need the bytes.
      this.videoSrc = this.src;
      if (v) v.load();
      // The clip may have become visible before it was fetched.
      if (this.visible && !this.userPaused && !this.reduceMotion) {
        this.$nextTick(() => this.play());
      }
    },
    play() {
      const v = this.$refs.video;
      if (!v) return;
      if (!this.videoSrc) { this.load(); return; }
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    },
    toggle() {
      const v = this.$refs.video;
      if (!v) return;
      if (!this.videoSrc) {
        this.load();
        this.userPaused = false;
        this.play();
        return;
      }
      if (v.paused) { this.userPaused = false; this.play(); }
      else { this.userPaused = true; v.pause(); }
    }
  }
};
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
.pv-btn svg{display:block}
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
