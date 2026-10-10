<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import AppHeaderLinks from "@/components/shared/AppHeaderLinks.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { useTheme } from "@/composables/useTheme";
import { useLocale } from "@/composables/useLocale";

const { theme, setTheme } = useTheme();
const { t } = useLocale();
const route = useRoute();
const isOpen = ref(false);

watch(
  () => route.path,
  () => {
    isOpen.value = false;
  }
);

function updateTheme(value) {
  setTheme(value);
}
</script>

<template>
  <header class="border-b border-border">
    <nav
      class="mx-auto flex w-full max-w-[1160px] flex-wrap items-center justify-between gap-x-6 px-4 py-4 sm:flex-nowrap sm:px-8 lg:px-0"
    >
      <router-link
        to="/"
        class="shrink-0 font-sans text-lg font-semibold tracking-tight text-text transition-colors duration-150 hover:text-accent"
      >
        Yan Penalva
      </router-link>

      <AppHeaderLinks :is-open="isOpen" />

      <div class="order-2 flex shrink-0 items-center gap-1 sm:order-3 sm:gap-2">
        <LanguageSwitcher class="p-2" />
        <ThemeSwitcher :theme="theme" class="p-2" @themeChanged="updateTheme" />
        <button
          type="button"
          class="rounded-sm p-2 text-text transition-colors duration-150 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:hidden"
          :aria-label="t('common.toggleNav')"
          :aria-expanded="isOpen"
          aria-controls="primary-navigation"
          @click="isOpen = !isOpen"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path
              v-if="isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m6 6 12 12M18 6 6 18"
            />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </nav>
  </header>
</template>
