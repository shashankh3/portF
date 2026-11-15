<template>
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
</template>

<script setup>
defineProps({
  certifications: { type: Array, required: true },
  scores: { type: Array, required: true },
});
</script>
