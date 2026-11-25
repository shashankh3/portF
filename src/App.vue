<template>
  <div>
    <canvas id="matrix-canvas" ref="matrixCanvas" aria-hidden="true"></canvas>
    <div class="veil" aria-hidden="true"></div>
    <div ref="spotlight" class="spotlight" aria-hidden="true"></div>
    <div class="scanlines" aria-hidden="true"></div>

    <Nav
      ref="navRef"
      :brand="profile.brand"
      :menu-open="menuOpen"
      :nav-links="navLinks"
      :active-section="activeSection"
      :favicon-url="profile.faviconUrl"
      @toggle-menu="toggleMenu"
      @close-menu="closeMenu"
    />

    <main id="main" ref="shell" class="shell">
      <Hero :hero="hero" :profile="profile" />
      <About :about="about" />
      <Work
        :section="workSection"
        :projects="projects"
        :github-activity="githubActivity"
      />
      <Experience :section="experienceSection" :experience="experience" />
      <Stack :section="stackSection" :skill-groups="skillGroups" :education="education" />
      <Credentials
        :section="credentialsSection"
        :certifications="certifications"
        :achievement="achievement"
      />
      <Contact :contact="contact" />
    </main>

    <BackToTop :show-back-to-top="showBackToTop" @scroll-to-top="scrollToTop" />

    <footer>
      <p>© {{ year }} <span>{{ footer.owner }}</span> — {{ footer.rights }}</p>
      <p>{{ footer.builtWith }}</p>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import About from '@/components/About.vue';
import BackToTop from '@/components/BackToTop.vue';
import Contact from '@/components/Contact.vue';
import Credentials from '@/components/Credentials.vue';
import Experience from '@/components/Experience.vue';
import Hero from '@/components/Hero.vue';
import Nav from '@/components/Nav.vue';
import Stack from '@/components/Stack.vue';
import Work from '@/components/Work.vue';
import { useMatrixRain } from '@/composables/useMatrixRain';
import { useMenu } from '@/composables/useMenu';
import { usePointerGlow } from '@/composables/usePointerGlow';
import { useReveal } from '@/composables/useReveal';
import { useScrollSpy } from '@/composables/useScrollSpy';
import {
  about,
  achievement,
  certifications,
  contact,
  credentialsSection,
  education,
  experience,
  experienceSection,
  footer,
  githubActivity,
  hero,
  navLinks,
  profile,
  projects,
  sectionIds,
  skillGroups,
  stackSection,
  workSection
} from '@/data/portfolio';

const year = new Date().getFullYear();

const shell = ref(null);
const spotlight = ref(null);
const matrixCanvas = ref(null);
const navRef = ref(null);
const scrollProgressBar = computed(() => navRef.value?.scrollProgressBar || null);

const { menuOpen, toggleMenu, closeMenu } = useMenu();
const { activeSection, showBackToTop, scrollToTop } = useScrollSpy({
  sectionIds,
  progressRef: scrollProgressBar
});

useMatrixRain(matrixCanvas);
useReveal(shell);
usePointerGlow(spotlight);
</script>
