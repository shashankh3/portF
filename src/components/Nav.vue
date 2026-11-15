<template>
  <div>
    <div class="nav-overlay" :class="{ 'is-open': menuOpen }" aria-hidden="true" @click="$emit('close-menu')"></div>
    <nav aria-label="Primary">
      <div ref="scrollProgressBar" class="scroll-progress" aria-hidden="true"></div>
      <div class="nav-inner">
        <a href="#top" class="nav-logo" @click="$emit('close-menu')">
          <img :src="faviconUrl" alt="" class="nav-yantra-icon" width="22" height="22" />
          <span>SH // DEV</span>
        </a>
        <button
          class="nav-toggle"
          :class="{ 'is-open': menuOpen }"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="nav-menu"
          :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="$emit('toggle-menu')"
        >
          <span></span><span></span><span></span>
        </button>
        <div id="nav-menu" class="nav-links" :class="{ 'is-open': menuOpen }">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            :class="{ 'is-active': link.section && activeSection === link.section, 'nav-resume': link.cta }"
            :target="link.external ? '_blank' : null"
            :rel="link.external ? 'noopener noreferrer' : null"
            :aria-current="link.section && activeSection === link.section ? 'true' : null"
            @click="$emit('close-menu')"
          >{{ link.label }}</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  menuOpen: { type: Boolean, default: false },
  navLinks: { type: Array, required: true },
  activeSection: { type: String, default: '' },
  faviconUrl: { type: String, default: '' },
});

defineEmits(['toggle-menu', 'close-menu']);

const scrollProgressBar = ref(null);
defineExpose({ scrollProgressBar });
</script>
