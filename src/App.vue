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
      <Transition name="route" mode="out-in">
        <component :is="Component" :key="$route.path" :theme="theme" />
      </Transition>
    </router-view>
    <AppFooter />
  </div>
</template>
