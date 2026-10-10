<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
const copyrightDate = new Date().getFullYear();
const author = "Yan Penalva";
</script>

<template>
  <p class="m-0 font-sans text-sm text-muted">
    &copy; {{ copyrightDate }} · {{ t("footer.developedBy") }}
    <a
      href="https://www.linkedin.com/in/yanpenalva/"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-sm font-medium text-accent hover:underline"
    >{{ author }}</a>
  </p>
</template>
