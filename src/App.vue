<script setup>
import AppFooter from "@/components/shared/AppFooter.vue";
import AppHeader from "@/components/shared/AppHeader.vue";
import { useTheme } from "@/composables/useTheme";

const { theme } = useTheme();
</script>

<template>
  <div :class="theme" class="pt-0.5">
    <AppHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :theme="theme" />
      </transition>
    </router-view>
    <AppFooter />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.fade-enter-active { animation: coming 0.4s; animation-delay: 0.2s; opacity: 0; }
.fade-leave-active { animation: going 0.4s; }
@keyframes going { from { transform: translateX(0); } to { transform: translateX(-10px); opacity: 0; } }
@keyframes coming { from { transform: translateX(-10px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
</style>
