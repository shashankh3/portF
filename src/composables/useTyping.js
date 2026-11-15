import { onBeforeUnmount, onMounted } from 'vue';

// The prefix is a block, so the phrase always starts on its own line and
// needs no leading separator.
const PHRASES = ['_', 'AI platforms', '3D digital twins', 'GPU pipelines', 'mobile apps', 'production APIs'];
const TYPE_MS = 120;
const DELETE_MS = 55;
const HOLD_MS = 1800;
const FIRST_HOLD_MS = 3200;
const START_DELAY_MS = 1200;

export function useTyping(targetRef) {
  let timer = null;
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const setText = (text) => {
    if (targetRef.value) targetRef.value.textContent = text;
  };

  // On narrow screens the prompt underscore lives next to the ">" (see
  // .prompt-bar), so the standalone "_" phase is skipped to avoid a duplicate.
  const currentPhrase = () =>
    phraseIndex === 0 && window.innerWidth <= 640 ? '' : PHRASES[phraseIndex];

  const tick = () => {
    const phrase = currentPhrase();
    let wait;

    if (deleting) {
      if (charIndex > 0) {
        charIndex--;
        setText(phrase.slice(0, charIndex));
        wait = DELETE_MS;
      } else {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % PHRASES.length;
        wait = 400;
      }
    } else if (charIndex < phrase.length) {
      charIndex++;
      setText(phrase.slice(0, charIndex));
      wait = TYPE_MS;
    } else {
      deleting = true;
      wait = phraseIndex === 0 ? FIRST_HOLD_MS : HOLD_MS;
    }

    timer = setTimeout(tick, wait);
  };

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // No typing animation for users who asked for less motion.
      setText(PHRASES[1]);
      return;
    }
    timer = setTimeout(tick, START_DELAY_MS);
  });

  onBeforeUnmount(() => {
    if (timer) clearTimeout(timer);
  });
}
