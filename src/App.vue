<template>
  <div>
    <canvas id="matrix-canvas" ref="matrixCanvas" aria-hidden="true"></canvas>
    <div class="veil"></div>
    <div ref="spotlight" class="spotlight" aria-hidden="true"></div>
    <div class="scanlines" aria-hidden="true"></div>

    <Nav
      ref="navRef"
      :menu-open="menuOpen"
      :nav-links="navLinks"
      :active-section="activeSection"
      :favicon-url="faviconUrl"
      @toggle-menu="toggleMenu"
      @close-menu="closeMenu"
    />

    <main id="main" ref="shell" class="shell">
      <Hero :hero-meta="heroMeta" :resume-url="resumeUrl" />
      <About />

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

      <Experience :experience="experience" />
      <Stack :skill-groups="skillGroups" :education="education" />
      <Credentials :certifications="certifications" :scores="scores" />
      <Contact />
    </main>

    <BackToTop :show-back-to-top="showBackToTop" @scroll-to-top="scrollToTop" />

    <footer>
      <p>© {{ year }} <span>Shashank Hirwani</span> — All rights reserved.</p>
      <p>Built with ♥ in India</p>
    </footer>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from 'vue';
import About from '@/components/About.vue';
import BackToTop from '@/components/BackToTop.vue';
import Contact from '@/components/Contact.vue';
import Credentials from '@/components/Credentials.vue';
import Experience from '@/components/Experience.vue';
import Hero from '@/components/Hero.vue';
import Nav from '@/components/Nav.vue';
import ProjectVideo from '@/components/ProjectVideo.vue';
import Stack from '@/components/Stack.vue';
import { useLazySection } from '@/composables/useLazySection';
import { useMatrixRain } from '@/composables/useMatrixRain';
import { useMenu } from '@/composables/useMenu';
import { usePointerGlow } from '@/composables/usePointerGlow';
import { useReveal } from '@/composables/useReveal';
import { useScrollSpy } from '@/composables/useScrollSpy';
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
const navRef = ref(null);
const scrollProgressBar = computed(() => navRef.value?.scrollProgressBar || null);
const ghSentinel = ref(null);

const { menuOpen, toggleMenu, closeMenu } = useMenu();
const { activeSection, showBackToTop, scrollToTop } = useScrollSpy({
  sectionIds: ['work', 'experience', 'stack', 'contact'],
  progressRef: scrollProgressBar
});
const ghReady = useLazySection(ghSentinel);

useMatrixRain(matrixCanvas);
useReveal(shell);
usePointerGlow(spotlight);
</script>
