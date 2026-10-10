<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
const copyrightDate = new Date().getFullYear();
const author = "Yan Penalva";
</script>

<template>
  <div class="flex flex-col items-center justify-between gap-2 py-6 font-sans text-sm text-muted sm:flex-row">
    <p>
      &copy; {{ copyrightDate }} - {{ t("footer.developedBy") }}
      <a href="https://www.linkedin.com/in/yanpenalva/" target="_blank" rel="noopener noreferrer" class="font-medium text-accent hover:underline">{{ author }}</a>
    </p>
    <p>v1.0.0</p>
  </div>
</template>
