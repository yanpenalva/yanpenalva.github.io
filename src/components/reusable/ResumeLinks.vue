<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <a
      href="/files/Yan_Penalva_Curriculo_PTBR.pdf"
      download="Yan_Penalva_Curriculo_PTBR.pdf"
      class="rounded-md border border-border bg-surface px-4 py-3 font-sans text-sm font-medium text-text transition-colors hover:border-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {{ t("home.resumePt") }}
    </a>
    <a
      href="/files/Yan_Penalva_Resume_EN.pdf"
      download="Yan_Penalva_Resume_EN.pdf"
      class="rounded-md border border-border bg-surface px-4 py-3 font-sans text-sm font-medium text-text transition-colors hover:border-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {{ t("home.resumeEn") }}
    </a>
  </div>
</template>
