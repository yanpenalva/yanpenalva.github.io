<script setup>
import AppFooter from "@/components/shared/AppFooter.vue";
import AppHeader from "@/components/shared/AppHeader.vue";
import { useTheme } from "@/composables/useTheme";

const { theme } = useTheme();
</script>

<template>
  <div :class="theme" class="font-sans antialiased">
    <AppHeader />
    <router-view v-slot="{ Component }">
      <component :is="Component" :theme="theme" />
    </router-view>
    <AppFooter />
  </div>
</template>
