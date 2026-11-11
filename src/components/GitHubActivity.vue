<template>
  <div class="glass github-activity-card">
    <div class="github-header">
      <div class="github-title-group">
        <div class="section-tag" style="margin-bottom: var(--s2)">Live Signal // Open Source</div>
        <h3 class="github-headline">Engineering Activity &amp; Commit Velocity</h3>
        <p class="github-sub">Live telemetry synchronized with GitHub — tracking contributions across GenAI pipelines, 3D simulations, and mobile engineering.</p>
      </div>
      <a href="https://github.com/shashankh3" target="_blank" rel="noreferrer" class="github-cta-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.478-10-10-10z"/>
        </svg>
        <span>@shashankh3 on GitHub ↗</span>
      </a>
    </div>

    <!-- Live GitHub Heatmap Chart -->
    <div class="chart-wrapper">
      <div class="chart-scroll">
        <img
          src="https://ghchart.rshah.org/34ff6e/shashankh3"
          alt="Shashank Hirwani's GitHub Contribution Graph"
          class="gh-chart-img"
          loading="lazy"
        />
      </div>
      <div class="chart-legend">
        <span class="legend-text">Less</span>
        <span class="sq s0"></span>
        <span class="sq s1"></span>
        <span class="sq s2"></span>
        <span class="sq s3"></span>
        <span class="sq s4"></span>
        <span class="legend-text">More Activity</span>
      </div>
    </div>

    <!-- Quick Telemetry Stats Bar -->
    <div class="github-metrics-row">
      <div class="gm-item">
        <div class="gm-label">PRIMARY ECOSYSTEM</div>
        <div class="gm-val">TypeScript · Python · ROCm/CUDA</div>
      </div>
      <div class="gm-item">
        <div class="gm-label">ENGINEERING PROFILE</div>
        <div class="gm-val">Full-Stack, GenAI &amp; Mobile</div>
      </div>
      <div class="gm-item">
        <div class="gm-label">DEPLOYMENT TARGETS</div>
        <div class="gm-val">Vercel · Netlify · Expo / Android</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitHubActivity'
};
</script>

<style scoped>
.github-activity-card {
  padding: var(--s8);
  margin-top: var(--s10);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow);
}
.github-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--s5);
  flex-wrap: wrap;
  margin-bottom: var(--s6);
}
.github-headline {
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #e8fff2;
  margin-bottom: var(--s2);
}
.github-sub {
  font-size: 0.92rem;
  color: var(--muted);
  max-width: 60ch;
  line-height: 1.6;
}
.github-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(52, 255, 110, 0.08);
  border: 1px solid rgba(52, 255, 110, 0.35);
  color: var(--green);
  transition: all 0.2s var(--ease-out);
  white-space: nowrap;
}
.github-cta-btn:hover {
  background: rgba(52, 255, 110, 0.18);
  border-color: var(--green);
  box-shadow: 0 0 16px rgba(52, 255, 110, 0.25);
  transform: translateY(-2px);
}

.chart-wrapper {
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(52, 255, 110, 0.12);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: var(--s6);
  position: relative;
}
.chart-scroll {
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(52, 255, 110, 0.3) rgba(0, 0, 0, 0.3);
}
.chart-scroll::-webkit-scrollbar {
  height: 6px;
}
.chart-scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
.chart-scroll::-webkit-scrollbar-thumb {
  background: rgba(52, 255, 110, 0.3);
  border-radius: 4px;
}
.gh-chart-img {
  display: block;
  min-width: 720px;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 8px rgba(52, 255, 110, 0.12));
}

.chart-legend {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.35rem;
  margin-top: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--faint);
}
.sq {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
}
.sq.s0 { background: #161b22; }
.sq.s1 { background: #0e4429; }
.sq.s2 { background: #006d32; }
.sq.s3 { background: #26a641; }
.sq.s4 { background: #34ff6e; box-shadow: 0 0 6px rgba(52, 255, 110, 0.6); }

.github-metrics-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--s4);
}
.gm-item {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.gm-label {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  color: var(--faint);
  margin-bottom: 0.25rem;
}
.gm-val {
  font-size: 0.85rem;
  font-weight: 500;
  color: #dcfae7;
}

@media (max-width: 800px) {
  .github-metrics-row {
    grid-template-columns: 1fr;
  }
}
</style>
