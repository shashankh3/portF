<template>
  <figure class="pv pv-mockup" :data-testid="`project-mockup-${id}`">
    <div class="pv-bar">
      <span class="pv-dots"><i></i><i></i><i></i></span>
      <span class="pv-url">{{ url }}</span>
      <span class="pv-tag">{{ type === 'mobile' ? 'ANDROID 14' : 'GIS TELEMETRY' }}</span>
    </div>
    <div class="pv-stage pv-mockup-stage">
      <!-- Mobile / Android Mockup for UNIlearn -->
      <div v-if="type === 'mobile'" class="mockup-content mobile-view">
        <div class="mobile-status-bar">
          <span class="time">09:41</span>
          <span class="status-chips">
            <span class="chip-fps">60 FPS</span>
            <span class="chip-wifi">● OFFLINE-READY</span>
          </span>
        </div>
        <div class="mobile-card-header">
          <div class="app-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>
          <div>
            <div class="app-name">UNIlearn Maharashtra</div>
            <div class="app-sub">Moodle REST 4.x Client · Expo 57 · React Native</div>
          </div>
        </div>
        <div class="mockup-metrics-grid">
          <div class="metric-pill">
            <span class="mp-label">TEST COVERAGE</span>
            <span class="mp-val text-green">60+ Passing</span>
          </div>
          <div class="metric-pill">
            <span class="mp-label">LOCAL CACHE</span>
            <span class="mp-val">Encrypted SQLite</span>
          </div>
          <div class="metric-pill">
            <span class="mp-label">API LATENCY</span>
            <span class="mp-val">14ms · 200 OK</span>
          </div>
        </div>
        <div class="mobile-course-item">
          <div class="mci-top">
            <span class="mci-title">CS304: Distributed Systems</span>
            <span class="mci-badge">SYNCED</span>
          </div>
          <div class="mci-bar">
            <div class="mci-progress" style="width: 88%"></div>
          </div>
        </div>
      </div>

      <!-- Radar / Heatmap Mockup for DIBS -->
      <div v-else class="mockup-content radar-view">
        <div class="radar-hud-header">
          <span class="hud-indicator"><span class="ping-dot"></span> GPS ROUTING ACTIVE</span>
          <span class="hud-coords">19.0760° N, 72.8777° E</span>
        </div>
        <div class="radar-visual">
          <div class="radar-grid">
            <div class="radar-circle c1"></div>
            <div class="radar-circle c2"></div>
            <div class="radar-circle c3"></div>
            <div class="radar-cross-h"></div>
            <div class="radar-cross-v"></div>
            <div class="radar-sweep"></div>
            <!-- Blips on radar -->
            <div class="blip b1"><i></i><span>Hub #1: 450kg</span></div>
            <div class="blip b2"><i></i><span>Pick-up (1.2km)</span></div>
            <div class="blip b3"><i></i><span>Collector #7</span></div>
          </div>
        </div>
        <div class="radar-metrics">
          <div class="rm-item">
            <span class="rm-label">CO2 DIVERTED</span>
            <span class="rm-val text-green">1,420 kg</span>
          </div>
          <div class="rm-item">
            <span class="rm-label">SWIPE ROUTING</span>
            <span class="rm-val">DIBS / Pass / Scrap</span>
          </div>
          <div class="rm-item">
            <span class="rm-label">COVERAGE</span>
            <span class="rm-val">14 Pincodes</span>
          </div>
        </div>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'ProjectMockup',
  props: {
    id: { type: String, required: true },
    type: { type: String, default: 'mobile' }, // 'mobile' | 'radar'
    url: { type: String, required: true }
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
.pv-tag{font-family:var(--font-mono);font-size:.58rem;letter-spacing:.1em;color:var(--green);padding:.18rem .5rem;border-radius:4px;background:rgba(52,255,110,.1);border:1px solid rgba(52,255,110,.3)}
.pv-stage{position:relative;aspect-ratio:16/10;background:radial-gradient(ellipse at 50% 30%, rgba(52,255,110,.06) 0%, #030805 70%);display:flex;flex-direction:column;justify-content:center;overflow:hidden}

.mockup-content{width:100%;height:100%;padding:1rem 1.25rem;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box}

/* Mobile View Styles */
.mobile-status-bar{display:flex;justify-content:space-between;align-items:center;font-family:var(--font-mono);font-size:.65rem;color:var(--faint);padding-bottom:.4rem;border-bottom:1px solid rgba(255,255,255,.05)}
.status-chips{display:flex;gap:.5rem}
.chip-fps{color:var(--green);font-weight:700}
.chip-wifi{color:#a2dfba}

.mobile-card-header{display:flex;align-items:center;gap:.75rem;margin:.5rem 0}
.app-icon{width:34px;height:34px;border-radius:8px;background:linear-gradient(135deg, rgba(52,255,110,.25), rgba(23,201,79,.1));border:1px solid rgba(52,255,110,.4);display:grid;place-items:center;color:var(--green)}
.app-name{font-size:.95rem;font-weight:600;color:#eafff1;line-height:1.2}
.app-sub{font-family:var(--font-mono);font-size:.64rem;color:var(--muted);letter-spacing:.04em}

.mockup-metrics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;margin:.4rem 0}
.metric-pill{padding:.4rem .5rem;border-radius:6px;background:rgba(0,0,0,.45);border:1px solid rgba(52,255,110,.15);display:flex;flex-direction:column;gap:.15rem}
.mp-label{font-family:var(--font-mono);font-size:.55rem;letter-spacing:.1em;color:var(--faint)}
.mp-val{font-size:.75rem;font-weight:600;color:#d5f5e2}
.text-green{color:var(--green)}

.mobile-course-item{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);padding:.55rem .75rem;border-radius:8px}
.mci-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:.35rem}
.mci-title{font-size:.78rem;color:#e4fff0;font-weight:500}
.mci-badge{font-family:var(--font-mono);font-size:.56rem;letter-spacing:.1em;color:var(--green);background:rgba(52,255,110,.12);padding:.1rem .4rem;border-radius:4px}
.mci-bar{height:5px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden}
.mci-progress{height:100%;border-radius:99px;background:linear-gradient(90deg, #17c94f, #34ff6e);box-shadow:0 0 10px rgba(52,255,110,.5)}

/* Radar / DIBS View Styles */
.radar-hud-header{display:flex;justify-content:space-between;align-items:center;font-family:var(--font-mono);font-size:.65rem;color:var(--muted);padding-bottom:.3rem;border-bottom:1px solid rgba(52,255,110,.12)}
.hud-indicator{display:flex;align-items:center;gap:.4rem;color:var(--green);font-weight:700}
.ping-dot{width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green);animation:pulse-dot 1.8s infinite}
.hud-coords{font-size:.62rem;color:var(--faint)}

.radar-visual{position:relative;flex:1;display:flex;justify-content:center;align-items:center;margin:.3rem 0}
.radar-grid{position:relative;width:150px;height:150px;border-radius:50%;border:1px solid rgba(52,255,110,.25);background:radial-gradient(circle, rgba(52,255,110,.05) 0%, transparent 70%)}
.radar-circle{position:absolute;inset:0;border-radius:50%;border:1px dashed rgba(52,255,110,.2)}
.radar-circle.c1{inset:22px}
.radar-circle.c2{inset:45px}
.radar-circle.c3{inset:65px}
.radar-cross-h{position:absolute;top:50%;left:0;right:0;height:1px;background:rgba(52,255,110,.2)}
.radar-cross-v{position:absolute;left:50%;top:0;bottom:0;width:1px;background:rgba(52,255,110,.2)}
.radar-sweep{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg, rgba(52,255,110,.35) 0deg, rgba(52,255,110,.05) 45deg, transparent 60deg);animation:radar-spin 3.5s linear infinite;pointer-events:none}
@keyframes radar-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

.blip{position:absolute;display:flex;align-items:center;gap:.3rem;font-family:var(--font-mono);font-size:.55rem;color:#bbfbd2;white-space:nowrap}
.blip i{width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green);display:inline-block}
.blip.b1{top:28px;left:75px}
.blip.b2{bottom:35px;right:25px}
.blip.b3{top:85px;left:22px}

.radar-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:.45rem;padding-top:.3rem;border-top:1px solid rgba(255,255,255,.05)}
.rm-item{display:flex;flex-direction:column;gap:.1rem}
.rm-label{font-family:var(--font-mono);font-size:.54rem;letter-spacing:.08em;color:var(--faint)}
.rm-val{font-size:.76rem;font-weight:600;color:#dcfae7}

@media (max-width: 640px) {
  .mockup-metrics-grid,.radar-metrics{grid-template-columns:1fr;gap:.25rem}
  .radar-grid{width:110px;height:110px}
  .pv-stage{aspect-ratio:auto;min-height:220px}
}
</style>
