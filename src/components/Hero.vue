<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-inner">
      <div class="hero-copy">
        <div class="hero-label">{{ hero.status }}</div>
        <h1 id="hero-title" class="hero-title">
          <span class="sr-only">{{ hero.srHeadline }}</span>
          <span class="hero-title-prefix" aria-hidden="true">{{ hero.prefix }} <span class="gt">&gt;</span><span v-if="!hasText" class="prompt-bar">_</span></span><span id="typed-text" aria-hidden="true">{{ typedText }}</span><span v-if="hasText" class="cursor-blink" aria-hidden="true"></span>
        </h1>
        <p class="hero-sub">
          <template v-for="(part, idx) in hero.summary" :key="idx">
            <strong v-if="part.strong">{{ part.text }}</strong>
            <template v-else>{{ part.text }}</template>
          </template>
        </p>
        <div class="hero-ctas">
          <a href="#work" class="btn btn-prime">
            <AppIcon name="arrow-right" :size="15" />
            View Projects
          </a>
          <a :href="profile.githubUrl" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
            <AppIcon name="github" :size="15" />
            GitHub
          </a>
          <a :href="profile.linkedinUrl" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
            <AppIcon name="linkedin" :size="15" />
            LinkedIn
          </a>
          <a :href="profile.resumeUrl" download class="btn btn-ghost">
            <AppIcon name="download" :size="15" />
            Resume
          </a>
        </div>
        <div class="hero-meta">
          <div v-for="item in hero.meta" :key="item.label" class="meta-item">
            <div class="label">{{ item.label }}</div>
            <div class="val">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from '@/components/AppIcon.vue';
import { useTyping } from '@/composables/useTyping';

const props = defineProps({
  hero: { type: Object, required: true },
  profile: { type: Object, required: true }
});

const { typedText, hasText } = useTyping({ phrases: props.hero.phrases });
</script>
