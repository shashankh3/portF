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
    document.body.classList.toggle('nav-open', open);
  });

  const onKeydown = (event) => {
    if (event.key === 'Escape' && menuOpen.value) closeMenu();
  };

  const onResize = () => {
    if (menuOpen.value && window.innerWidth > MOBILE_BREAKPOINT) closeMenu();
  };

  onMounted(() => {
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('orientationchange', onResize);
    document.body.classList.remove('nav-open');
  });

  return { menuOpen, toggleMenu, closeMenu };
}
