<template>
  <button
    class="back-to-top"
    :class="{ 'is-visible': showBackToTop }"
    type="button"
    aria-label="Back to top"
    title="Back to top"
    @click="$emit('scroll-to-top')"
  >
    <AppIcon name="chevron-up" :size="15" />
    <span class="btt-text">TOP</span>
  </button>
</template>

<script setup>
import AppIcon from '@/components/AppIcon.vue';

defineProps({
  showBackToTop: { type: Boolean, default: false }
});

defineEmits(['scroll-to-top']);
</script>
