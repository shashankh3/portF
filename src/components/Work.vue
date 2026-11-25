<template>
  <section id="work" data-reveal aria-labelledby="work-title">
    <div class="section-tag"><span class="sec-idx">{{ section.index }}</span>{{ section.tag }}</div>
    <h2 id="work-title" class="section-title">{{ section.title }}</h2>
    <p class="section-desc">{{ section.description }}</p>
    <div class="project-grid">
      <article
        v-for="project in projects"
        :key="project.id"
        class="glass project-card has-video"
        data-reveal
      >
        <div class="proj-body">
          <div class="proj-num">{{ project.index }} // {{ project.kicker }}</div>
          <h3 class="proj-title">{{ project.title }}</h3>
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
    <GitHubActivity v-if="ghReady" :activity="githubActivity" />
  </section>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import ProjectVideo from '@/components/ProjectVideo.vue';
import { useLazySection } from '@/composables/useLazySection';

// Loaded on demand: keeps the 77KB contribution dataset out of the initial
// bundle so it cannot delay first paint.
const GitHubActivity = defineAsyncComponent(() => import('@/components/GitHubActivity.vue'));

defineProps({
  section: { type: Object, required: true },
  projects: { type: Array, required: true },
  githubActivity: { type: Object, required: true }
});

const ghSentinel = ref(null);
const ghReady = useLazySection(ghSentinel);
</script>
