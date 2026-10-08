<template>
  <div id="app">
    <canvas id="matrix-canvas"></canvas>
    <div class="veil"></div>

    <nav>
      <div class="nav-inner">
        <div class="nav-logo">SH <span>// DEV</span></div>
        <div class="nav-links">
          <a href="#work">Work</a>
          <a href="#experience" class="hide-sm">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shashankh3@gmail.com" target="_blank" rel="noopener noreferrer" class="nav-resume">Hire Me</a>
        </div>
      </div>
    </nav>

    <div class="shell">
      <section class="hero">
        <div class="hero-label">System Online — Available for opportunities</div>
        <h1 class="hero-title">
          I build <span class="gt">&gt;</span><span id="typed-text"></span><span class="cursor-blink"></span>
        </h1>
        <p class="hero-sub">
          Full-Stack, GenAI &amp; Mobile Engineer specialising in <strong>hardware-accelerated AI pipelines, 3D digital twins, and offline-first mobile systems</strong>. Skilled in
          <strong>TypeScript · Python · React Native / Expo · Vue 3 · Three.js · Django · Fireworks AI · AMD ROCm / CUDA</strong>,
          shipping production platforms with Mixture-of-Agents AI, deterministic GPU AST auditing, and Moodle REST APIs.
        </p>
        <div class="hero-ctas">
          <a href="#work" class="btn btn-prime">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="5 12 19 12"/><polyline points="12 5 19 12 12 19"/></svg>
            View Projects
          </a>
          <a href="https://github.com/shashankh3" target="_blank" rel="noreferrer" class="btn btn-ghost">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.478-10-10-10z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shashankh3" target="_blank" rel="noreferrer" class="btn btn-ghost">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
        <div class="hero-meta">
          <div class="meta-item"><div class="label">Role</div><div class="val">Full-Stack · AI · Mobile Dev</div></div>
          <div class="meta-item"><div class="label">Focus</div><div class="val">GenAI + ROCm/CUDA + Mobile</div></div>
          <div class="meta-item"><div class="label">Location</div><div class="val">India</div></div>
        </div>
      </section>

      <section id="about">
        <div class="about-grid">
          <div class="glass about-card">
            <div class="section-tag">Profile</div>
            <h2 class="section-title">Engineering high-throughput systems across AI, cloud, and edge.</h2>
            <p>Full-Stack, AI &amp; Android Developer with hands-on expertise building production-grade platforms, hardware-accelerated DevSecOps pipelines, and offline-first mobile architectures. Proven record of engineering complex systems—from deterministic CUDA-to-HIP migration tooling for AMD MI300X enterprise hardware (RadeonShift AI) and FIFA 2026 3D Digital Twin command centers (OmniPitch 2026) to state-level native Android LMS platforms (UNIlearn Maharashtra) and full-stack AI learning platforms (LearnFlow LMS).</p>
            <p>Experienced in UN volunteering (UN India Technology Hub), large-scale AI model training and evaluation (Outlier.ai), and open-source tooling backed by high test coverage, clean AST manipulation, and resilient offline architectures.</p>
          </div>
          <div class="glass signal-card">
            <div class="section-tag">Signal</div>
            <ul>
              <li>Enterprise CUDA-to-HIP pipeline (RadeonShift AI) with MoA dual-agent audit &amp; live MI300X telemetry.</li>
              <li>GenAI 3D Digital Twin command center (OmniPitch 2026) with Three.js, Vue 3, and 96% logic coverage.</li>
              <li>High-performance offline-first mobile LMS (UNIlearn Maharashtra) with React Native 0.86, Expo 57 &amp; Moodle REST API.</li>
              <li>Full-stack AI LMS (LearnFlow) with Fireworks AI Gauntlet quiz engine, JWT auth, and certification workflows.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="work">
        <div class="section-tag">Selected Work</div>
        <h2 class="section-title">Projects that carry the portfolio.</h2>
        <p class="section-desc">Production-focused builds verified with live telemetry, real APIs, and comprehensive test suites.</p>
        <div class="project-grid">
          <div class="glass project-card span-2">
            <div class="proj-num">01 // AI + HARDWARE COMPUTE</div>
            <div class="proj-title">RadeonShift AI</div>
            <div class="proj-stack">TypeScript · Python · Fireworks AI · AMD ROCm · CUDA · MI300X Telemetry · Vercel</div>
            <p class="proj-desc">Enterprise DevSecOps pipeline automating NVIDIA CUDA to AMD MI300X migration using deterministic risk scanners and a semantic Mixture-of-Agents (MoA) dual-agent architecture to catch critical migration bugs that standard tools miss.</p>
            <ul class="proj-points">
              <li>Layer 1 Deterministic Audit: Scans wavefront-64, inline PTX assembly, and WMMA matrix portability risks before AI inference.</li>
              <li>Layer 2 Mixture-of-Agents AI: Dual-agent semantic code translation via Fireworks AI with architectural readiness scoring.</li>
              <li>Live MI300X telemetry verification, provenance tracking (live, cached, demo), and real-time AST analysis.</li>
              <li>Built for the AMD Developer Hackathon: ACT II — fully deployed and verified on Vercel.</li>
            </ul>
            <div class="proj-links">
              <a href="https://github.com/shashankh3/RadeonShift-AI" target="_blank" rel="noreferrer" class="proj-link">GitHub →</a>
              <a href="https://radeon-shift-ai.vercel.app/" target="_blank" rel="noreferrer" class="proj-link">Live Demo ↗</a>
            </div>
          </div>
          <div class="glass project-card">
            <div class="proj-num">02 // 3D GRAPHICS + GENAI</div>
            <div class="proj-title">OmniPitch 2026</div>
            <div class="proj-stack">Vue 3 · Three.js · TypeScript · Tailwind CSS · Fireworks AI · Supabase · Vite</div>
            <p class="proj-desc">GenAI-powered 3D Digital Twin and command center simulation for the FIFA World Cup 2026, delivering interactive stadium spatial rendering and AI incident management.</p>
            <ul class="proj-points">
              <li>Real-time 3D stadium digital twin rendering engineered with Three.js and Vue 3.</li>
              <li>GenAI command center simulation powered by Fireworks AI for real-time scenario and incident handling.</li>
              <li>High-reliability architecture: 281 passing tests with 96% line coverage on logic layers, 630KB bundle size.</li>
            </ul>
            <div class="proj-links">
              <a href="https://github.com/shashankh3/omnipitch-2026" target="_blank" rel="noreferrer" class="proj-link">GitHub →</a>
              <a href="https://omnipitch-2026.vercel.app/" target="_blank" rel="noreferrer" class="proj-link">Live Demo ↗</a>
            </div>
          </div>
          <div class="glass project-card">
            <div class="proj-num">03 // NATIVE MOBILE &amp; OFFLINE</div>
            <div class="proj-title">UNIlearn Maharashtra</div>
            <div class="proj-stack">React Native 0.86 · Expo SDK 57 · React 19 · Moodle REST API · Jest · Android</div>
            <p class="proj-desc">High-performance, offline-first native mobile LMS built for the Maharashtra State e-learning initiative, interfacing directly with Moodle Web Services REST API.</p>
            <ul class="proj-points">
              <li>Offline-first local caching engine with encrypted token storage and secure biometric/session auth.</li>
              <li>Seamless sync with Moodle REST API 4.x for real-time course enrollment, submissions, and gradebooks.</li>
              <li>Accessible, trilingual vernacular UI optimized for smooth 60fps performance on low-end Android hardware (60+ Jest tests).</li>
            </ul>
            <div class="proj-links">
              <a href="https://github.com/shashankh3/moodle-lms-android" target="_blank" rel="noreferrer" class="proj-link">GitHub →</a>
            </div>
          </div>
          <div class="glass project-card span-2">
            <div class="proj-num">04 // FULL-STACK AI PLATFORM</div>
            <div class="proj-title">LearnFlow LMS</div>
            <div class="proj-stack">Next.js · TypeScript · Django · Tailwind CSS · Fireworks AI &amp; Gemini · JWT</div>
            <p class="proj-desc">Full-stack learning management system bridging video education and active retention through a dual Instructor/Student portal and an interactive AI challenge engine.</p>
            <ul class="proj-points">
              <li>'Test Your Might' AI Gauntlet: generates on-demand interactive assessments from lesson content with human-in-the-loop review.</li>
              <li>Course Architect &amp; Live Analytics: instructors track student progress percentages and enrollments in real time.</li>
              <li>Automated high-fidelity, print-ready Certificate of Completion generation upon 100% course completion.</li>
              <li>Secure JWT authentication, role-based workflows, and internationalization (i18n) ready architecture.</li>
            </ul>
            <div class="proj-links">
              <a href="https://github.com/shashankh3/LearnFlow-LMS" target="_blank" rel="noreferrer" class="proj-link">GitHub →</a>
            </div>
          </div>
          <div class="glass project-card">
            <div class="proj-num">05 // SMART ECO-ASSISTANT</div>
            <div class="proj-title">DIBS (Do It Before Scrap)</div>
            <div class="proj-stack">JavaScript · Geolocation API · Heatmaps · Context-Aware Routing · UI/UX</div>
            <p class="proj-desc">Smart circular economy assistant that intelligently routes household items away from landfills using user location, item condition, and real-time scrap dealer heatmaps.</p>
            <ul class="proj-points">
              <li>Gamified Swipe Interface: dynamic card-swipe routing ('call DIBS', pass, or scrap) based on GPS coordinates.</li>
              <li>Scrap Route Heatmap: live visual map assisting local scrap collectors with real-time weight accumulation by pincode.</li>
              <li>CO2 Impact Tracker: calculates carbon emissions saved from diverted waste with interactive community metrics.</li>
            </ul>
            <div class="proj-links">
              <a href="https://github.com/shashankh3/dibs" target="_blank" rel="noreferrer" class="proj-link">GitHub →</a>
            </div>
          </div>
          <div class="glass project-card">
            <div class="proj-num">06 // BROWSER EXTENSION &amp; PROMPT AI</div>
            <div class="proj-title">TopicFeedPro</div>
            <div class="proj-stack">JavaScript · Chrome Extensions Manifest V3 · Prompt Engineering · YouTube API</div>
            <p class="proj-desc">AI-engineered browser extension that overrides YouTube's recommendation feed with intent-driven topic filtering, organizing content by views and relevance.</p>
            <ul class="proj-points">
              <li>Replaces algorithmic recommendations with purposeful, user-specified topic feeds.</li>
              <li>Zero-latency client-side caching, global deduplication, and optimized view-count sorting logic.</li>
            </ul>
            <div class="proj-links">
              <a href="https://github.com/shashankh3/TopicFeedGenerator" target="_blank" rel="noreferrer" class="proj-link">GitHub →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div class="section-tag">Experience</div>
        <h2 class="section-title">Where I've contributed.</h2>
        <p class="section-desc">From UN digital initiatives to AI model training at scale.</p>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-track"></div></div>
            <div class="glass tl-body">
              <div class="tl-meta">March 2026 — Present · Remote</div>
              <div class="tl-org">Freelance Android Developer — Safaikart</div>
              <div class="tl-role">End-to-end Android Application (Expo Go)</div>
              <p class="tl-desc">Developing Safaikart, an end-to-end Android application via Expo Go for a local business providing comprehensive laundry, delivery, and home sofa cleaning services. Accelerating the development lifecycle with AI-integrated workflows for rapid code generation, debugging, and scalable architecture design.</p>
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-track"></div></div>
            <div class="glass tl-body">
              <div class="tl-meta">March 2026 — Present · New Delhi (Remote)</div>
              <div class="tl-org">United Nations OICT — UN India Technology Hub</div>
              <div class="tl-role">Online Volunteer — Software Development Support</div>
              <p class="tl-desc">Contributing to software development support for the UN India Technology Hub under the Office of Information and Communications Technology (OICT). Assisting with technical documentation, development tasks, and deployment of digital solutions aligned with broader UN goals.</p>
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-track"></div></div>
            <div class="glass tl-body">
              <div class="tl-meta">October 2024 — December 2024 · Remote</div>
              <div class="tl-org">OUTLIER.AI</div>
              <div class="tl-role">Individual Contractor — Prompt Engineering</div>
              <p class="tl-desc">Optimized AI and LLM responses by designing prompts that intentionally generate errors to enhance model learning and improve accuracy. Trained AI models to refine their understanding and generate more accurate, context-aware responses by reviewing code and AI-generated outputs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="stack">
        <div class="skills-grid">
          <div class="glass skills-card">
            <div class="section-tag">Technical Stack</div>
            <div class="skill-group">
              <div class="skill-group-label">Languages</div>
              <div class="tag-wrap">
                <span class="tag">TypeScript</span><span class="tag">JavaScript</span>
                <span class="tag">Python</span><span class="tag">C</span>
                <span class="tag">C++</span><span class="tag">Java</span>
                <span class="tag">SQL</span><span class="tag">HTML/CSS</span>
              </div>
            </div>
            <div class="skill-group">
              <div class="skill-group-label">AI &amp; GPU Acceleration</div>
              <div class="tag-wrap">
                <span class="tag">Fireworks AI</span><span class="tag">Gemini API</span>
                <span class="tag">LLM Evaluation &amp; QA</span><span class="tag">Mixture-of-Agents (MoA)</span>
                <span class="tag">AMD ROCm</span><span class="tag">NVIDIA CUDA</span>
                <span class="tag">Prompt Engineering</span>
              </div>
            </div>
            <div class="skill-group">
              <div class="skill-group-label">Frontend &amp; 3D Graphics</div>
              <div class="tag-wrap">
                <span class="tag">React 19</span><span class="tag">Next.js</span>
                <span class="tag">Vue 3</span><span class="tag">Three.js (3D WebGL)</span>
                <span class="tag">Tailwind CSS</span><span class="tag">Vite</span>
              </div>
            </div>
            <div class="skill-group">
              <div class="skill-group-label">Mobile &amp; Offline Systems</div>
              <div class="tag-wrap">
                <span class="tag">React Native 0.86</span><span class="tag">Expo SDK 57</span>
                <span class="tag">Android Development</span><span class="tag">Offline-First Storage</span>
                <span class="tag">Moodle REST API</span>
              </div>
            </div>
            <div class="skill-group">
              <div class="skill-group-label">Backend &amp; Cloud</div>
              <div class="tag-wrap">
                <span class="tag">Django</span><span class="tag">Django REST Framework</span>
                <span class="tag">Node.js</span><span class="tag">Supabase</span>
                <span class="tag">PostgreSQL</span><span class="tag">SQLite</span>
                <span class="tag">JWT Auth</span>
              </div>
            </div>
            <div class="skill-group">
              <div class="skill-group-label">DevOps, Testing &amp; Tooling</div>
              <div class="tag-wrap">
                <span class="tag">Git</span><span class="tag">GitHub</span>
                <span class="tag">Vercel</span><span class="tag">Jest (Unit Testing)</span>
                <span class="tag">Postman</span><span class="tag">Swagger / OpenAPI</span>
                <span class="tag">VS Code</span>
              </div>
            </div>
          </div>
          <div class="glass edu-card">
            <div class="section-tag">Education</div>
            <div class="edu-block">
              <div class="edu-school">CSVTU, Bhilai</div>
              <div class="edu-deg">B.Tech — Computer Science &amp; Engineering</div>
              <div class="edu-meta">July 2017 – June 2021 · CPI 7.84</div>
            </div>
            <div class="edu-block">
              <div class="edu-school">Jawahar Navodaya Vidyalaya, Dongargarh</div>
              <div class="edu-deg">CBSE 12th</div>
              <div class="edu-meta">July 2015 – July 2016 · GPA 7.24</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="creds-grid">
          <div class="glass creds-card">
            <div class="section-tag">Certifications</div>
            <ul class="cert-list">
              <li>Microsoft AI Skills Fest (2026)</li>
              <li>Google AI Essentials</li>
              <li>Google Data Analytics Professional Certificate</li>
            </ul>
          </div>
          <div class="glass creds-card">
            <div class="section-tag">Achievements</div>
            <div class="score-block">
              <div class="score-title">TCS NQT 2022</div>
              <div class="score-id">ID: 22071272587</div>
              <div class="score-bars">
                <div class="score-row">
                  <div class="score-label"><span>Cognitive Total</span><span>78.25%</span></div>
                  <div class="score-track"><div class="score-fill" style="width:78.25%"></div></div>
                </div>
                <div class="score-row">
                  <div class="score-label"><span>Advanced Cognitive</span><span>69.91%</span></div>
                  <div class="score-track"><div class="score-fill" style="width:69.91%"></div></div>
                </div>
                <div class="score-row">
                  <div class="score-label"><span>Programming</span><span>71.35%</span></div>
                  <div class="score-track"><div class="score-fill" style="width:71.35%"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="glass contact-card">
          <div class="section-tag" style="justify-content:center">Contact</div>
          <h2 class="contact-headline">Let's build something sharp,<br>useful, and real.</h2>
          <p class="contact-sub">Open to full-time roles, contracts, and collaborations. I reply fast.</p>
          <div class="contact-links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shashankh3@gmail.com" target="_blank" rel="noopener noreferrer" class="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              shashankh3@gmail.com
            </a>
            <a href="https://github.com/shashankh3" target="_blank" rel="noreferrer" class="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.478-10-10-10z"/></svg>
              github.com/shashankh3
            </a>
            <a href="https://www.linkedin.com/in/shashankh3" target="_blank" rel="noreferrer" class="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              linkedin.com/in/shashankh3
            </a>
          </div>
        </div>
      </section>
    </div>

    <footer>
      <p>© 2026 <span>Shashank Hirwani</span> — All rights reserved.</p>
      <p>Built with ♥ in India</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.initMatrix();
    this.initTyping();
  },
  methods: {
    initMatrix() {
      const canvas = document.getElementById('matrix-canvas');
      const ctx = canvas.getContext('2d');
      const CHARS = 'アァイィウェオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]/*+-=|\\:;'.split('');
      const SIZE = 15;
      let drops = [], W = 0, H = 0;
      const resize = () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
        const cols = Math.floor(W / SIZE);
        drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -H / SIZE));
      };
      resize();
      window.addEventListener('resize', resize);
      const draw = () => {
        ctx.fillStyle = 'rgba(0,0,0,0.055)';
        ctx.fillRect(0, 0, W, H);
        ctx.font = SIZE + 'px monospace';
        for (let i = 0; i < drops.length; i++) {
          const y = drops[i] * SIZE;
          const r = Math.random();
          ctx.fillStyle = r > 0.98 ? '#ffffff' : r > 0.92 ? '#b2ffd6' : r > 0.7 ? '#34ff6e' : '#16a842';
          ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * SIZE, y);
          if (y > H && Math.random() > 0.977) drops[i] = 0;
          drops[i]++;
        }
      };
      setInterval(draw, 40);
    },
    initTyping() {
      const el = document.getElementById('typed-text');
      const phrases = ['_', ' AI platforms', ' 3D digital twins', ' GPU pipelines', ' mobile apps', ' production APIs'];
      let pi = 0, ci = 0, deleting = false, wait = 0;
      const tick = () => {
        const phrase = phrases[pi];
        if (deleting) {
          if (ci > 0) { ci--; el.textContent = phrase.slice(0, ci); wait = 55; }
          else { deleting = false; pi = (pi + 1) % phrases.length; wait = 400; }
        } else {
          if (ci < phrase.length) { ci++; el.textContent = phrase.slice(0, ci); wait = 120; }
          else { deleting = true; wait = pi === 0 ? 3200 : 1800; }
        }
        setTimeout(tick, wait);
      };
      setTimeout(tick, 1200);
    }
  }
}
</script>

<style>
:root {
  --bg: #000;
  --surface: rgba(6,18,10,0.72);
  --border: rgba(52,255,110,0.14);
  --border-hover: rgba(52,255,110,0.38);
  --text: #e6ffee;
  --muted: #7aad8e;
  --faint: #3b6347;
  --green: #34ff6e;
  --green-mid: #17c94f;
  --green-dim: rgba(52,255,110,0.08);
  --font-mono: 'Space Mono', 'SFMono-Regular', Consolas, monospace;
  --font-body: 'Inter', -apple-system, sans-serif;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --shadow: 0 8px 40px rgba(0,0,0,0.6), 0 1px 0 rgba(52,255,110,0.06);
  --shadow-hover: 0 16px 60px rgba(0,0,0,0.7), 0 1px 0 rgba(52,255,110,0.12);
  --s1:.25rem;--s2:.5rem;--s3:.75rem;--s4:1rem;--s5:1.25rem;
  --s6:1.5rem;--s8:2rem;--s10:2.5rem;--s12:3rem;--s16:4rem;
}
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Inter:wght@300..700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:var(--s16);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
body{min-height:100dvh;font-family:var(--font-body);font-size:1rem;color:var(--text);background:var(--bg);line-height:1.65;overflow-x:hidden}
img,svg{display:block;max-width:100%}
ul{list-style:none}
a{color:inherit;text-decoration:none}
button{cursor:pointer;background:none;border:none;font:inherit;color:inherit}
::selection{background:rgba(52,255,110,0.22);color:var(--text)}
:focus-visible{outline:2px solid var(--green);outline-offset:3px;border-radius:4px}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
#matrix-canvas{position:fixed;inset:0;z-index:0;width:100%;height:100%;background:#000;pointer-events:none;}
.veil{position:fixed;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,.3) 40%,rgba(0,0,0,.5) 100%),radial-gradient(ellipse 80% 60% at 50% 0%,rgba(52,255,110,.05),transparent 70%);}
.shell{position:relative;z-index:2;width:min(1200px,calc(100% - var(--s8)));margin-inline:auto}
nav{position:sticky;top:0;z-index:10;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);background:rgba(0,0,0,.38);border-bottom:1px solid rgba(52,255,110,.1);}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:var(--s4) var(--s6);max-width:1200px;margin-inline:auto;}
.nav-logo{font-family:var(--font-mono);font-size:.8rem;font-weight:700;letter-spacing:.2em;color:var(--green);text-transform:uppercase;}
.nav-logo span{color:var(--muted)}
.nav-links{display:flex;gap:var(--s6);align-items:center}
.nav-links a{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);transition:color .2s var(--ease-out);}
.nav-links a:hover{color:var(--green)}
.nav-resume{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.1em;padding:.45rem .9rem;border-radius:6px;border:1px solid var(--border-hover);color:var(--green);transition:background .2s var(--ease-out),box-shadow .2s var(--ease-out);}
.nav-resume:hover{background:var(--green-dim);box-shadow:0 0 18px rgba(52,255,110,.15)}
.hero{min-height:calc(100dvh - 64px);display:flex;flex-direction:column;justify-content:center;padding:clamp(var(--s12),8vw,var(--s16)) 0;}
.hero-label{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--green);display:inline-flex;align-items:center;gap:.5rem;margin-bottom:var(--s6);}
.hero-label::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green);animation:pulse-dot 2s ease-in-out infinite;}
@keyframes pulse-dot{0%,100%{box-shadow:0 0 6px var(--green)}50%{box-shadow:0 0 20px var(--green),0 0 40px rgba(52,255,110,.4)}}
.hero-title{font-family:var(--font-mono);font-size:clamp(2.6rem,7vw,6rem);line-height:1.05;letter-spacing:-.02em;color:#f0fff4;margin-bottom:var(--s3);}
.hero-title .gt{color:var(--green)}
.cursor-blink{display:inline-block;width:.55em;height:.9em;background:var(--green);margin-left:.08em;vertical-align:-.05em;border-radius:2px;animation:cursor-pulse 1s step-end infinite;}
@keyframes cursor-pulse{0%,49%{opacity:1}50%,100%{opacity:0}}
.hero-sub{font-size:clamp(.95rem,1.6vw,1.15rem);color:var(--muted);line-height:1.75;max-width:68ch;margin-bottom:var(--s8);}
.hero-sub strong{color:#c8ffda;font-weight:500}
.hero-ctas{display:flex;flex-wrap:wrap;gap:var(--s3);margin-bottom:var(--s10);align-items:center}
.btn{display:inline-flex;align-items:center;gap:.6rem;font-family:var(--font-mono);font-size:.78rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;text-decoration:none!important;padding:.75rem 1.45rem;border-radius:8px;cursor:pointer;transition:all .22s var(--ease-out);}
.btn svg{display:inline-block;flex-shrink:0;vertical-align:middle;transition:transform .2s var(--ease-out)}
.btn:hover{transform:translateY(-2px)}
.btn-prime{background:linear-gradient(135deg,#34ff6e 0%,#15cf4e 100%);border:1px solid #57ff8a;color:#031c0a!important;box-shadow:0 0 24px rgba(52,255,110,.45),0 4px 14px rgba(0,0,0,.5);}
.btn-prime:hover{background:linear-gradient(135deg,#54ff87 0%,#24df61 100%);box-shadow:0 0 35px rgba(52,255,110,.75),0 6px 22px rgba(0,0,0,.6);color:#021407!important;}
.btn-prime:hover svg{transform:translateX(3px)}
.btn-ghost{background:rgba(52,255,110,.08);border:1px solid rgba(52,255,110,.42);color:#eafff0!important;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 4px 16px rgba(0,0,0,.4),inset 0 0 12px rgba(52,255,110,.06);}
.btn-ghost:hover{background:rgba(52,255,110,.2);border-color:#34ff6e;color:#34ff6e!important;box-shadow:0 0 24px rgba(52,255,110,.4),0 6px 20px rgba(0,0,0,.6);}
.btn-ghost:hover svg{transform:scale(1.15)}
.hero-meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s3);max-width:560px;}
.meta-item{padding:var(--s4);border-radius:10px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07);}
.meta-item .label{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin-bottom:.25rem;}
.meta-item .val{font-size:.9rem;color:#d8ffdf;font-weight:500}
section{padding:clamp(var(--s12),6vw,var(--s16)) 0}
.section-tag{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--green);margin-bottom:var(--s4);display:flex;align-items:center;gap:.6rem;}
.section-tag::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--border),transparent)}
h2.section-title{font-size:clamp(1.7rem,3vw,2.5rem);letter-spacing:-.03em;color:#edfff2;margin-bottom:var(--s2);line-height:1.15;}
.section-desc{color:var(--muted);max-width:64ch;margin-bottom:var(--s10);line-height:1.75}
.glass{position:relative;background:var(--surface);border:1px solid var(--border);border-radius:20px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:var(--shadow);overflow:hidden;transition:border-color .25s var(--ease-out),box-shadow .25s var(--ease-out),transform .25s var(--ease-out);}
.glass::before{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:linear-gradient(135deg,rgba(52,255,110,.07) 0%,transparent 50%);}
.glass:hover{border-color:var(--border-hover);box-shadow:var(--shadow-hover);transform:translateY(-3px)}
.about-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:var(--s5);align-items:start}
.about-card,.signal-card{padding:var(--s8)}
.about-card p{color:var(--muted);line-height:1.8;margin-top:var(--s4)}
.signal-card ul{display:grid;gap:var(--s4);margin-top:var(--s6)}
.signal-card li{display:grid;grid-template-columns:auto 1fr;gap:.75rem;color:var(--muted);line-height:1.7;align-items:baseline}
.signal-card li::before{content:'//';font-family:var(--font-mono);font-size:.7rem;color:var(--green);font-weight:700;white-space:nowrap}
.project-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--s5)}
.project-card{padding:var(--s8)}
.project-card.span-2{grid-column:1/-1}
.proj-num{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.2em;color:var(--faint);margin-bottom:var(--s4)}
.proj-title{font-size:1.4rem;font-weight:600;letter-spacing:-.02em;color:#e8fff2;margin-bottom:var(--s2)}
.proj-stack{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.08em;color:var(--green);margin-bottom:var(--s5)}
.proj-desc{color:var(--muted);line-height:1.75;margin-bottom:var(--s5)}
.proj-points{display:grid;gap:var(--s2)}
.proj-points li{display:grid;grid-template-columns:auto 1fr;gap:.6rem;font-size:.9rem;color:var(--muted);line-height:1.6}
.proj-points li::before{content:'›';color:var(--green);font-size:1rem;font-weight:700}
.proj-links{display:flex;gap:var(--s3);margin-top:var(--s6)}
.proj-link{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;padding:.38rem .8rem;border-radius:6px;border:1px solid rgba(52,255,110,.35);background:rgba(52,255,110,.05);color:#d4ffdf;transition:border-color .2s,color .2s,background .2s,box-shadow .2s;}
.proj-link:hover{border-color:var(--green);color:var(--green);background:rgba(52,255,110,.16);box-shadow:0 0 14px rgba(52,255,110,.25)}
.timeline{display:grid;gap:var(--s5)}
.tl-item{display:grid;grid-template-columns:3px 1fr;gap:var(--s6)}
.tl-line{position:relative;display:flex;flex-direction:column;align-items:center}
.tl-dot{width:12px;height:12px;border-radius:50%;background:var(--green);box-shadow:0 0 16px rgba(52,255,110,.6);flex-shrink:0;margin-left:-4.5px}
.tl-track{flex:1;width:1px;background:linear-gradient(var(--border),transparent);margin-top:var(--s2)}
.tl-body{padding:var(--s6) var(--s8)}
.tl-meta{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;color:var(--green);margin-bottom:var(--s3)}
.tl-org{font-size:1.25rem;font-weight:600;color:#e4fff0;margin-bottom:.25rem}
.tl-role{color:#9ecdb0;font-size:.95rem;margin-bottom:var(--s4)}
.tl-desc{color:var(--muted);line-height:1.8}
.skills-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:var(--s5);align-items:start}
.skills-card,.edu-card{padding:var(--s8)}
.skill-group{margin-bottom:var(--s6)}
.skill-group:last-child{margin-bottom:0}
.skill-group-label{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--faint);margin-bottom:var(--s3)}
.tag-wrap{display:flex;flex-wrap:wrap;gap:var(--s2)}
.tag{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.06em;padding:.35rem .75rem;border-radius:6px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);color:#cce0d5;transition:border-color .18s,color .18s,background .18s;}
.tag:hover{border-color:rgba(52,255,110,.3);color:var(--green);background:var(--green-dim)}
.edu-block{padding:var(--s5);border-radius:12px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07)}
.edu-block+.edu-block{margin-top:var(--s4)}
.edu-school{font-size:1rem;font-weight:600;color:#dcfff0;margin-bottom:.25rem}
.edu-deg{font-size:.9rem;color:var(--muted)}
.edu-meta{font-family:var(--font-mono);font-size:.67rem;letter-spacing:.08em;color:var(--faint);margin-top:.4rem}
.creds-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--s5)}
.creds-card{padding:var(--s8)}
.cert-list{display:grid;gap:var(--s3);margin-top:var(--s5)}
.cert-list li{display:grid;grid-template-columns:auto 1fr;gap:.65rem;font-size:.92rem;color:var(--muted);align-items:baseline}
.cert-list li::before{content:'✦';color:var(--green);font-size:.7rem}
.score-block{margin-top:var(--s5)}
.score-title{font-size:1.1rem;font-weight:600;color:#dafff2;margin-bottom:.2rem}
.score-id{font-family:var(--font-mono);font-size:.67rem;color:var(--faint);margin-bottom:var(--s4)}
.score-bars{display:grid;gap:var(--s3)}
.score-row{display:grid;gap:.5rem}
.score-label{font-size:.82rem;color:var(--muted);display:flex;justify-content:space-between}
.score-track{height:4px;border-radius:99px;background:rgba(255,255,255,.06);overflow:hidden}
.score-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,var(--green-mid),var(--green));animation:fill-bar 1.2s var(--ease-out) both}
@keyframes fill-bar{from{width:0}to{}}
.contact-card{padding:clamp(var(--s8),5vw,var(--s12));text-align:center}
.contact-headline{font-size:clamp(1.5rem,3.5vw,2.8rem);letter-spacing:-.03em;color:#e8fff3;margin-bottom:var(--s4);line-height:1.15}
.contact-sub{color:var(--muted);margin-bottom:var(--s8);max-width:48ch;margin-inline:auto;line-height:1.75}
.contact-links{display:flex;flex-wrap:wrap;gap:var(--s4);justify-content:center}
.contact-link{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;padding:.65rem 1.3rem;border-radius:8px;border:1px solid rgba(52,255,110,.35);background:rgba(52,255,110,.06);color:#e6ffee!important;backdrop-filter:blur(10px);box-shadow:0 4px 16px rgba(0,0,0,.3);transition:all .22s var(--ease-out);}
.contact-link:hover{border-color:var(--green);color:var(--green)!important;background:rgba(52,255,110,.16);box-shadow:0 0 20px rgba(52,255,110,.35);transform:translateY(-2px)}
footer{padding:var(--s8) var(--s6);border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--s4);max-width:1200px;margin-inline:auto;}
footer p{font-family:var(--font-mono);font-size:.67rem;letter-spacing:.1em;color:var(--faint)}
footer p span{color:var(--green)}
@media(max-width:960px){
  .about-grid,.skills-grid{grid-template-columns:1fr}
  .project-grid,.creds-grid{grid-template-columns:1fr}
  .project-card.span-2{grid-column:1}
  .hero-meta{grid-template-columns:1fr 1fr}
}
@media(max-width:640px){
  .nav-links .hide-sm{display:none}
  .hero-meta{grid-template-columns:1fr}
  .tl-item{gap:var(--s4)}
  .tl-body,.project-card,.about-card,.signal-card,.skills-card,.edu-card,.creds-card{padding:var(--s6)}
}
</style>
