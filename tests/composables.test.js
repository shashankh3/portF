import { createRenderer, defineComponent } from 'vue';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useLazySection } from '@/composables/useLazySection.js';
import { useMenu } from '@/composables/useMenu.js';
import { usePointerGlow } from '@/composables/usePointerGlow.js';
import { useReveal } from '@/composables/useReveal.js';
import { resolveScrollState, useScrollSpy } from '@/composables/useScrollSpy.js';
import { useTyping } from '@/composables/useTyping.js';

const { createApp } = createRenderer({
  patchProp: () => {},
  insert: () => {},
  remove: () => {},
  createElement: () => ({}),
  createText: () => ({}),
  createComment: () => ({}),
  setText: () => {},
  setElementText: () => {},
  parentNode: () => null,
  nextSibling: () => null
});

function mountComposable(composable) {
  let result;
  const Root = defineComponent({
    setup() {
      result = composable();
      return () => null;
    }
  });
  const app = createApp(Root);
  app.mount({});
  return {
    result,
    unmount: () => app.unmount()
  };
}

function createClassList(set = new Set()) {
  return {
    add: (cls) => set.add(cls),
    remove: (cls) => set.delete(cls),
    toggle: (cls, force) => (force ? set.add(cls) : set.delete(cls)),
    has: (cls) => set.has(cls)
  };
}

describe('useTyping', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('types and deletes phrases on schedule and cleans up on unmount', () => {
    vi.stubGlobal('window', { matchMedia: () => ({ matches: false }) });

    const { result, unmount } = mountComposable(() => useTyping({ phrases: [' hi'] }));
    expect(result.typedText.value).toBe('');
    expect(result.hasText.value).toBe(false);

    vi.advanceTimersByTime(1200);
    expect(result.typedText.value).toBe(' ');
    expect(result.hasText.value).toBe(true);

    vi.advanceTimersByTime(240);
    expect(result.typedText.value).toBe(' hi');

    vi.advanceTimersByTime(120 + 3200);
    vi.advanceTimersByTime(55 * 3);
    expect(result.typedText.value).toBe('');
    expect(result.hasText.value).toBe(false);

    unmount();
    vi.advanceTimersByTime(5000);
    expect(result.typedText.value).toBe('');
  });

  it('renders the first phrase immediately when reduced motion is enabled', () => {
    vi.stubGlobal('window', { matchMedia: () => ({ matches: true }) });

    const { result, unmount } = mountComposable(() => useTyping({ phrases: [' AI', ' Web'] }));
    expect(result.typedText.value).toBe(' AI');
    expect(result.hasText.value).toBe(true);
    unmount();
  });
});

describe('useMenu', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('toggles body class and closes on Escape or desktop resize', async () => {
    const listeners = {};
    const classSet = new Set();
    const mockWindow = {
      innerWidth: 390,
      addEventListener: (event, fn) => {
        listeners[event] = fn;
      },
      removeEventListener: (event) => {
        delete listeners[event];
      }
    };

    vi.stubGlobal('window', mockWindow);
    vi.stubGlobal('document', {
      body: { classList: createClassList(classSet) }
    });

    const { result, unmount } = mountComposable(() => useMenu());
    expect(result.menuOpen.value).toBe(false);

    result.toggleMenu();
    await Promise.resolve();
    expect(result.menuOpen.value).toBe(true);
    expect(classSet.has('nav-open')).toBe(true);

    listeners.keydown({ key: 'Escape' });
    await Promise.resolve();
    expect(result.menuOpen.value).toBe(false);
    expect(classSet.has('nav-open')).toBe(false);

    result.toggleMenu();
    mockWindow.innerWidth = 1024;
    listeners.resize();
    expect(result.menuOpen.value).toBe(false);

    unmount();
    expect(listeners.keydown).toBeUndefined();
    expect(listeners.resize).toBeUndefined();
  });
});

describe('resolveScrollState & useScrollSpy', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('computes active section, progress, and back-to-top visibility accurately', () => {
    const sectionIds = ['work', 'experience', 'stack', 'contact'];
    const sectionOffsets = [500, 1200, 2000, 2800];

    expect(
      resolveScrollState({ scrollY: 0, maxScroll: 3000, sectionIds, sectionOffsets })
    ).toEqual({ activeSection: '', showBackToTop: false, progress: 0 });

    expect(
      resolveScrollState({ scrollY: 1100, maxScroll: 3000, sectionIds, sectionOffsets })
    ).toEqual({
      activeSection: 'experience',
      showBackToTop: true,
      progress: 1100 / 3000
    });

    expect(
      resolveScrollState({ scrollY: 2996, maxScroll: 3000, sectionIds, sectionOffsets })
    ).toEqual({
      activeSection: 'contact',
      showBackToTop: true,
      progress: 2996 / 3000
    });
  });

  it('does not activate the last section or set progress=1 when page is not scrollable', () => {
    expect(
      resolveScrollState({
        scrollY: 0,
        maxScroll: 0,
        sectionIds: ['work', 'contact'],
        sectionOffsets: [500, 1200]
      })
    ).toEqual({ activeSection: '', showBackToTop: false, progress: 0 });
  });

  it('scrolls to top respecting reduced motion preference', () => {
    const scrollTo = vi.fn();
    vi.stubGlobal('window', {
      scrollTo,
      matchMedia: () => ({ matches: true })
    });

    const { result, unmount } = mountComposable(() =>
      useScrollSpy({ sectionIds: ['work'] })
    );
    result.scrollToTop();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
    unmount();
  });
});

describe('useLazySection', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('becomes ready immediately when IntersectionObserver is unavailable', () => {
    const { result, unmount } = mountComposable(() => useLazySection({ value: {} }));
    expect(result.value).toBe(true);
    unmount();
  });

  it('waits until the sentinel intersects and then disconnects', () => {
    let callback;
    const observe = vi.fn();
    const disconnect = vi.fn();

    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(cb) {
          callback = cb;
        }
        observe = observe;
        disconnect = disconnect;
      }
    );
    vi.stubGlobal('window', { IntersectionObserver: globalThis.IntersectionObserver });

    const sentinel = { value: { id: 'sentinel' } };
    const { result, unmount } = mountComposable(() => useLazySection(sentinel));

    expect(result.value).toBe(false);
    expect(observe).toHaveBeenCalledWith(sentinel.value);

    callback([{ isIntersecting: false }]);
    expect(result.value).toBe(false);

    callback([{ isIntersecting: true }]);
    expect(result.value).toBe(true);
    expect(disconnect).toHaveBeenCalledTimes(1);

    unmount();
  });

  it('activates eagerly after eagerDelayMs when idle before scroll reaches sentinel', () => {
    vi.useFakeTimers();
    const observe = vi.fn();
    const disconnect = vi.fn();

    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe = observe;
        disconnect = disconnect;
      }
    );
    vi.stubGlobal('window', { IntersectionObserver: globalThis.IntersectionObserver });

    const sentinel = { value: { id: 'sentinel' } };
    const { result, unmount } = mountComposable(() =>
      useLazySection(sentinel, { eagerDelayMs: 150 })
    );

    expect(result.value).toBe(false);
    vi.advanceTimersByTime(150);
    expect(result.value).toBe(true);
    expect(disconnect).toHaveBeenCalledTimes(1);

    unmount();
    vi.useRealTimers();
  });
});

describe('useReveal', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('staggers siblings, reveals intersecting elements, and cleans up reveal-ready class', () => {
    const docClassSet = new Set();
    const makeItem = (parentElement) => {
      const classes = new Set();
      const styles = {};
      return {
        parentElement,
        classList: createClassList(classes),
        style: { setProperty: (k, v) => (styles[k] = v) },
        classes,
        styles
      };
    };

    const parent = {};
    const items = Array.from({ length: 5 }, () => makeItem(parent));
    let observerCallback;
    const observe = vi.fn();
    const unobserve = vi.fn();
    const disconnect = vi.fn();

    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(cb) {
          observerCallback = cb;
        }
        observe = observe;
        unobserve = unobserve;
        disconnect = disconnect;
      }
    );
    vi.stubGlobal('window', { IntersectionObserver: globalThis.IntersectionObserver });
    vi.stubGlobal('document', {
      documentElement: { classList: createClassList(docClassSet) }
    });

    const rootRef = { value: { querySelectorAll: () => items } };
    const { unmount } = mountComposable(() => useReveal(rootRef));

    expect(docClassSet.has('reveal-ready')).toBe(true);
    expect(items[0].styles['--reveal-delay']).toBeUndefined();
    expect(items[1].styles['--reveal-delay']).toBe('25ms');
    expect(items[2].styles['--reveal-delay']).toBe('50ms');
    expect(items[3].styles['--reveal-delay']).toBe('50ms');
    expect(items[4].styles['--reveal-delay']).toBe('50ms');
    expect(observe).toHaveBeenCalledTimes(5);

    observerCallback([{ isIntersecting: true, target: items[1] }]);
    expect(items[1].classes.has('is-visible')).toBe(true);
    expect(unobserve).toHaveBeenCalledWith(items[1]);

    unmount();
    expect(disconnect).toHaveBeenCalledTimes(1);
    expect(docClassSet.has('reveal-ready')).toBe(false);
  });
});

describe('usePointerGlow', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('updates spotlight and hovered glass card coordinates when hover pointer is active', () => {
    const listeners = {};
    const spotlightStyles = {};
    const cardStyles = {};
    let rafCallback = null;

    const card = {
      getBoundingClientRect: () => ({ left: 100, top: 50 }),
      style: { setProperty: (k, v) => (cardStyles[k] = v) }
    };

    vi.stubGlobal('window', {
      matchMedia: (query) => ({ matches: query.includes('hover: hover') }),
      addEventListener: (event, fn) => {
        listeners[event] = fn;
      },
      removeEventListener: (event) => {
        delete listeners[event];
      }
    });
    vi.stubGlobal('requestAnimationFrame', (cb) => {
      rafCallback = cb;
      return 1;
    });
    vi.stubGlobal('cancelAnimationFrame', vi.fn());

    const spotlightRef = {
      value: { style: { setProperty: (k, v) => (spotlightStyles[k] = v) } }
    };

    const { unmount } = mountComposable(() => usePointerGlow(spotlightRef));
    listeners.pointerover({ target: { closest: () => card } });
    listeners.pointermove({ clientX: 250, clientY: 180 });
    rafCallback();

    expect(spotlightStyles['--mx']).toBe('250px');
    expect(spotlightStyles['--my']).toBe('180px');
    expect(cardStyles['--cx']).toBe('150px');
    expect(cardStyles['--cy']).toBe('130px');

    unmount();
    expect(listeners.pointermove).toBeUndefined();
    expect(listeners.resize).toBeUndefined();
  });
});
