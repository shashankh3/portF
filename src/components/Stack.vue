<template>
  <section id="stack" data-reveal aria-label="Technical stack and education">
    <div class="skills-grid">
      <div class="glass skills-card" data-reveal>
        <div class="section-tag"><span class="sec-idx">{{ section.stackIndex }}</span>{{ section.stackTag }}</div>
        <div v-for="group in skillGroups" :key="group.label" class="skill-group">
          <div class="skill-group-label">{{ group.label }}</div>
          <div class="tag-wrap">
            <span v-for="tag in group.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div class="glass edu-card" data-reveal>
        <div class="section-tag"><span class="sec-idx">{{ section.educationIndex }}</span>{{ section.educationTag }}</div>
        <div v-for="item in education" :key="item.school" class="edu-block">
          <div class="edu-school">{{ item.school }}</div>
          <div class="edu-deg">{{ item.degree }}</div>
          <div class="edu-meta">{{ item.meta }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  section: { type: Object, required: true },
  skillGroups: { type: Array, required: true },
  education: { type: Array, required: true }
});
</script>
