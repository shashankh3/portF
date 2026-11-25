<template>
  <section data-reveal aria-label="Certifications and achievements">
    <div class="creds-grid">
      <div class="glass creds-card" data-reveal>
        <div class="section-tag"><span class="sec-idx">{{ section.certIndex }}</span>{{ section.certTag }}</div>
        <ul class="cert-list">
          <li v-for="cert in certifications" :key="cert">{{ cert }}</li>
        </ul>
      </div>
      <div class="glass creds-card" data-reveal>
        <div class="section-tag"><span class="sec-idx">{{ section.achievementIndex }}</span>{{ section.achievementTag }}</div>
        <div class="score-block">
          <div class="score-title">{{ achievement.title }}</div>
          <div class="score-id">{{ achievement.id }}</div>
          <div class="score-bars">
            <div v-for="score in achievement.scores" :key="score.label" class="score-row">
              <div class="score-label"><span>{{ score.label }}</span><span>{{ score.value }}%</span></div>
              <div class="score-track"><div class="score-fill" :style="{ width: `${score.value}%` }"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  section: { type: Object, required: true },
  certifications: { type: Array, required: true },
  achievement: { type: Object, required: true }
});
</script>
