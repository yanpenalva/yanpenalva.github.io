<script setup>
import profileImage from "@/assets/images/profile.jpeg";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <div v-reveal class="flex flex-col items-center gap-8 md:flex-row md:items-start">
    <img
      :src="profileImage"
      alt="Yan Penalva"
      class="h-48 w-48 shrink-0 rounded-2xl object-cover"
    />
    <div class="flex flex-col gap-4 text-left">
      <p class="text-lg leading-relaxed text-text">{{ t("about.bio1") }}</p>
      <p class="text-lg leading-relaxed text-text">{{ t("about.bio2") }}</p>
      <p class="text-lg leading-relaxed text-text">{{ t("about.bio3") }}</p>
    </div>
  </div>
</template>
