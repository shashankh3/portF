<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-inner">
      <div class="hero-copy">
        <div class="hero-label">System Online — Available for opportunities</div>
        <h1 id="hero-title" class="hero-title">
          <span class="sr-only">I build AI platforms, 3D digital twins, GPU pipelines, mobile apps, and production APIs.</span>
          <span class="hero-title-prefix" aria-hidden="true">I build <span class="gt">&gt;</span></span><span id="typed-text" ref="typedText" aria-hidden="true"></span><span class="hero-cursor" aria-hidden="true"><span class="prompt-bar">_</span><span class="cursor-blink"></span></span>
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
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useTyping } from '@/composables/useTyping';

defineProps({
  heroMeta: { type: Array, required: true },
  resumeUrl: { type: String, required: true },
});

const typedText = ref(null);
useTyping(typedText);
</script>
