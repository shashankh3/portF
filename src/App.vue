<template>
  <div class="app-shell">
    <canvas ref="matrixCanvas" class="matrix-canvas"></canvas>
    <div class="matrix-glow"></div>

    <header class="topbar">
      <div class="brand">SHASHANK // PORTFOLIO</div>
      <nav class="nav-links">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main class="content-wrap">
      <section class="hero panel hero-panel">
        <div class="status-line">
          <span class="dot"></span>
          <span>system online</span>
        </div>
        <p class="eyebrow">FULL-STACK DEVELOPER // AI-INTEGRATED PRODUCTS // REST APIS</p>
        <h1 class="hero-title">
          <span>{{ typedText }}</span><span class="cursor">_</span>
        </h1>
        <p class="hero-copy">
          I design and ship production-grade web experiences with Django, React, Next.js, Vue, TypeScript,
          secure APIs, and AI-powered workflows.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#work">View Projects</a>
          <a class="btn btn-secondary" href="https://github.com/shashankh3" target="_blank" rel="noreferrer">GitHub</a>
          <a class="btn btn-secondary" href="https://www.linkedin.com/in/shashankh3" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div class="hero-meta">
          <div class="meta-card">
            <span class="meta-label">Focus</span>
            <strong>AI-integrated web applications</strong>
          </div>
          <div class="meta-card">
            <span class="meta-label">Specialty</span>
            <strong>Backend systems + product UX</strong>
          </div>
          <div class="meta-card">
            <span class="meta-label">Location</span>
            <strong>India</strong>
          </div>
        </div>
      </section>

      <section class="grid two-col">
        <article class="panel about-panel">
          <p class="section-kicker">PROFILE</p>
          <h2>Building useful systems, not just flashy screens.</h2>
          <p>
            Full-stack developer with hands-on experience in AI-integrated web applications, REST API
            development, prompt engineering, JWT authentication, and cloud deployment.
          </p>
          <p>
            I like building products that feel clean on the surface and solid underneath: reliable APIs,
            thoughtful data flow, fast interfaces, and features that solve real user problems.
          </p>
        </article>

        <article class="panel signal-panel">
          <p class="section-kicker">SIGNAL</p>
          <ul class="signal-list">
            <li>Production-grade LMS architecture with role-based workflows and AI quiz generation.</li>
            <li>Prompt-driven systems work, including model evaluation and response-quality improvement.</li>
            <li>Frontend capability across React, Next.js, and Vue with performance-minded UI design.</li>
            <li>Backend strength in Django, REST APIs, auth, deployment, and structured application logic.</li>
          </ul>
        </article>
      </section>

      <section id="work" class="panel section-panel">
        <div class="section-head">
          <p class="section-kicker">SELECTED WORK</p>
          <h2>Projects that carry the portfolio.</h2>
        </div>
        <div class="project-grid">
          <article class="project-card featured">
            <div class="project-topline">01 // FLAGSHIP BUILD</div>
            <h3>LearnFlow LMS</h3>
            <p class="stack">Django · Next.js · TypeScript · Tailwind · Gemini API</p>
            <p>
              Production-grade learning platform with distinct instructor and student roles, enrollment
              tracking, secure JWT authentication, and full-stack deployment.
            </p>
            <ul>
              <li>AI-powered quiz generation from YouTube lesson transcripts using Gemini.</li>
              <li>Documented REST API with secure auth and deployment across Vercel and PythonAnywhere.</li>
              <li>Built for real workflows instead of a static showcase demo.</li>
            </ul>
          </article>

          <article class="project-card">
            <div class="project-topline">02 // SMART EXTENSION</div>
            <h3>TopicFeedPro</h3>
            <p class="stack">JavaScript · Python · HTML · CSS</p>
            <p>
              AI-engineered Chrome extension that reshapes YouTube feed discovery through prompt-driven
              logic and custom filtering.
            </p>
            <ul>
              <li>Replaced standard recommendations with a more focused content-sorting workflow.</li>
              <li>Reached fast load times with caching, deduplication, and dual-filter logic.</li>
            </ul>
          </article>

          <article class="project-card">
            <div class="project-topline">03 // FRONTEND SYSTEM</div>
            <h3>Spotify Web Player Clone</h3>
            <p class="stack">Vue.js · JavaScript · HTML · JSON Server</p>
            <p>
              Dynamic Vue-based player clone with CRUD support for song data and a polished music-app style
              interface.
            </p>
            <ul>
              <li>Structured component-driven UI in Vue.</li>
              <li>Demonstrated practical frontend state handling with content management flows.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="experience" class="panel section-panel">
        <div class="section-head">
          <p class="section-kicker">EXPERIENCE</p>
          <h2>Recent work and contribution history.</h2>
        </div>
        <div class="timeline">
          <article class="timeline-item">
            <div class="timeline-marker"></div>
            <div>
              <div class="timeline-meta">March 2026 - Present · Remote, New Delhi</div>
              <h3>United Nations Volunteers (UNV) - OICT</h3>
              <p class="timeline-role">Online Volunteer - Software Development Support</p>
              <p>
                Contributing to software development support for the UN India Technology Hub under the Office
                of Information and Communications Technology, including documentation, development tasks, and
                deployment support for technology-driven initiatives.
              </p>
            </div>
          </article>

          <article class="timeline-item">
            <div class="timeline-marker"></div>
            <div>
              <div class="timeline-meta">October 2024 - December 2024 · Remote</div>
              <h3>OUTLIER.AI</h3>
              <p class="timeline-role">Individual Contractor - Prompt Engineering</p>
              <p>
                Improved AI and LLM output quality by designing prompts for failure discovery, reviewing model
                responses, identifying deviations, and helping refine context-aware generation.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="stack" class="grid stack-grid">
        <article class="panel">
          <p class="section-kicker">STACK</p>
          <h2>Core technologies</h2>
          <div class="tag-wrap">
            <span class="tag">Python</span>
            <span class="tag">Django</span>
            <span class="tag">Django REST Framework</span>
            <span class="tag">JavaScript</span>
            <span class="tag">TypeScript</span>
            <span class="tag">React</span>
            <span class="tag">Next.js</span>
            <span class="tag">Vue.js</span>
            <span class="tag">Node.js</span>
            <span class="tag">PostgreSQL</span>
            <span class="tag">SQLite</span>
            <span class="tag">Tailwind CSS</span>
            <span class="tag">Git</span>
            <span class="tag">Postman</span>
            <span class="tag">Swagger</span>
            <span class="tag">Vercel</span>
            <span class="tag">PythonAnywhere</span>
            <span class="tag">Gemini API</span>
            <span class="tag">JWT</span>
          </div>
        </article>

        <article class="panel education-panel">
          <p class="section-kicker">EDUCATION</p>
          <div class="edu-block">
            <h3>Chhattisgarh Swami Vivekananda Technical University</h3>
            <p>Bachelor of Technology in Computer Science</p>
            <span>July 2017 - June 2021 · CPI 7.84</span>
          </div>
          <div class="edu-block">
            <h3>Jawahar Navodaya Vidyalaya, Dongargarh</h3>
            <p>CBSE 12th</p>
            <span>July 2015 - July 2016 · GPA 7.24</span>
          </div>
        </article>
      </section>

      <section class="grid two-col">
        <article class="panel">
          <p class="section-kicker">CERTIFICATIONS</p>
          <ul class="signal-list compact">
            <li>Google AI Essentials</li>
            <li>Google Data Analytics Professional Certificate</li>
          </ul>
        </article>

        <article class="panel">
          <p class="section-kicker">ACHIEVEMENT</p>
          <div class="score-card">
            <h3>TCS NQT 2022</h3>
            <p>ID 22071272587</p>
            <div class="score-grid">
              <span>Cognitive Total: 78.25%</span>
              <span>Advanced Cognitive: 69.91%</span>
              <span>Programming: 71.35%</span>
            </div>
          </div>
        </article>
      </section>

      <section id="contact" class="panel contact-panel">
        <p class="section-kicker">CONTACT</p>
        <h2>Let’s build something sharp, useful, and real.</h2>
        <div class="contact-grid">
          <a href="mailto:shashankh3@gmail.com">shashankh3@gmail.com</a>
          <a href="https://github.com/shashankh3" target="_blank" rel="noreferrer">github.com/shashankh3</a>
          <a href="https://www.linkedin.com/in/shashankh3" target="_blank" rel="noreferrer">linkedin.com/in/shashankh3</a>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      heroFullText: 'I build >',
      typedText: '',
      typingIndex: 0,
      typingTimer: null,
      matrixTimer: null,
      resizeHandler: null,
      animationStarted: false,
      drops: [],
      chars: 'アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/*+[]{}#$%&'.split(''),
      fontSize: 16,
      canvasCtx: null
    }
  },
  mounted() {
    this.startTyping();
    this.initMatrix();
  },
  beforeDestroy() {
    this.cleanup();
  },
  beforeUnmount() {
    this.cleanup();
  },
  methods: {
    cleanup() {
      if (this.typingTimer) clearInterval(this.typingTimer);
      if (this.matrixTimer) clearInterval(this.matrixTimer);
      if (this.resizeHandler) window.removeEventListener('resize', this.resizeHandler);
    },
    startTyping() {
      if (this.animationStarted) return;
      this.animationStarted = true;
      this.typingTimer = setInterval(() => {
        if (this.typingIndex < this.heroFullText.length) {
          this.typedText += this.heroFullText.charAt(this.typingIndex);
          this.typingIndex += 1;
        } else {
          clearInterval(this.typingTimer);
        }
      }, 140);
    },
    initMatrix() {
      const canvas = this.$refs.matrixCanvas;
      if (!canvas) return;
      this.canvasCtx = canvas.getContext('2d');

      const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const columns = Math.floor(canvas.width / this.fontSize);
        this.drops = Array(columns).fill(1);
      };

      this.resizeHandler = setCanvasSize;
      setCanvasSize();
      window.addEventListener('resize', this.resizeHandler);

      this.matrixTimer = setInterval(() => {
        if (!this.canvasCtx) return;
        this.canvasCtx.fillStyle = 'rgba(0, 0, 0, 0.075)';
        this.canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
        this.canvasCtx.font = this.fontSize + 'px monospace';

        for (let i = 0; i < this.drops.length; i += 1) {
          const char = this.chars[Math.floor(Math.random() * this.chars.length)];
          const x = i * this.fontSize;
          const y = this.drops[i] * this.fontSize;
          this.canvasCtx.fillStyle = Math.random() > 0.92 ? '#d7ffe1' : '#00ff66';
          this.canvasCtx.fillText(char, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            this.drops[i] = 0;
          }
          this.drops[i] += 1;
        }
      }, 36);
    }
  }
}
</script>

<style>
:root {
  --bg: #020503;
  --panel: rgba(4, 15, 8, 0.68);
  --panel-strong: rgba(3, 12, 6, 0.82);
  --border: rgba(69, 255, 132, 0.18);
  --border-strong: rgba(69, 255, 132, 0.42);
  --text: #e8fff1;
  --muted: #9fc7ac;
  --green: #34ff86;
  --green-2: #8cffb6;
  --shadow: 0 20px 80px rgba(0, 0, 0, 0.55);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #000;
  color: var(--text);
}

body::selection {
  background: rgba(52, 255, 134, 0.24);
}

#app {
  min-height: 100vh;
}

 a {
  color: inherit;
  text-decoration: none;
}

.app-shell {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(0, 255, 120, 0.08), transparent 28%),
    radial-gradient(circle at bottom right, rgba(0, 255, 120, 0.06), transparent 24%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.86));
}

.matrix-canvas,
.matrix-glow {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
}

.matrix-canvas {
  background: #000;
  z-index: 0;
}

.matrix-glow {
  z-index: 1;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.74)),
    radial-gradient(circle at 50% 15%, rgba(60, 255, 126, 0.08), transparent 32%);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 32px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: rgba(0, 0, 0, 0.36);
  border-bottom: 1px solid rgba(69, 255, 132, 0.12);
}

.brand {
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: var(--green-2);
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  color: var(--muted);
}

.nav-links a:hover,
.contact-grid a:hover {
  color: var(--green-2);
}

.content-wrap {
  position: relative;
  z-index: 2;
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 56px;
}

.panel {
  position: relative;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.panel::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(140, 255, 182, 0.22), rgba(52, 255, 134, 0.02));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.hero-panel {
  padding: 38px;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 28px;
}

.status-line,
.eyebrow,
.section-kicker,
.project-topline,
.timeline-meta,
.meta-label {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  letter-spacing: 0.08em;
}

.status-line {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 10px 14px;
  margin-bottom: 20px;
  border-radius: 999px;
  color: var(--green-2);
  background: rgba(52, 255, 134, 0.08);
  border: 1px solid rgba(69, 255, 132, 0.18);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--green);
  box-shadow: 0 0 16px rgba(52, 255, 134, 0.8);
}

.eyebrow,
.section-kicker,
.timeline-meta,
.project-topline,
.meta-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  color: var(--green-2);
}

.hero-title {
  margin: 0;
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: #f4fff8;
  text-shadow: 0 0 28px rgba(52, 255, 134, 0.12);
}

.cursor {
  display: inline-block;
  margin-left: 4px;
  color: var(--green);
  animation: blink 1s step-end infinite;
}

.hero-copy {
  max-width: 760px;
  margin: 22px 0 0;
  font-size: 1.12rem;
  line-height: 1.8;
  color: var(--muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 14px;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.btn:hover,
.project-card:hover,
.panel:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, rgba(52, 255, 134, 0.18), rgba(52, 255, 134, 0.08));
  border: 1px solid var(--border-strong);
  color: #f6fff9;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted);
}

.hero-meta,
.grid,
.project-grid,
.contact-grid,
.score-grid,
.tag-wrap {
  display: grid;
}

.hero-meta {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 34px;
}

.meta-card {
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.meta-card strong {
  display: block;
  margin-top: 8px;
  font-size: 1rem;
}

.two-col {
  grid-template-columns: 1.25fr 0.95fr;
  gap: 22px;
  margin-bottom: 22px;
}

.stack-grid {
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
  margin-bottom: 22px;
}

.about-panel,
.signal-panel,
.section-panel,
.education-panel,
.contact-panel,
.panel {
  padding: 30px;
}

.section-head {
  margin-bottom: 18px;
}

.section-head h2,
.about-panel h2,
.contact-panel h2,
.panel h2 {
  margin: 8px 0 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  letter-spacing: -0.03em;
}

.about-panel p,
.signal-list li,
.project-card p,
.project-card li,
.timeline-item p,
.edu-block p,
.edu-block span,
.score-card p,
.score-grid span,
.contact-grid a,
.panel p {
  color: var(--muted);
  line-height: 1.8;
}

.signal-list,
.project-card ul {
  margin: 18px 0 0;
  padding-left: 18px;
}

.signal-list.compact {
  margin-top: 10px;
}

.section-panel {
  margin-bottom: 22px;
}

.project-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.project-card {
  padding: 22px;
  border-radius: 22px;
  background: var(--panel-strong);
  border: 1px solid rgba(69, 255, 132, 0.14);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  border-color: rgba(69, 255, 132, 0.32);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.3);
}

.project-card h3,
.timeline-item h3,
.edu-block h3,
.score-card h3 {
  margin: 10px 0 8px;
  font-size: 1.35rem;
}

.stack {
  margin: 0 0 12px;
  color: var(--green-2);
  font-size: 0.95rem;
}

.featured {
  background:
    linear-gradient(180deg, rgba(8, 26, 13, 0.92), rgba(5, 15, 8, 0.92)),
    radial-gradient(circle at top right, rgba(52, 255, 134, 0.1), transparent 34%);
}

.timeline {
  position: relative;
  display: grid;
  gap: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 4px;
  bottom: 4px;
  width: 1px;
  background: linear-gradient(rgba(69, 255, 132, 0.5), rgba(69, 255, 132, 0.08));
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 18px;
}

.timeline-marker {
  width: 20px;
  height: 20px;
  margin-top: 3px;
  border-radius: 999px;
  background: radial-gradient(circle, #b5ffd1 0%, #34ff86 38%, rgba(52, 255, 134, 0.18) 72%);
  box-shadow: 0 0 24px rgba(52, 255, 134, 0.45);
}

.timeline-role {
  margin-top: 0;
  color: #d6ffe4 !important;
}

.tag-wrap {
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  margin-top: 18px;
}

.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 12px;
  border-radius: 14px;
  text-align: center;
  color: #eafff2;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.edu-block + .edu-block {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.score-card {
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.score-grid {
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 16px;
}

.contact-panel {
  margin-bottom: 12px;
}

.contact-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.contact-grid a {
  display: block;
  padding: 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  word-break: break-word;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@media (max-width: 1080px) {
  .project-grid,
  .two-col,
  .stack-grid,
  .contact-grid,
  .hero-meta {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    min-height: auto;
  }
}

@media (max-width: 720px) {
  .topbar {
    padding: 16px 18px;
    align-items: flex-start;
    flex-direction: column;
  }

  .content-wrap {
    width: min(100% - 20px, 1180px);
    padding-top: 14px;
  }

  .hero-panel,
  .about-panel,
  .signal-panel,
  .section-panel,
  .education-panel,
  .contact-panel,
  .panel {
    padding: 22px;
  }

  .hero-copy {
    font-size: 1rem;
  }

  .nav-links {
    gap: 14px;
    font-size: 0.95rem;
  }
}
</style>
