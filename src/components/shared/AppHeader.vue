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
  <nav id="nav" class="sm:container sm:mx-auto">
    <div class="flex items-center justify-between py-6">
      <router-link to="/" class="font-sans text-xl font-medium text-text">
        {{ t("nav.home") }}
      </router-link>
      <div class="flex items-center gap-2 sm:hidden">
        <LanguageSwitcher />
        <ThemeSwitcher
          :theme="theme"
          class="rounded-full border border-border bg-surface p-2"
          @themeChanged="updateTheme"
        />
        <button
          type="button"
          class="rounded-full border border-border bg-surface p-2 text-text"
          :aria-label="t('common.toggleNav')"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
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
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div class="hidden items-center gap-2 sm:flex">
        <LanguageSwitcher />
        <ThemeSwitcher
          :theme="theme"
          class="rounded-full border border-border bg-surface p-2"
          @themeChanged="updateTheme"
        />
      </div>
    </div>
    <AppHeaderLinks :isOpen="isOpen" />
  </nav>
</template>
