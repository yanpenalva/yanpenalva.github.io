<script setup>
import { useLocale } from "@/composables/useLocale";

const { locale, t, toggleLocale } = useLocale();
</script>

<template>
  <button
    type="button"
    class="font-mono text-xs uppercase tracking-wide text-muted transition-colors duration-150 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    :aria-label="locale === 'en-US' ? t('common.switchToPortuguese') : t('common.switchToEnglish')"
    @click="toggleLocale"
  >
    {{ locale === "en-US" ? "PT" : "EN" }}
  </button>
</template>
