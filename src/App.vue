<template>
  <div id="app">
    <canvas id="matrix-canvas"></canvas>
    <div class="veil"></div>
    <div class="spotlight" ref="spotlight" aria-hidden="true"></div>
    <div class="scanlines" aria-hidden="true"></div>

    <div class="nav-overlay" :class="{ 'is-open': menuOpen }" aria-hidden="true" @click="closeMenu"></div>
    <nav>
      <div class="scroll-progress" ref="scrollProgressBar" aria-hidden="true"></div>
      <div class="nav-inner">
        <div class="nav-logo">
          <img src="/favicon.svg" alt="Tara Yantra" class="nav-yantra-icon" />
          <span>SH // DEV</span>
        </div>
        <button
          class="nav-toggle"
          :class="{ 'is-open': menuOpen }"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="nav-menu"
          :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="toggleMenu"
        >
          <span></span><span></span><span></span>
        </button>
        <div id="nav-menu" class="nav-links" :class="{ 'is-open': menuOpen }">
          <a href="#work" :class="{ 'is-active': activeSection === 'work' }" @click="closeMenu">Work</a>
          <a href="#experience" :class="{ 'is-active': activeSection === 'experience' }" @click="closeMenu">Experience</a>
          <a href="#stack" :class="{ 'is-active': activeSection === 'stack' }" @click="closeMenu">Stack</a>
          <a href="#contact" :class="{ 'is-active': activeSection === 'contact' }" @click="closeMenu">Contact</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shashankh3@gmail.com" target="_blank" rel="noopener noreferrer" class="nav-resume" @click="closeMenu">Hire Me</a>
        </div>
      </div>
    </nav>

    <div class="shell">
      <section class="hero">
        <div class="hero-inner">
        <div class="hero-copy">
        <div class="hero-label">System Online — Available for opportunities</div>
        <h1 class="hero-title">
          <span class="hero-title-prefix">I build <span class="gt">&gt;</span><span class="prompt-bar" aria-hidden="true">_</span></span><span id="typed-text"></span><span class="cursor-blink"></span>
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
          <a href="/shashank_resume.pdf" download class="btn btn-ghost">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Resume
          </a>
        </div>
        <div class="hero-meta">
          <div class="meta-item"><div class="label">Role</div><div class="val">Full-Stack · AI · Mobile Dev</div></div>
          <div class="meta-item"><div class="label">Focus</div><div class="val">GenAI + ROCm/CUDA + Mobile</div></div>
          <div class="meta-item"><div class="label">Location</div><div class="val">India</div></div>
        </div>
        </div>

        <aside class="hero-console" data-reveal style="--reveal-delay:140ms" aria-label="Terminal summary of experience">
          <div class="hc-bar">
            <span class="hc-dots"><i></i><i></i><i></i></span>
            <span class="hc-title">shashank@dev — ~/portfolio</span>
            <span class="hc-live"><i></i>live</span>
          </div>
          <div class="hc-body">
            <div class="hc-row"><span class="hc-prompt">❯</span><span class="hc-cmd">whoami</span></div>
            <div class="hc-out">Shashank Hirwani</div>
            <div class="hc-out hc-dim">Full-Stack · GenAI · Mobile Engineer</div>

            <div class="hc-row"><span class="hc-prompt">❯</span><span class="hc-cmd">cat focus.txt</span></div>
            <div class="hc-out">AI pipelines · 3D digital twins</div>
            <div class="hc-out">offline-first mobile systems</div>

            <div class="hc-row"><span class="hc-prompt">❯</span><span class="hc-cmd">ship --production</span></div>
            <div class="hc-out hc-ok">✓ 6 projects · 0 vulnerabilities</div>

            <div class="hc-row"><span class="hc-prompt">❯</span><span class="hc-cmd">status</span><span class="hc-caret"></span></div>
          </div>
          <div class="hc-foot">
            <span class="hc-dot"></span>
            <span>Available for opportunities</span>
            <span class="hc-foot-right">IN · UTC+5:30</span>
          </div>
        </aside>
        </div>
      </section>

      <section id="about" data-reveal>
        <div class="about-grid">
          <div class="glass about-card" data-reveal>
            <div class="section-tag"><span class="sec-idx">01</span>Profile</div>
            <h2 class="section-title">Engineering high-throughput systems across AI, cloud, and edge.</h2>
            <p>Full-Stack, AI &amp; Android Developer with hands-on expertise building production-grade platforms, hardware-accelerated DevSecOps pipelines, and offline-first mobile architectures. Proven record of engineering complex systems—from deterministic CUDA-to-HIP migration tooling for AMD MI300X enterprise hardware (RadeonShift AI) and FIFA 2026 3D Digital Twin command centers (OmniPitch 2026) to state-level native Android LMS platforms (UNIlearn Maharashtra) and full-stack AI learning platforms (LearnFlow LMS).</p>
            <p>Experienced in UN volunteering (UN India Technology Hub), large-scale AI model training and evaluation (Outlier.ai), and open-source tooling backed by high test coverage, clean AST manipulation, and resilient offline architectures.</p>
          </div>
          <div class="glass signal-card" data-reveal>
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

      <section id="work" data-reveal>
        <div class="section-tag"><span class="sec-idx">02</span>Selected Work</div>
        <h2 class="section-title">Projects that carry the portfolio.</h2>
        <p class="section-desc">Production-focused builds verified with live telemetry, real APIs, and comprehensive test suites.</p>
        <div class="project-grid">
          <div class="glass project-card has-video span-2" data-reveal>
            <div class="proj-body">
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
            <ProjectVideo id="radeon" src="/videos/radeon.mp4" poster="/videos/radeon-poster.jpg" url="radeon-shift-ai.vercel.app" />
          </div>
          <div class="glass project-card has-video" data-reveal>
            <div class="proj-body">
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
            <ProjectVideo id="omnipitch" src="/videos/omnipitch.mp4" poster="/videos/omnipitch-poster.jpg" url="omnipitch-2026.vercel.app/fan" />
          </div>
          <div class="glass project-card has-video" data-reveal>
            <div class="proj-body">
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
            <ProjectVideo id="unilearn" src="/videos/unilearn.mp4" poster="/videos/unilearn-poster.jpg" url="UNIlearn Maharashtra — Android app" />
          </div>
          <div class="glass project-card has-video span-2" data-reveal>
            <div class="proj-body">
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
                <a href="https://frontend-phi-black-88.vercel.app/" target="_blank" rel="noreferrer" class="proj-link">Live Demo ↗</a>
              </div>
            </div>
            <ProjectVideo id="lms" src="/videos/lms.mp4" poster="/videos/lms-poster.jpg" url="frontend-phi-black-88.vercel.app" />
          </div>
          <div class="glass project-card has-video" data-reveal>
            <div class="proj-body">
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
            <ProjectVideo id="dibs" src="/videos/dibs.mp4" poster="/videos/dibs-poster.jpg" url="DIBS — mobile app" />
          </div>
          <div class="glass project-card has-video" data-reveal>
            <div class="proj-body">
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
            <ProjectVideo id="topicfeed" src="/videos/topicfeed.mp4" poster="/videos/topicfeed-poster.jpg" url="youtube.com — Topic Feed Pro extension" />
          </div>
        </div>

        <div ref="ghSentinel" class="gh-sentinel" aria-hidden="true"></div>
        <GitHubActivity v-if="ghReady" />
      </section>

      <section id="experience" data-reveal>
        <div class="section-tag"><span class="sec-idx">03</span>Experience</div>
        <h2 class="section-title">Where I've contributed.</h2>
        <p class="section-desc">From UN digital initiatives to AI model training at scale.</p>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-track"></div></div>
            <div class="glass tl-body" data-reveal>
              <div class="tl-meta">March 2026 — Present · Remote</div>
              <div class="tl-org">Freelance Android Developer — Safaikart</div>
              <div class="tl-role">End-to-end Android Application (Expo Go)</div>
              <p class="tl-desc">Developing Safaikart, an end-to-end Android application via Expo Go for a local business providing comprehensive laundry, delivery, and home sofa cleaning services. Accelerating the development lifecycle with AI-integrated workflows for rapid code generation, debugging, and scalable architecture design.</p>
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-track"></div></div>
            <div class="glass tl-body" data-reveal>
              <div class="tl-meta">March 2026 — Present · New Delhi (Remote)</div>
              <div class="tl-org">United Nations OICT — UN India Technology Hub</div>
              <div class="tl-role">Online Volunteer — Software Development Support</div>
              <p class="tl-desc">Contributing to software development support for the UN India Technology Hub under the Office of Information and Communications Technology (OICT). Assisting with technical documentation, development tasks, and deployment of digital solutions aligned with broader UN goals.</p>
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-track"></div></div>
            <div class="glass tl-body" data-reveal>
              <div class="tl-meta">October 2024 — December 2024 · Remote</div>
              <div class="tl-org">OUTLIER.AI</div>
              <div class="tl-role">Individual Contractor — Prompt Engineering</div>
              <p class="tl-desc">Optimized AI and LLM responses by designing prompts that intentionally generate errors to enhance model learning and improve accuracy. Trained AI models to refine their understanding and generate more accurate, context-aware responses by reviewing code and AI-generated outputs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" data-reveal>
        <div class="skills-grid">
          <div class="glass skills-card" data-reveal>
            <div class="section-tag"><span class="sec-idx">04</span>Technical Stack</div>
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
          <div class="glass edu-card" data-reveal>
            <div class="section-tag"><span class="sec-idx">05</span>Education</div>
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

      <section data-reveal>
        <div class="creds-grid">
          <div class="glass creds-card" data-reveal>
            <div class="section-tag"><span class="sec-idx">06</span>Certifications</div>
            <ul class="cert-list">
              <li>Microsoft AI Skills Fest (2026)</li>
              <li>Google AI Essentials</li>
              <li>Google Data Analytics Professional Certificate</li>
            </ul>
          </div>
          <div class="glass creds-card" data-reveal>
            <div class="section-tag"><span class="sec-idx">07</span>Achievements</div>
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

      <section id="contact" data-reveal>
        <div class="glass contact-card" data-reveal>
          <div class="section-tag" style="justify-content:center"><span class="sec-idx">08</span>Contact</div>
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

    <!-- Floating Back-to-Top Button -->
    <button
      class="back-to-top"
      :class="{ 'is-visible': showBackToTop }"
      type="button"
      aria-label="Back to top"
      title="Back to top"
      @click="scrollToTop"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
      <span class="btt-text">TOP</span>
    </button>

    <footer>
      <p>© 2026 <span>Shashank Hirwani</span> — All rights reserved.</p>
      <p>Built with ♥ in India</p>
    </footer>
  </div>
</template>

<script>
import ProjectVideo from './components/ProjectVideo.vue';

export default {
  name: 'App',
  components: {
    ProjectVideo,
    // Loaded on demand: keeps the 77KB contribution dataset out of the
    // initial bundle so it cannot delay first paint.
    GitHubActivity: () => import('./components/GitHubActivity.vue')
  },
  data: () => ({
    showBackToTop: false,
    menuOpen: false,
    scrollHandler: null,
    resizeHandler: null,
    matrixInterval: null,
    keyHandler: null,
    menuResizeHandler: null,
    typingTimer: null,
    pointerHandler: null,
    revealObserver: null,
    rafId: null,
    scrollRaf: null,
    offsetRaf: null,
    resizeObserver: null,
    activeSection: '',
    ghReady: false,
    sectionIds: ['work', 'experience', 'stack', 'contact'],
    sectionOffsets: [],
    maxScroll: 1
  }),
  watch: {
    menuOpen(open) {
      document.body.classList.toggle('nav-open', open);
    }
  },
  mounted() {
    this.initMatrix();
    this.initTyping();
    this.initScrollListener();
    this.initReveal();
    this.initPointer();
    this.keyHandler = (e) => {
      if (e.key === 'Escape' && this.menuOpen) this.closeMenu();
    };
    this.menuResizeHandler = () => {
      if (this.menuOpen && window.innerWidth > 760) this.closeMenu();
      this.cacheSectionOffsets();
    };
    window.addEventListener('keydown', this.keyHandler);
    window.addEventListener('resize', this.menuResizeHandler);
    window.addEventListener('orientationchange', this.menuResizeHandler);

    // Section offsets shift as content reveals and videos load, so re-measure
    // whenever the page height changes.
    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => this.cacheSectionOffsets());
      this.resizeObserver.observe(document.body);
    }

    // The contribution widget ships a large dataset in its own chunk. Hold
    // that chunk back until the user scrolls near it.
    if (this.$refs.ghSentinel && 'IntersectionObserver' in window) {
      this.ghObserver = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          this.ghReady = true;
          this.ghObserver.disconnect();
        }
      }, { rootMargin: '900px 0px' });
      this.ghObserver.observe(this.$refs.ghSentinel);
    }
  },
  beforeUnmount() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
    if (this.matrixInterval) {
      clearInterval(this.matrixInterval);
    }
    if (this.rainVisibilityHandler) {
      document.removeEventListener('visibilitychange', this.rainVisibilityHandler);
    }
    if (this.keyHandler) {
      window.removeEventListener('keydown', this.keyHandler);
    }
    if (this.menuResizeHandler) {
      window.removeEventListener('resize', this.menuResizeHandler);
      window.removeEventListener('orientationchange', this.menuResizeHandler);
    }
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
    if (this.pointerHandler) {
      window.removeEventListener('pointermove', this.pointerHandler);
    }
    if (this.revealObserver) {
      this.revealObserver.disconnect();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.ghObserver) {
      this.ghObserver.disconnect();
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    if (this.scrollRaf) {
      cancelAnimationFrame(this.scrollRaf);
    }
    if (this.offsetRaf) {
      cancelAnimationFrame(this.offsetRaf);
    }
    document.documentElement.classList.remove('reveal-ready');
    document.body.classList.remove('nav-open');
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
      document.body.classList.remove('nav-open');
    },
    initScrollListener() {
      this.cacheSectionOffsets();
      this.scrollHandler = () => {
        // Scroll events fire far more often than the compositor paints.
        // Coalesce into a single rAF so we do at most one update per frame.
        if (this.scrollRaf) return;
        this.scrollRaf = requestAnimationFrame(() => {
          this.scrollRaf = null;
          this.updateScrollState();
        });
      };
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      this.updateScrollState();
    },
    cacheSectionOffsets() {
      // Debounced: measuring forces layout, so never do it more than once a frame.
      if (this.offsetRaf) return;
      this.offsetRaf = requestAnimationFrame(() => {
        this.offsetRaf = null;
        this.sectionOffsets = this.sectionIds.map((id) => {
          const el = document.getElementById(id);
          return el ? el.getBoundingClientRect().top + window.scrollY : Infinity;
        });
        this.maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        // Re-evaluate the scroll spy now that offsets are known.
        this.updateScrollState();
      });
    },
    updateScrollState() {
      const y = window.scrollY;
      this.showBackToTop = y > 400;

      // Write the progress bar transform straight to the DOM. Binding it to a
      // reactive property would re-render this whole component every frame.
      const bar = this.$refs.scrollProgressBar;
      if (bar) {
        const p = Math.min(1, Math.max(0, y / this.maxScroll));
        bar.style.transform = 'scaleX(' + p + ')';
      }

      // Scroll spy against cached offsets - no layout reads while scrolling.
      let current = '';
      for (let i = 0; i < this.sectionOffsets.length; i++) {
        if (y + 160 >= this.sectionOffsets[i]) current = this.sectionIds[i];
      }
      if (y >= this.maxScroll - 6 && this.sectionIds.length) {
        current = this.sectionIds[this.sectionIds.length - 1];
      }
      if (current !== this.activeSection) this.activeSection = current;
    },
    initReveal() {
      const items = Array.from(this.$el.querySelectorAll('[data-reveal]'));
      if (!items.length) return;

      if (!('IntersectionObserver' in window)) {
        items.forEach((el) => el.classList.add('is-visible'));
        return;
      }

      // Stagger siblings so grids cascade instead of popping in together.
      items.forEach((el) => {
        const parent = el.parentElement;
        if (!parent) return;
        const sibs = Array.from(parent.children).filter((c) => c.hasAttribute('data-reveal'));
        const idx = sibs.indexOf(el);
        if (idx > 0) el.style.setProperty('--reveal-delay', `${Math.min(idx, 6) * 80}ms`);
      });

      document.documentElement.classList.add('reveal-ready');

      this.revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              this.revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: '0px 0px -60px 0px' }
      );
      items.forEach((el) => this.revealObserver.observe(el));
    },
    initPointer() {
      this.pointerHandler = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        if (this.rafId) return;
        this.rafId = requestAnimationFrame(() => {
          this.rafId = null;
          const spot = this.$refs.spotlight;
          if (spot) {
            spot.style.setProperty('--mx', x + 'px');
            spot.style.setProperty('--my', y + 'px');
          }
          const card = e.target && e.target.closest ? e.target.closest('.glass') : null;
          if (card) {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--cx', x - rect.left + 'px');
            card.style.setProperty('--cy', y - rect.top + 'px');
          }
        });
      };
      window.addEventListener('pointermove', this.pointerHandler, { passive: true });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    initMatrix() {
      const canvas = document.getElementById('matrix-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const CHARS = 'アァイィウェオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]/*+-=|\\:;'.split('');
      const SIZE = 15;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let drops = [], W = 0, H = 0;
      let lastTick = performance.now();

      // Plain instance properties, NOT reactive: these update every frame and
      // must never trigger a component re-render.
      this.rainScale = 1;
      this.rainLag = 0;
      this.rainDowngraded = false;

      // The rain is a soft glow effect, so rendering past ~1.5x gains almost
      // nothing visually while quadrupling the per-frame fill cost of the
      // full-canvas fade. Cap it, and lower the cap further on phones.
      const idealScale = () => {
        const dpr = window.devicePixelRatio || 1;
        const cap = window.innerWidth < 768 ? 1.25 : 1.5;
        return Math.min(dpr, cap) * this.rainScale;
      };

      const resize = () => {
        const scale = idealScale();
        const w = window.innerWidth;
        const h = window.innerHeight;
        const cols = Math.floor(w / SIZE);
        // Only rebuild the columns when the grid actually changed, so a
        // quality downgrade does not make the rain visibly restart.
        if (w !== W || h !== H || drops.length !== cols) {
          drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -h / SIZE));
        }
        W = w;
        H = h;
        canvas.width = Math.floor(W * scale);
        canvas.height = Math.floor(H * scale);
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
      };
      resize();
      this.resizeHandler = resize;
      window.addEventListener('resize', resize);

      const draw = () => {
        const now = performance.now();
        // How far behind schedule are we? Sustained lag means the browser is
        // struggling, so drop the render scale once (one-way: no oscillation).
        this.rainLag = this.rainLag * 0.85 + Math.max(0, now - lastTick - 40) * 0.15;
        lastTick = now;
        if (!this.rainDowngraded && this.rainLag > 14) {
          this.rainDowngraded = true;
          this.rainScale = 0.7;
          resize();
        }

        ctx.fillStyle = 'rgba(0,0,0,0.055)';
        ctx.fillRect(0, 0, W, H);
        ctx.font = SIZE + 'px monospace';
        for (let i = 0; i < drops.length; i++) {
          const x = i * SIZE;
          const y = drops[i] * SIZE;
          const r = Math.random();
          const glyph = CHARS[Math.floor(Math.random() * CHARS.length)];

          if (r > 0.98) {
            // Bright head glyph with a faux-bloom for the phosphor glow.
            ctx.font = SIZE + 4 + 'px monospace';
            ctx.fillStyle = 'rgba(52,255,110,0.18)';
            ctx.fillText(glyph, x, y - 2);
            ctx.font = SIZE + 'px monospace';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(glyph, x, y);
          } else if (r > 0.92) {
            ctx.fillStyle = '#b2ffd6';
            ctx.fillText(glyph, x, y);
          } else if (r > 0.7) {
            ctx.fillStyle = '#34ff6e';
            ctx.fillText(glyph, x, y);
          } else {
            ctx.fillStyle = '#16a842';
            ctx.fillText(glyph, x, y);
          }

          if (y > H && Math.random() > 0.977) drops[i] = 0;
          drops[i]++;
        }
      };

      if (reduceMotion) {
        // Respect reduced-motion: paint one static frame and never animate.
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, W, H);
        ctx.font = SIZE + 'px monospace';
        for (let i = 0; i < drops.length; i++) {
          ctx.fillStyle = Math.random() > 0.75 ? '#34ff6e' : '#16a842';
          ctx.fillText(
            CHARS[Math.floor(Math.random() * CHARS.length)],
            i * SIZE,
            Math.random() * H
          );
        }
        return;
      }

      this.matrixInterval = setInterval(draw, 40);

      // Stop burning frames on a backgrounded tab.
      this.rainVisibilityHandler = () => {
        if (document.hidden) {
          clearInterval(this.matrixInterval);
          this.matrixInterval = null;
        } else if (!this.matrixInterval) {
          lastTick = performance.now();
          this.matrixInterval = setInterval(draw, 40);
        }
      };
      document.addEventListener('visibilitychange', this.rainVisibilityHandler);
    },
    initTyping() {
      const el = document.getElementById('typed-text');
      const phrases = ['_', ' AI platforms', ' 3D digital twins', ' GPU pipelines', ' mobile apps', ' production APIs'];
      let pi = 0, ci = 0, deleting = false, wait = 0;
      const tick = () => {
        // On narrow screens the prompt underscore lives next to the ">" (see .prompt-bar),
        // so the standalone "_" phase is skipped to avoid a duplicate underscore.
        const phrase = (pi === 0 && window.innerWidth <= 640) ? '' : phrases[pi];
        if (deleting) {
          if (ci > 0) { ci--; el.textContent = phrase.slice(0, ci); wait = 55; }
          else { deleting = false; pi = (pi + 1) % phrases.length; wait = 400; }
        } else {
          if (ci < phrase.length) { ci++; el.textContent = phrase.slice(0, ci); wait = 120; }
          else { deleting = true; wait = pi === 0 ? 3200 : 1800; }
        }
        this.typingTimer = setTimeout(tick, wait);
      };
      this.typingTimer = setTimeout(tick, 1200);
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
  --font-term: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace;
  --font-body: 'Inter', -apple-system, sans-serif;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --shadow: 0 8px 40px rgba(0,0,0,0.6), 0 1px 0 rgba(52,255,110,0.06);
  --shadow-hover: 0 16px 60px rgba(0,0,0,0.7), 0 1px 0 rgba(52,255,110,0.12);
  --s1:.25rem;--s2:.5rem;--s3:.75rem;--s4:1rem;--s5:1.25rem;
  --s6:1.5rem;--s8:2rem;--s10:2.5rem;--s12:3rem;--s16:4rem;
}
/* Fonts loaded via <link> in index.html for faster render */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:var(--s16);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;scrollbar-color:#12a03c #000;scrollbar-width:thin}
body{min-height:100dvh;font-family:var(--font-body);font-size:1rem;color:var(--text);background:var(--bg);line-height:1.65;overflow-x:hidden}
img,svg{display:block;max-width:100%}
ul{list-style:none}
a{color:inherit;text-decoration:none}
button{cursor:pointer;background:none;border:none;font:inherit;color:inherit}
::selection{background:rgba(52,255,110,0.22);color:var(--text)}
:focus-visible{outline:2px solid var(--green);outline-offset:3px;border-radius:4px}
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-track{background:rgba(0,0,0,.45)}
::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#1fb84f,#0d7a2e);border-radius:99px;border:2px solid #000}
::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,#4dff82,#12a03c)}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}.prompt-bar,.cursor-blink{animation:none!important;opacity:1!important}html.reveal-ready [data-reveal]{opacity:1!important;translate:none!important}}
#matrix-canvas{position:fixed;inset:0;z-index:0;width:100%;height:100%;background:#000;pointer-events:none;}
/* Layered backdrop: rain -> vignette + soft top/bottom falloff -> cursor spotlight -> CRT scanlines.
   Veil values are all <= the original .55/.3/.5 linear, so the rain reads
   brighter than before at every edge while the text band stays as readable
   as it was originally. */
.veil{position:fixed;inset:0;z-index:1;pointer-events:none;background:radial-gradient(ellipse 88% 70% at 50% 42%,rgba(0,0,0,.18) 0%,rgba(0,0,0,0) 72%,rgba(0,0,0,.3) 100%),linear-gradient(180deg,rgba(0,0,0,.36) 0%,rgba(0,0,0,.18) 40%,rgba(0,0,0,.3) 100%),radial-gradient(ellipse 80% 60% at 50% 0%,rgba(52,255,110,.05),transparent 70%);}
.spotlight{position:fixed;inset:0;z-index:2;pointer-events:none;background:radial-gradient(460px circle at var(--mx,50%) var(--my,30%),rgba(52,255,110,.075),rgba(52,255,110,.02) 45%,transparent 68%);}
.scanlines{position:fixed;inset:0;z-index:3;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(0,0,0,0) 0 3px,rgba(0,0,0,.13) 3px 4px);opacity:.55;}
.scanlines::after{content:'';position:absolute;left:0;right:0;height:200px;background:linear-gradient(to bottom,transparent,rgba(52,255,110,.035),transparent);animation:scan-sweep 11s linear infinite}
@keyframes scan-sweep{from{transform:translateY(-200px)}to{transform:translateY(100vh)}}
@media(prefers-reduced-motion:reduce){.scanlines::after{display:none}}
.shell{position:relative;z-index:4;width:min(1200px,calc(100% - var(--s8)));margin-inline:auto}
nav{position:sticky;top:0;z-index:10;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);background:rgba(0,0,0,.38);border-bottom:1px solid rgba(52,255,110,.1);}
body.nav-open{overflow:hidden}
.nav-overlay{position:fixed;inset:0;z-index:9;background:rgba(0,0,0,.62);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .25s var(--ease-out),visibility .25s;}
.nav-overlay.is-open{opacity:1;visibility:visible;pointer-events:auto}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:var(--s4) var(--s6);max-width:1200px;margin-inline:auto;}
.scroll-progress{position:absolute;left:0;right:0;bottom:-1px;height:2px;transform-origin:0 50%;transform:scaleX(0);background:linear-gradient(90deg,var(--green-mid),var(--green));box-shadow:0 0 12px rgba(52,255,110,.7);transition:transform .12s linear}
.nav-logo{display:flex;align-items:center;gap:.6rem;font-family:var(--font-mono);font-size:.8rem;font-weight:700;letter-spacing:.2em;color:var(--green);text-transform:uppercase;}
.nav-logo span{color:var(--muted)}
.nav-toggle{display:none;flex-direction:column;align-items:center;justify-content:center;gap:4px;width:44px;height:44px;flex-shrink:0;border-radius:10px;border:1px solid var(--border);background:rgba(52,255,110,.05);color:var(--green);transition:background .2s var(--ease-out),border-color .2s var(--ease-out);}
.nav-toggle:hover{background:rgba(52,255,110,.12);border-color:var(--border-hover)}
.nav-toggle span{display:block;width:18px;height:2px;border-radius:99px;background:currentColor;transition:transform .25s var(--ease-out),opacity .2s var(--ease-out);}
.nav-toggle.is-open span:nth-child(1){transform:translateY(6px) rotate(45deg)}
.nav-toggle.is-open span:nth-child(2){opacity:0}
.nav-toggle.is-open span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}
.nav-yantra-icon{width:22px;height:22px;border-radius:4px;filter:drop-shadow(0 0 6px rgba(255,215,0,.7));transition:transform .3s var(--ease-out),filter .3s;}
.nav-logo:hover .nav-yantra-icon{transform:rotate(45deg) scale(1.1);filter:drop-shadow(0 0 12px rgba(255,215,0,.95))}
.nav-links{display:flex;gap:var(--s6);align-items:center}
.nav-links a{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);transition:color .2s var(--ease-out);position:relative}
.nav-links a::after{content:'';position:absolute;left:0;right:0;bottom:-6px;height:1px;background:var(--green);transform:scaleX(0);transform-origin:0 50%;transition:transform .3s var(--ease-out)}
.nav-links a:hover{color:var(--green)}
.nav-links a.is-active{color:var(--green);text-shadow:0 0 14px rgba(52,255,110,.5)}
.nav-links a.is-active::after{transform:scaleX(1);box-shadow:0 0 10px rgba(52,255,110,.8)}
.nav-resume{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.1em;padding:.45rem .9rem;border-radius:6px;border:1px solid var(--border-hover);color:var(--green);transition:background .2s var(--ease-out),box-shadow .2s var(--ease-out);}
.nav-resume:hover{background:var(--green-dim);box-shadow:0 0 18px rgba(52,255,110,.15)}
.hero{min-height:calc(100dvh - 64px);display:flex;align-items:center;padding:clamp(var(--s12),8vw,var(--s16)) 0;}
.hero-inner{width:100%;display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);gap:clamp(var(--s6),4vw,var(--s10));align-items:center}
.hero-copy{min-width:0}
.hero-label{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--green);display:inline-flex;align-items:center;gap:.5rem;margin-bottom:var(--s6);}
.hero-label::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green);animation:pulse-dot 2s ease-in-out infinite;}
@keyframes pulse-dot{0%,100%{box-shadow:0 0 6px var(--green)}50%{box-shadow:0 0 20px var(--green),0 0 40px rgba(52,255,110,.4)}}
.hero-title{font-family:var(--font-mono);font-size:clamp(2.6rem,7vw,6rem);line-height:1.05;letter-spacing:-.02em;color:#f0fff4;margin-bottom:var(--s3);text-shadow:0 0 60px rgba(52,255,110,.16);}
.hero-title .gt{color:var(--green)}
.prompt-bar{display:none;animation:cursor-pulse 1s step-end infinite}
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
.btn-ghost{background:rgba(52,255,110,.11);border:1px solid rgba(52,255,110,.42);color:#eafff0!important;box-shadow:0 4px 16px rgba(0,0,0,.4),inset 0 0 12px rgba(52,255,110,.06);}
.btn-ghost:hover{background:rgba(52,255,110,.2);border-color:#34ff6e;color:#34ff6e!important;box-shadow:0 0 24px rgba(52,255,110,.4),0 6px 20px rgba(0,0,0,.6);}
.btn-ghost:hover svg{transform:scale(1.15)}
.hero-meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s3);max-width:560px;}
.meta-item{padding:var(--s4);border-radius:10px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07);}
.meta-item .label{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin-bottom:.25rem;}
.meta-item .val{font-size:.9rem;color:#d8ffdf;font-weight:500}
/* Terminal console panel */
.hero-console{border-radius:16px;overflow:hidden;border:1px solid rgba(52,255,110,.26);background:rgba(2,10,5,.72);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 24px 70px rgba(0,0,0,.6),0 0 44px rgba(52,255,110,.07),inset 0 1px 0 rgba(52,255,110,.12);transition:border-color .3s var(--ease-out),box-shadow .3s var(--ease-out),transform .3s var(--ease-out)}
.hero-console:hover{border-color:rgba(52,255,110,.5);box-shadow:0 28px 80px rgba(0,0,0,.7),0 0 56px rgba(52,255,110,.13),inset 0 1px 0 rgba(52,255,110,.16);transform:translateY(-3px)}
.hc-bar{display:flex;align-items:center;gap:.6rem;padding:.55rem .8rem;background:rgba(255,255,255,.035);border-bottom:1px solid rgba(52,255,110,.14)}
.hc-dots{display:flex;gap:.32rem}
.hc-dots i{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.14)}
.hc-dots i:first-child{background:rgba(52,255,110,.6);box-shadow:0 0 8px rgba(52,255,110,.6)}
.hc-title{flex:1;min-width:0;font-family:var(--font-term);font-size:.64rem;letter-spacing:.04em;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.hc-live{display:inline-flex;align-items:center;gap:.35rem;font-family:var(--font-term);font-size:.56rem;letter-spacing:.16em;text-transform:uppercase;color:var(--green)}
.hc-live i{width:5px;height:5px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green);animation:pulse-dot 2s ease-in-out infinite}
.hc-body{padding:var(--s5) var(--s5) var(--s4);font-family:var(--font-term);font-size:.78rem;line-height:1.7}
.hc-row{display:flex;align-items:baseline;gap:.5rem;margin-top:var(--s5)}
.hc-row:first-child{margin-top:0}
.hc-prompt{color:var(--green);font-weight:700}
.hc-cmd{color:#dcffe6}
.hc-out{padding-left:1.05rem;color:var(--muted);word-break:break-word}
.hc-out.hc-dim{color:var(--faint)}
.hc-out.hc-ok{color:#9dffbd}
.hc-caret{display:inline-block;width:.5em;height:1em;background:var(--green);vertical-align:-.15em;animation:cursor-pulse 1s step-end infinite}
.hc-foot{display:flex;align-items:center;gap:.5rem;padding:.6rem .8rem;border-top:1px solid rgba(52,255,110,.12);background:rgba(0,0,0,.35);font-family:var(--font-term);font-size:.6rem;letter-spacing:.06em;color:var(--muted)}
.hc-dot{width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 10px var(--green);animation:pulse-dot 2s ease-in-out infinite;flex-shrink:0}
.hc-foot-right{margin-left:auto;color:var(--faint);white-space:nowrap}
section{padding:clamp(var(--s12),6vw,var(--s16)) 0}
.section-tag{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--green);margin-bottom:var(--s4);display:flex;align-items:center;gap:.6rem;}
.sec-idx{display:inline-flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;letter-spacing:.06em;color:var(--green);padding:.12rem .42rem;border-radius:4px;border:1px solid rgba(52,255,110,.3);background:rgba(52,255,110,.08);line-height:1.5;box-shadow:0 0 14px rgba(52,255,110,.12)}
.section-tag::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--border),transparent)}
h2.section-title{font-size:clamp(1.7rem,3vw,2.5rem);letter-spacing:-.03em;color:#edfff2;margin-bottom:var(--s2);line-height:1.15;}
.section-desc{color:var(--muted);max-width:64ch;margin-bottom:var(--s10);line-height:1.75}
.gh-sentinel{height:1px;width:100%}
.glass{position:relative;isolation:isolate;background:var(--surface);border:1px solid var(--border);border-radius:20px;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:var(--shadow);overflow:hidden;transition:border-color .25s var(--ease-out),box-shadow .25s var(--ease-out),transform .25s var(--ease-out);}
/* Cursor-tracking sheen (sits behind the card content) */
.glass::before{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:-1;background:radial-gradient(340px circle at var(--cx,50%) var(--cy,-10%),rgba(52,255,110,.14),transparent 62%),linear-gradient(135deg,rgba(52,255,110,.06) 0%,transparent 50%);}
/* HUD corner brackets */
.glass::after{content:'';position:absolute;inset:7px;border-radius:inherit;pointer-events:none;z-index:2;opacity:.3;transition:opacity .3s var(--ease-out);background:linear-gradient(90deg,var(--green),var(--green)) left top/13px 1px no-repeat,linear-gradient(90deg,var(--green),var(--green)) left top/1px 13px no-repeat,linear-gradient(90deg,var(--green),var(--green)) right top/13px 1px no-repeat,linear-gradient(90deg,var(--green),var(--green)) right top/1px 13px no-repeat,linear-gradient(90deg,var(--green),var(--green)) left bottom/13px 1px no-repeat,linear-gradient(90deg,var(--green),var(--green)) left bottom/1px 13px no-repeat,linear-gradient(90deg,var(--green),var(--green)) right bottom/13px 1px no-repeat,linear-gradient(90deg,var(--green),var(--green)) right bottom/1px 13px no-repeat;}
.glass:hover{border-color:var(--border-hover);box-shadow:var(--shadow-hover);transform:translateY(-3px)}
.glass:hover::after{opacity:1}
/* Scroll reveal */
html.reveal-ready [data-reveal]{opacity:0;translate:0 26px;transition:opacity .7s var(--ease-out) var(--reveal-delay,0ms),translate .7s var(--ease-out) var(--reveal-delay,0ms),border-color .25s var(--ease-out),box-shadow .25s var(--ease-out),transform .25s var(--ease-out);}
html.reveal-ready [data-reveal].is-visible{opacity:1;translate:0 0}
.about-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:var(--s5);align-items:start}
.about-card,.signal-card{padding:var(--s8)}
.about-card p{color:var(--muted);line-height:1.8;margin-top:var(--s4)}
.signal-card ul{display:grid;gap:var(--s4);margin-top:var(--s6)}
.signal-card li{display:grid;grid-template-columns:auto 1fr;gap:.75rem;color:var(--muted);line-height:1.7;align-items:baseline}
.signal-card li::before{content:'//';font-family:var(--font-mono);font-size:.7rem;color:var(--green);font-weight:700;white-space:nowrap}
.project-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--s5)}
.project-card{padding:var(--s8)}
.project-card.span-2,.project-card.has-video{grid-column:1/-1}
.project-card.has-video{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:var(--s8);align-items:center}
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
.contact-link{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;padding:.65rem 1.3rem;border-radius:8px;border:1px solid rgba(52,255,110,.35);background:rgba(52,255,110,.09);color:#e6ffee!important;box-shadow:0 4px 16px rgba(0,0,0,.3);transition:all .22s var(--ease-out);}
.contact-link:hover{border-color:var(--green);color:var(--green)!important;background:rgba(52,255,110,.16);box-shadow:0 0 20px rgba(52,255,110,.35);transform:translateY(-2px)}
footer{position:relative;z-index:4;padding:var(--s8) var(--s6);border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--s4);max-width:1200px;margin-inline:auto;}
footer p{font-family:var(--font-mono);font-size:.67rem;letter-spacing:.1em;color:var(--faint)}
footer p span{color:var(--green)}
.back-to-top{position:fixed;bottom:2rem;right:2rem;z-index:99;display:inline-flex;align-items:center;gap:.35rem;font-family:var(--font-mono);font-size:.7rem;font-weight:700;letter-spacing:.1em;padding:.65rem .95rem;border-radius:99px;background:rgba(3,15,7,.92);border:1px solid rgba(52,255,110,.45);color:var(--green);box-shadow:0 8px 32px rgba(0,0,0,.7),0 0 20px rgba(52,255,110,.2);cursor:pointer;opacity:0;visibility:hidden;transform:translateY(16px);transition:opacity .3s var(--ease-out),transform .3s var(--ease-out),visibility .3s,background .2s,box-shadow .2s;}
.back-to-top.is-visible{opacity:1;visibility:visible;transform:translateY(0);}
.back-to-top:hover{background:rgba(52,255,110,.2);border-color:var(--green);box-shadow:0 0 30px rgba(52,255,110,.45),0 8px 24px rgba(0,0,0,.8);transform:translateY(-3px);}
.back-to-top svg{transition:transform .2s var(--ease-out);}
.back-to-top:hover svg{transform:translateY(-2px);}
@media(max-width:1020px){
  .hero-inner{grid-template-columns:1fr;gap:var(--s8)}
  .hero-console{max-width:560px}
}
@media(max-width:960px){
  .about-grid,.skills-grid{grid-template-columns:1fr}
  .project-grid,.creds-grid{grid-template-columns:1fr}
  .project-card.span-2,.project-card.has-video{grid-column:1}
  .project-card.has-video{grid-template-columns:1fr;gap:var(--s6)}
  .hero-meta{grid-template-columns:1fr 1fr}
}
@media(max-width:760px){
  html{scroll-padding-top:5rem}
  .nav-inner{padding:calc(.65rem + env(safe-area-inset-top)) 1rem .65rem}
  .nav-logo{gap:.5rem;font-size:.7rem;letter-spacing:.14em}
  .nav-yantra-icon{width:20px;height:20px}
  .nav-toggle{display:flex}
  .nav-links{position:absolute;top:100%;left:0;right:0;display:flex;flex-direction:column;align-items:stretch;gap:0;padding:.5rem .75rem calc(.75rem + env(safe-area-inset-bottom));background:rgba(2,9,4,.97);border-bottom:1px solid var(--border);box-shadow:0 24px 48px rgba(0,0,0,.65);opacity:0;visibility:hidden;pointer-events:none;transform:translateY(-8px);transition:opacity .22s var(--ease-out),transform .22s var(--ease-out),visibility .22s;}
  .nav-links.is-open{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0)}
  .nav-links a{display:flex;align-items:center;min-height:46px;padding:.8rem .75rem;border-radius:8px;font-size:.78rem;letter-spacing:.14em;color:var(--text);}
  .nav-links a::after{display:none}
  .nav-links a.is-active{background:rgba(52,255,110,.09)}
  .nav-links a:hover,.nav-links a:focus-visible{color:var(--green);background:rgba(52,255,110,.07)}
  .nav-links .nav-resume{justify-content:center;margin-top:.4rem;padding:.85rem 1rem;font-size:.72rem;background:var(--green);border-color:var(--green);color:#031c0a;font-weight:700;box-shadow:0 8px 26px rgba(52,255,110,.18);}
  .nav-links .nav-resume:hover{background:#57ff8a;border-color:#57ff8a;color:#021407;box-shadow:0 10px 32px rgba(52,255,110,.3)}
}
@media(max-width:640px){
  .shell{width:calc(100% - 2rem)}
  .hero{min-height:auto;padding:var(--s10) 0 var(--s12)}
  .hero-label{font-size:.58rem;letter-spacing:.12em;line-height:1.5;align-items:flex-start;gap:.45rem}
  .hero-label::before{margin-top:.36rem;flex-shrink:0}
  .hero-title{font-size:clamp(2.35rem,11.8vw,3rem);line-height:1.1;min-height:3.3em;letter-spacing:-.04em;font-weight:700;margin-bottom:var(--s4)}
  .hero-title-prefix{display:block}
  .prompt-bar{display:inline}
  #typed-text:empty + .cursor-blink{display:none}
  .cursor-blink{width:.3em;margin-left:.04em}
  .hero-sub{font-size:.9rem;line-height:1.72;margin-bottom:var(--s6)}
  .hero-ctas{display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:var(--s6)}
  .hero-ctas .btn{width:100%;justify-content:center;gap:.45rem;padding:.8rem .6rem;font-size:.68rem;letter-spacing:.05em;border-radius:10px}
  .hero-ctas .btn-prime,.hero-ctas .btn-ghost:last-child{grid-column:1/-1}
  .hero-meta{gap:.5rem;max-width:none;margin-top:.25rem;grid-template-columns:1fr}
  .hero-console{border-radius:14px}
  .hc-body{font-size:.7rem;padding:var(--s4) var(--s4) var(--s3)}
  .hc-row{margin-top:var(--s4)}
  .hc-foot{font-size:.54rem;padding:.5rem .65rem;gap:.4rem}
  .hc-foot-right{display:none}
  .meta-item{display:flex;align-items:baseline;justify-content:space-between;gap:1rem;padding:.6rem .85rem;border-radius:10px}
  .meta-item .label{margin-bottom:0;font-size:.6rem;letter-spacing:.1em;white-space:nowrap}
  .meta-item .val{font-size:.82rem;text-align:right}
  section{padding:var(--s10) 0}
  .section-tag{font-size:.62rem;letter-spacing:.16em;margin-bottom:var(--s3)}
  h2.section-title{font-size:clamp(1.5rem,6.4vw,1.9rem);line-height:1.22}
  .section-desc{font-size:.9rem;line-height:1.7;margin-bottom:var(--s6)}
  .glass{border-radius:16px}
  .about-card,.signal-card,.skills-card,.edu-card,.creds-card,.project-card{padding:1.1rem}
  .about-card p{font-size:.9rem;line-height:1.72}
  .signal-card ul{gap:.9rem;margin-top:var(--s5)}
  .signal-card li{font-size:.9rem;line-height:1.6}
  .project-grid{gap:var(--s4)}
  .project-card.has-video{gap:var(--s5)}
  .proj-num{font-size:.58rem;letter-spacing:.14em;margin-bottom:var(--s3)}
  .proj-title{font-size:1.2rem}
  .proj-stack{font-size:.66rem;letter-spacing:.05em;line-height:1.65;margin-bottom:var(--s4)}
  .proj-desc{font-size:.9rem;line-height:1.7;margin-bottom:var(--s4)}
  .proj-points li{font-size:.85rem;line-height:1.55}
  .proj-links{flex-wrap:wrap;gap:.5rem;margin-top:var(--s5)}
  .proj-link{display:inline-flex;align-items:center;min-height:40px;font-size:.62rem;letter-spacing:.08em;padding:.42rem .7rem}
  .timeline{gap:var(--s4)}
  .tl-item{gap:var(--s4)}
  .tl-body{padding:1.1rem}
  .tl-meta{font-size:.6rem;letter-spacing:.08em;line-height:1.55;margin-bottom:var(--s2)}
  .tl-org{font-size:1.05rem;line-height:1.35}
  .tl-role{font-size:.85rem;margin-bottom:var(--s3)}
  .tl-desc{font-size:.9rem;line-height:1.7}
  .skills-grid{gap:var(--s4)}
  .skill-group{margin-bottom:var(--s5)}
  .skill-group-label{font-size:.6rem;letter-spacing:.12em}
  .tag{font-size:.64rem;padding:.32rem .6rem}
  .creds-grid{gap:var(--s4)}
  .cert-list li{font-size:.86rem}
  .contact-card{padding:1.5rem 1.1rem}
  .contact-headline{font-size:clamp(1.45rem,7vw,1.9rem);line-height:1.22}
  .contact-headline br{display:none}
  .contact-sub{font-size:.9rem;margin-bottom:var(--s6)}
  .contact-links{flex-direction:column;align-items:stretch;gap:.55rem}
  .contact-link{width:100%;justify-content:center;font-size:.66rem;letter-spacing:.06em;padding:.8rem .75rem}
  footer{flex-direction:column;align-items:center;text-align:center;gap:.35rem;padding:var(--s6) var(--s4) calc(4.75rem + env(safe-area-inset-bottom))}
  footer p{font-size:.66rem;letter-spacing:.06em;line-height:1.7;color:var(--muted)}
  .back-to-top{display:inline-flex;min-height:40px;bottom:calc(1rem + env(safe-area-inset-bottom));right:1rem;padding:.55rem .8rem;font-size:.6rem}
}
@media(hover:none){
  .glass:hover{transform:none}
  .btn:hover,.contact-link:hover{transform:none}
  .back-to-top:hover{transform:translateY(0)}
}
</style>
