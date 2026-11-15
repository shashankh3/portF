<template>
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
</template>

<script setup>
defineProps({
  experience: { type: Array, required: true },
});
</script>
