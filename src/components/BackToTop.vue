<template>
  <button
    class="back-to-top"
    :class="{ 'is-visible': showBackToTop }"
    type="button"
    aria-label="Back to top"
    title="Back to top"
    @click="$emit('scroll-to-top')"
  >
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
    <span class="btt-text">TOP</span>
  </button>
</template>

<script setup>
defineProps({
  showBackToTop: { type: Boolean, default: false },
});

defineEmits(['scroll-to-top']);
</script>
