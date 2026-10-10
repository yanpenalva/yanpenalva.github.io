const revealStates = new WeakMap();

const makeVisible = (element) => {
  element.classList.remove("reveal");
  element.classList.add("is-visible");
};

const observeElement = (element, state) => {
  state.observer?.disconnect();
  state.observer = null;

  if (!state.motionQuery.matches) {
    makeVisible(element);
    return;
  }

  element.classList.add("reveal");
  element.classList.remove("is-visible");

  const observer = new window.IntersectionObserver(
    (entries) => {
      if (!state.motionQuery.matches || revealStates.get(element) !== state) return;

      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
          element.classList.add("is-visible");
          observer.disconnect();
          state.observer = null;
          break;
        }
      }
    },
    { threshold: 0.12 }
  );

  state.observer = observer;
  observer.observe(element);
};

const onMotionPreferenceChange = (element, state) => {
  if (state.motionQuery.matches && typeof window.IntersectionObserver === "function") {
    observeElement(element, state);
  } else {
    state.observer?.disconnect();
    state.observer = null;
    makeVisible(element);
  }
};

const removeMotionPreferenceListener = (query, listener) => {
  if (typeof query.removeEventListener === "function") {
    query.removeEventListener("change", listener);
  } else {
    query.removeListener?.(listener);
  }
};

export const vReveal = {
  mounted(element) {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (typeof window.IntersectionObserver !== "function") return;

    const state = { observer: null, motionQuery, onChange: null };
    state.onChange = () => onMotionPreferenceChange(element, state);
    revealStates.set(element, state);

    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", state.onChange);
    } else {
      motionQuery.addListener?.(state.onChange);
    }

    onMotionPreferenceChange(element, state);
  },

  unmounted(element) {
    const state = revealStates.get(element);
    if (!state) return;

    state.observer?.disconnect();
    removeMotionPreferenceListener(state.motionQuery, state.onChange);
    revealStates.delete(element);
  },
};
