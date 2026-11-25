<template>
  <section id="experience" data-reveal aria-labelledby="experience-title">
    <div class="section-tag"><span class="sec-idx">{{ section.index }}</span>{{ section.tag }}</div>
    <h2 id="experience-title" class="section-title">{{ section.title }}</h2>
    <p class="section-desc">{{ section.description }}</p>
    <div class="timeline">
      <div v-for="job in experience" :key="job.org" class="tl-item">
        <div class="tl-line" aria-hidden="true"><div class="tl-dot"></div><div class="tl-track"></div></div>
        <div class="glass tl-body" data-reveal>
          <div class="tl-meta">{{ job.meta }}</div>
          <h3 class="tl-org">{{ job.org }}</h3>
          <div class="tl-role">{{ job.role }}</div>
          <p class="tl-desc">{{ job.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  section: { type: Object, required: true },
  experience: { type: Array, required: true }
});
</script>
