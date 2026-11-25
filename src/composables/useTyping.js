import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { prefersReducedMotion } from '@/utils/media';

// Each phrase carries the leading space that separates it from the prompt ">".
const DEFAULT_PHRASES = [
  ' AI platforms',
  ' 3D digital twins',
  ' GPU pipelines',
  ' mobile apps',
  ' production APIs'
];
const TYPE_MS = 120;
const DELETE_MS = 55;
const HOLD_MS = 1800;
const FIRST_HOLD_MS = 3200;
const START_DELAY_MS = 1200;
const RESTART_DELAY_MS = 400;

export function useTyping(options = {}) {
  const phrases = Array.isArray(options.phrases) && options.phrases.length
    ? options.phrases
    : DEFAULT_PHRASES;

  let timer = null;
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const typedText = ref('');
  const hasText = computed(() => typedText.value.length > 0);

  const tick = () => {
    const phrase = phrases[phraseIndex];
    let wait;

    if (deleting) {
      if (charIndex > 0) {
        charIndex--;
        typedText.value = phrase.slice(0, charIndex);
        wait = DELETE_MS;
      } else {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        wait = RESTART_DELAY_MS;
      }
    } else if (charIndex < phrase.length) {
      charIndex++;
      typedText.value = phrase.slice(0, charIndex);
      wait = TYPE_MS;
    } else {
      deleting = true;
      wait = phraseIndex === 0 ? FIRST_HOLD_MS : HOLD_MS;
    }

    timer = setTimeout(tick, wait);
  };

  onMounted(() => {
    if (prefersReducedMotion()) {
      // No typing animation for users who asked for less motion.
      typedText.value = phrases[0];
      return;
    }
    timer = setTimeout(tick, START_DELAY_MS);
  });

  onBeforeUnmount(() => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  });

  return { typedText, hasText };
}
