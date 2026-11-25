<template>
  <section id="contact" data-reveal aria-labelledby="contact-title">
    <div class="glass contact-card" data-reveal>
      <div class="section-tag"><span class="sec-idx">{{ contact.index }}</span>{{ contact.tag }}</div>
      <h2 id="contact-title" class="contact-headline">
        {{ contact.headlineLines[0] }}<br>{{ contact.headlineLines[1] }}
      </h2>
      <p class="contact-sub">{{ contact.subtitle }}</p>
      <div class="contact-links">
        <a
          v-for="link in contact.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
        >
          <AppIcon :name="link.icon" :size="14" />
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from '@/components/AppIcon.vue';

defineProps({
  contact: { type: Object, required: true }
});
</script>
