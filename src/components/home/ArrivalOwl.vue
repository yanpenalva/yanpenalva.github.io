<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const POSE = { GLIDE: "glide", LAND: "land", PERCH: "perch" };
const SESSION_KEY = "penalva:arrival-owl";
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const pose = ref(POSE.PERCH);
const blinking = ref(false);
const ready = ref(false);
const flying = ref(false);
const host = ref(null);
const timers = [];

let animation = null;
let disposed = false;
let motionQuery = null;

const later = (fn, ms) => timers.push(setTimeout(fn, ms));

const clearTimers = () => {
  while (timers.length) clearTimeout(timers.pop());
};

const blink = (ms = 140) => {
  blinking.value = true;
  later(() => {
    blinking.value = false;
  }, ms);
};

// Stop wherever the owl is and leave it perched, without motion.
const settle = () => {
  clearTimers();
  if (!disposed) animation?.cancel();
  animation = null;
  flying.value = false;
  blinking.value = false;
  pose.value = POSE.PERCH;
};

onMounted(() => {
  motionQuery = window.matchMedia?.(MOTION_QUERY) ?? null;
  const reduce = motionQuery?.matches ?? false;
  motionQuery?.addEventListener("change", (event) => {
    if (event.matches) settle();
  });

  let seen = false;
  try {
    seen = sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    // Storage blocked (private mode): treat every load as a first visit.
  }

  ready.value = true;

  // Repeat visit in the session, reduced motion, or no element: stay perched.
  if (reduce || seen || !host.value) {
    pose.value = POSE.PERCH;
    later(() => blink(), 900);
    return;
  }

  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Nothing to persist; the flight still plays on this load.
  }

  const el = host.value;
  pose.value = POSE.GLIDE;
  flying.value = true;

  animation = el.animate(
    [
      { transform: "translate(150px, -118px) rotate(-10deg) scale(.9)", opacity: 0 },
      { transform: "translate(92px, -64px) rotate(-6deg) scale(.97)", opacity: 1, offset: 0.28 },
      { transform: "translate(18px, -10px) rotate(0deg) scale(1.02)", offset: 0.68 },
      { transform: "translate(0, 4px) scale(.94)", offset: 0.82 },
      { transform: "translate(0, 0) scale(1)", offset: 1 }
    ],
    { duration: 1150, easing: "cubic-bezier(.22,.9,.24,1)", fill: "both" }
  );

  later(() => {
    pose.value = POSE.LAND;
  }, 620);
  later(() => {
    pose.value = POSE.PERCH;
  }, 980);
  later(() => {
    animation?.cancel();
    animation = null;
    flying.value = false;
  }, 1200);
  later(() => blink(), 1260);
  later(() => blink(), 3000);
  later(() => blink(), 4700);
});

onBeforeUnmount(() => {
  disposed = true;
  clearTimers();
  animation?.cancel();
  motionQuery?.removeEventListener("change", settle);
});
</script>

<template>
  <span
    ref="host"
    class="arrival-owl"
    :class="{ 'is-ready': ready, 'is-flying': flying }"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 64 64"
      class="h-full w-full"
      focusable="false"
    >
      <g v-if="pose === 'glide'">
        <g transform="rotate(-19 32 34)">
          <path
            d="M22 31 C9 27 2 22 0 17 C2 27 9 36 21 40 Z"
            fill="currentColor"
          />
          <path
            d="M42 31 C55 27 62 22 64 17 C62 27 55 36 43 40 Z"
            fill="currentColor"
          />
          <path
            d="M26 49 L32 60 L38 49 Z"
            fill="currentColor"
          />
        </g>
        <ellipse
          cx="32"
          cy="38"
          rx="11"
          ry="15"
          fill="currentColor"
        />
        <path
          d="M21 10 L26 3 L29.5 10.5 Z"
          fill="currentColor"
        />
        <path
          d="M43 10 L38 3 L34.5 10.5 Z"
          fill="currentColor"
        />
        <circle
          cx="32"
          cy="20"
          r="12"
          fill="currentColor"
        />
        <circle
          cx="26.5"
          cy="19"
          r="5"
          fill="rgb(var(--color-canvas))"
        />
        <circle
          cx="37.5"
          cy="19"
          r="5"
          fill="rgb(var(--color-canvas))"
        />
        <circle
          cx="26.5"
          cy="19"
          r="2.1"
          fill="rgb(var(--color-text))"
        />
        <circle
          cx="37.5"
          cy="19"
          r="2.1"
          fill="rgb(var(--color-text))"
        />
        <path
          d="M32 22 L35.5 27 L28.5 27 Z"
          fill="rgb(var(--color-canvas))"
        />
      </g>

      <g v-else-if="pose === 'land'">
        <path
          d="M23 33 C13 28 5 22 2 17 C12 17 22 24 28 31 Z"
          fill="currentColor"
        />
        <path
          d="M41 33 C51 28 59 22 62 17 C52 17 42 24 36 31 Z"
          fill="currentColor"
        />
        <ellipse
          cx="32"
          cy="37"
          rx="11"
          ry="15"
          fill="currentColor"
        />
        <path
          d="M21 10 L26 3 L29.5 10.5 Z"
          fill="currentColor"
        />
        <path
          d="M43 10 L38 3 L34.5 10.5 Z"
          fill="currentColor"
        />
        <circle
          cx="32"
          cy="20"
          r="12"
          fill="currentColor"
        />
        <circle
          cx="26.5"
          cy="19"
          r="5"
          fill="rgb(var(--color-canvas))"
        />
        <circle
          cx="37.5"
          cy="19"
          r="5"
          fill="rgb(var(--color-canvas))"
        />
        <circle
          cx="26.5"
          cy="19"
          r="2.1"
          fill="rgb(var(--color-text))"
        />
        <circle
          cx="37.5"
          cy="19"
          r="2.1"
          fill="rgb(var(--color-text))"
        />
        <path
          d="M32 22 L35.5 27 L28.5 27 Z"
          fill="rgb(var(--color-canvas))"
        />
        <path
          d="M25 51 L25 57 M25 57 L19 62 M25 57 L25 64 M25 57 L31 62"
          stroke="currentColor"
          stroke-width="2.8"
          stroke-linecap="round"
          fill="none"
        />
        <path
          d="M39 51 L39 57 M39 57 L33 62 M39 57 L39 64 M39 57 L45 62"
          stroke="currentColor"
          stroke-width="2.8"
          stroke-linecap="round"
          fill="none"
        />
      </g>

      <g v-else>
        <path
          d="M27 49 L32 58 L37 49 Z"
          fill="currentColor"
        />
        <ellipse
          cx="32"
          cy="37"
          rx="11"
          ry="15"
          fill="currentColor"
        />
        <path
          d="M22.5 27 C17.5 33 17 43 20 48.5 C22 50.5 25 49.5 24.4 45.5 C23.2 39 23.6 32 26 27.5 Z"
          fill="rgb(var(--color-accent-wing))"
          stroke="rgb(var(--color-canvas))"
          stroke-width="1.2"
        />
        <path
          d="M41.5 27 C46.5 33 47 43 44 48.5 C42 50.5 39 49.5 39.6 45.5 C40.8 39 40.4 32 38 27.5 Z"
          fill="rgb(var(--color-accent-wing))"
          stroke="rgb(var(--color-canvas))"
          stroke-width="1.2"
        />
        <path
          d="M21 10 L26 3 L29.5 10.5 Z"
          fill="currentColor"
        />
        <path
          d="M43 10 L38 3 L34.5 10.5 Z"
          fill="currentColor"
        />
        <circle
          cx="32"
          cy="20"
          r="12"
          fill="currentColor"
        />
        <circle
          cx="26.5"
          cy="19"
          r="5"
          fill="rgb(var(--color-canvas))"
        />
        <circle
          cx="37.5"
          cy="19"
          r="5"
          fill="rgb(var(--color-canvas))"
        />
        <template v-if="!blinking">
          <circle
            cx="26.5"
            cy="19"
            r="2.1"
            fill="rgb(var(--color-text))"
          />
          <circle
            cx="37.5"
            cy="19"
            r="2.1"
            fill="rgb(var(--color-text))"
          />
        </template>
        <template v-else>
          <path
            d="M21.8 19 Q26.5 14.6 30.6 19 Q26.5 21.8 21.8 19 Z"
            fill="rgb(var(--color-text))"
          />
          <path
            d="M33.4 19 Q37.5 14.6 42.2 19 Q37.5 21.8 33.4 19 Z"
            fill="rgb(var(--color-text))"
          />
        </template>
        <path
          d="M32 22 L35.5 27 L28.5 27 Z"
          fill="rgb(var(--color-canvas))"
        />
        <path
          d="M28 48 L28 57 M28 57 L24 61 M28 57 L28 62 M28 57 L32 61"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          fill="none"
        />
        <path
          d="M36 48 L36 57 M36 57 L32 61 M36 57 L36 62 M36 57 L40 61"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          fill="none"
        />
      </g>
    </svg>
  </span>
</template>

<style scoped>
.arrival-owl {
  position: absolute;
  right: 4.75rem;
  bottom: -3px;
  display: block;
  width: 44px;
  height: 44px;
  color: rgb(var(--color-accent));
  transform-origin: 50% 94%;
  pointer-events: none;
  opacity: 0;
}

/* Hidden until the component knows whether it will fly, so the perched pose
   never flashes before the arrival starts. */
.arrival-owl.is-ready {
  opacity: 1;
}

.arrival-owl.is-flying {
  will-change: transform;
}

@media (max-width: 640px) {
  .arrival-owl {
    right: 0.4rem;
    bottom: -4px;
    width: 38px;
    height: 38px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .arrival-owl {
    will-change: auto;
  }
}
</style>
