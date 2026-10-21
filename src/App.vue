<script setup>
import AppFooter from "@/components/shared/AppFooter.vue";
import AppHeader from "@/components/shared/AppHeader.vue";
import { useTheme } from "@/composables/useTheme";
import { useLocale } from "@/composables/useLocale";
import { useMotionPreference } from "@/composables/useMotionPreference";

const { theme } = useTheme();
const { t } = useLocale();
const { reducedMotion } = useMotionPreference();
</script>

<template>
  <div :class="theme" class="font-sans antialiased">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-on-accent">{{ t("common.skipToContent") }}</a>
    <AppHeader />
    <router-view v-slot="{ Component }">
      <Transition name="route" mode="out-in" :css="!reducedMotion">
        <component :is="Component" :key="$route.path" :theme="theme" />
      </Transition>
    </router-view>
    <AppFooter />
  </div>
</template>
