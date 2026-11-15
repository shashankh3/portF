<template>
  <div>
    <canvas id="matrix-canvas" ref="matrixCanvas"></canvas>
    <div class="veil"></div>
    <div ref="spotlight" class="spotlight" aria-hidden="true"></div>
    <div class="scanlines" aria-hidden="true"></div>

    <div class="nav-overlay" :class="{ 'is-open': menuOpen }" aria-hidden="true" @click="closeMenu"></div>
    <nav aria-label="Primary">
      <div ref="scrollProgressBar" class="scroll-progress" aria-hidden="true"></div>
      <div class="nav-inner">
        <a href="#top" class="nav-logo" @click="closeMenu">
          <img :src="faviconUrl" alt="" class="nav-yantra-icon" width="22" height="22" />
          <span>SH // DEV</span>
        </a>
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
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            :class="{ 'is-active': link.section && activeSection === link.section, 'nav-resume': link.cta }"
            :target="link.external ? '_blank' : null"
            :rel="link.external ? 'noopener noreferrer' : null"
            :aria-current="link.section && activeSection === link.section ? 'true' : null"
            @click="closeMenu"
          >{{ link.label }}</a>
        </div>
      </div>
    </nav>

    <main ref="shell" class="shell">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-inner">
          <div class="hero-copy">
            <div class="hero-label">System Online — Available for opportunities</div>
            <h1 id="hero-title" class="hero-title">
              <span class="sr-only">I build AI platforms, 3D digital twins, GPU pipelines, mobile apps, and production APIs.</span>
              <span class="hero-title-prefix" aria-hidden="true">I build <span class="gt">&gt;</span><span class="prompt-bar">_</span></span><span id="typed-text" ref="typedText" aria-hidden="true"></span><span class="cursor-blink" aria-hidden="true"></span>
            </h1>
            <p class="hero-sub">
              Full-Stack, GenAI &amp; Mobile Engineer specialising in <strong>hardware-accelerated AI pipelines, 3D digital twins, and offline-first mobile systems</strong>. Skilled in
              <strong>TypeScript · Python · React Native / Expo · Vue 3 · Three.js · Django · Fireworks AI · AMD ROCm / CUDA</strong>,
              shipping production platforms with Mixture-of-Agents AI, deterministic GPU AST auditing, and Moodle REST APIs.
            </p>
            <div class="hero-ctas">
              <a href="#work" class="btn btn-prime">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><polyline points="5 12 19 12"/><polyline points="12 5 19 12 12 19"/></svg>
                View Projects
              </a>
              <a href="https://github.com/shashankh3" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.478-10-10-10z"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/shashankh3" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a :href="resumeUrl" download class="btn btn-ghost">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </a>
            </div>
            <div class="hero-meta">
              <div v-for="item in heroMeta" :key="item.label" class="meta-item">
                <div class="label">{{ item.label }}</div>
                <div class="val">{{ item.value }}</div>
              </div>
            </div>
          </div>

          <aside class="hero-console" data-reveal aria-label="Terminal summary of experience">
            <div class="hc-bar">
              <span class="hc-dots" aria-hidden="true"><i></i><i></i><i></i></span>
              <span class="hc-title">shashank@dev — ~/portfolio</span>
              <span class="hc-live"><i aria-hidden="true"></i>live</span>
            </div>
            <div class="hc-body">
              <div class="hc-row"><span class="hc-prompt" aria-hidden="true">❯</span><span class="hc-cmd">whoami</span></div>
              <div class="hc-out">Shashank Hirwani</div>
              <div class="hc-out hc-dim">Full-Stack · GenAI · Mobile Engineer</div>

              <div class="hc-row"><span class="hc-prompt" aria-hidden="true">❯</span><span class="hc-cmd">cat focus.txt</span></div>
              <div class="hc-out">AI pipelines · 3D digital twins</div>
              <div class="hc-out">offline-first mobile systems</div>

              <div class="hc-row"><span class="hc-prompt" aria-hidden="true">❯</span><span class="hc-cmd">ship --production</span></div>
              <div class="hc-out hc-ok">✓ 6 projects · 0 vulnerabilities</div>

              <div class="hc-row"><span class="hc-prompt" aria-hidden="true">❯</span><span class="hc-cmd">status</span><span class="hc-caret" aria-hidden="true"></span></div>
            </div>
            <div class="hc-foot">
              <span class="hc-dot" aria-hidden="true"></span>
              <span>Available for opportunities</span>
              <span class="hc-foot-right">IN · UTC+5:30</span>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" data-reveal aria-label="Profile">
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

      <section id="work" data-reveal aria-labelledby="work-title">
        <div class="section-tag"><span class="sec-idx">02</span>Selected Work</div>
        <h2 id="work-title" class="section-title">Projects that carry the portfolio.</h2>
        <p class="section-desc">Production-focused builds verified with live telemetry, real APIs, and comprehensive test suites.</p>
        <div class="project-grid">
          <article v-for="project in projects" :key="project.id" class="glass project-card has-video" data-reveal>
            <div class="proj-body">
              <div class="proj-num">{{ project.index }} // {{ project.kicker }}</div>
              <div class="proj-title">{{ project.title }}</div>
              <div class="proj-stack">{{ project.stack }}</div>
              <p class="proj-desc">{{ project.description }}</p>
              <ul class="proj-points">
                <li v-for="point in project.points" :key="point">{{ point }}</li>
              </ul>
              <div class="proj-links">
                <a
                  v-for="link in project.links"
                  :key="link.href"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="proj-link"
                >{{ link.label }}</a>
              </div>
            </div>
            <ProjectVideo
              :id="project.id"
              :label="project.title"
              :src="project.video.src"
              :poster="project.video.poster"
              :url="project.video.url"
            />
          </article>
        </div>

        <div ref="ghSentinel" class="gh-sentinel" aria-hidden="true"></div>
        <GitHubActivity v-if="ghReady" />
      </section>

      <section id="experience" data-reveal aria-labelledby="experience-title">
        <div class="section-tag"><span class="sec-idx">03</span>Experience</div>
        <h2 id="experience-title" class="section-title">Where I've contributed.</h2>
        <p class="section-desc">From UN digital initiatives to AI model training at scale.</p>
        <div class="timeline">
          <div v-for="job in experience" :key="job.org" class="tl-item">
            <div class="tl-line" aria-hidden="true"><div class="tl-dot"></div><div class="tl-track"></div></div>
            <div class="glass tl-body" data-reveal>
              <div class="tl-meta">{{ job.meta }}</div>
              <div class="tl-org">{{ job.org }}</div>
              <div class="tl-role">{{ job.role }}</div>
              <p class="tl-desc">{{ job.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" data-reveal aria-label="Technical stack and education">
        <div class="skills-grid">
          <div class="glass skills-card" data-reveal>
            <div class="section-tag"><span class="sec-idx">04</span>Technical Stack</div>
            <div v-for="group in skillGroups" :key="group.label" class="skill-group">
              <div class="skill-group-label">{{ group.label }}</div>
              <div class="tag-wrap">
                <span v-for="tag in group.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div class="glass edu-card" data-reveal>
            <div class="section-tag"><span class="sec-idx">05</span>Education</div>
            <div v-for="item in education" :key="item.school" class="edu-block">
              <div class="edu-school">{{ item.school }}</div>
              <div class="edu-deg">{{ item.degree }}</div>
              <div class="edu-meta">{{ item.meta }}</div>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal aria-label="Certifications and achievements">
        <div class="creds-grid">
          <div class="glass creds-card" data-reveal>
            <div class="section-tag"><span class="sec-idx">06</span>Certifications</div>
            <ul class="cert-list">
              <li v-for="cert in certifications" :key="cert">{{ cert }}</li>
            </ul>
          </div>
          <div class="glass creds-card" data-reveal>
            <div class="section-tag"><span class="sec-idx">07</span>Achievements</div>
            <div class="score-block">
              <div class="score-title">TCS NQT 2022</div>
              <div class="score-id">ID: 22071272587</div>
              <div class="score-bars">
                <div v-for="score in scores" :key="score.label" class="score-row">
                  <div class="score-label"><span>{{ score.label }}</span><span>{{ score.value }}%</span></div>
                  <div class="score-track"><div class="score-fill" :style="{ width: `${score.value}%` }"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" data-reveal aria-labelledby="contact-title">
        <div class="glass contact-card" data-reveal>
          <div class="section-tag"><span class="sec-idx">08</span>Contact</div>
          <h2 id="contact-title" class="contact-headline">Let's build something sharp,<br>useful, and real.</h2>
          <p class="contact-sub">Open to full-time roles, contracts, and collaborations. I reply fast.</p>
          <div class="contact-links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shashankh3@gmail.com" target="_blank" rel="noopener noreferrer" class="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              shashankh3@gmail.com
            </a>
            <a href="https://github.com/shashankh3" target="_blank" rel="noopener noreferrer" class="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.478-10-10-10z"/></svg>
              github.com/shashankh3
            </a>
            <a href="https://www.linkedin.com/in/shashankh3" target="_blank" rel="noopener noreferrer" class="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              linkedin.com/in/shashankh3
            </a>
          </div>
        </div>
      </section>
    </main>

    <button
      class="back-to-top"
      :class="{ 'is-visible': showBackToTop }"
      type="button"
      aria-label="Back to top"
      title="Back to top"
      @click="scrollToTop"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
      <span class="btt-text">TOP</span>
    </button>

    <footer>
      <p>© {{ year }} <span>Shashank Hirwani</span> — All rights reserved.</p>
      <p>Built with ♥ in India</p>
    </footer>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import ProjectVideo from '@/components/ProjectVideo.vue';
import { useLazySection } from '@/composables/useLazySection';
import { useMatrixRain } from '@/composables/useMatrixRain';
import { useMenu } from '@/composables/useMenu';
import { usePointerGlow } from '@/composables/usePointerGlow';
import { useReveal } from '@/composables/useReveal';
import { useScrollSpy } from '@/composables/useScrollSpy';
import { useTyping } from '@/composables/useTyping';
import {
  certifications,
  education,
  experience,
  heroMeta,
  navLinks,
  projects,
  scores,
  skillGroups
} from '@/data/portfolio';
import { asset } from '@/utils/asset';

// Loaded on demand: keeps the 77KB contribution dataset out of the initial
// bundle so it cannot delay first paint.
const GitHubActivity = defineAsyncComponent(() => import('@/components/GitHubActivity.vue'));

const faviconUrl = asset('/favicon.svg');
const resumeUrl = asset('/shashank_resume.pdf');
const year = new Date().getFullYear();

const shell = ref(null);
const spotlight = ref(null);
const matrixCanvas = ref(null);
const typedText = ref(null);
const scrollProgressBar = ref(null);
const ghSentinel = ref(null);

const { menuOpen, toggleMenu, closeMenu } = useMenu();
const { activeSection, showBackToTop, scrollToTop } = useScrollSpy({
  sectionIds: ['work', 'experience', 'stack', 'contact'],
  progressRef: scrollProgressBar
});
const ghReady = useLazySection(ghSentinel);

useMatrixRain(matrixCanvas);
useTyping(typedText);
useReveal(shell);
usePointerGlow(spotlight);
</script>
