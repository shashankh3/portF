import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const MOBILE_BREAKPOINT = 760;

export function useMenu() {
  const menuOpen = ref(false);

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };

  const closeMenu = () => {
    menuOpen.value = false;
  };

  watch(menuOpen, (open) => {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('nav-open', open);
    }
  });

  const onKeydown = (event) => {
    if (event.key === 'Escape' && menuOpen.value) closeMenu();
  };

  const onResize = () => {
    if (typeof window !== 'undefined' && menuOpen.value && window.innerWidth > MOBILE_BREAKPOINT) {
      closeMenu();
    }
  };

  let listening = false;

  onMounted(() => {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') return;
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    listening = true;
  });

  onBeforeUnmount(() => {
    if (listening && typeof window !== 'undefined' && typeof window.removeEventListener === 'function') {
      window.removeEventListener('keydown', onKeydown);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      listening = false;
    }
    if (typeof document !== 'undefined') {
      document.body.classList.remove('nav-open');
    }
  });

  return { menuOpen, toggleMenu, closeMenu };
}
