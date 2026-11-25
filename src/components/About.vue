<template>
  <section id="about" data-reveal aria-label="Profile">
    <div class="about-grid">
      <div class="glass about-card" data-reveal>
        <div class="section-tag"><span class="sec-idx">{{ about.index }}</span>{{ about.tag }}</div>
        <h2 class="section-title">{{ about.title }}</h2>
        <p v-for="paragraph in about.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </div>
      <div class="glass signal-card" data-reveal>
        <div class="section-tag">{{ about.signalTag }}</div>
        <ul>
          <li v-for="signal in about.signals" :key="signal">{{ signal }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  about: { type: Object, required: true }
});
</script>
