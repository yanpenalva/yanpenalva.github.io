<script setup>
import AppHeaderLinks from "@/components/shared/AppHeaderLinks.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { useTheme } from "@/composables/useTheme";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const { theme, setTheme } = useTheme();
const isOpen = ref(false);
const route = useRoute();

watch(() => route.path, () => { isOpen.value = false; });

function updateTheme(t) { setTheme(t); }
</script>

<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
      <div class="flex justify-between items-center px-4 sm:px-0">
        <router-link to="/" class="font-general-medium block text-left text-2xl font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">Home</router-link>
        <ThemeSwitcher :theme="theme" @themeChanged="updateTheme" class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg" />
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" class="focus:outline-none" :aria-expanded="isOpen.toString()" aria-controls="mobile-menu" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clip-rule="evenodd"></path>
              <path v-else fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <AppHeaderLinks id="mobile-menu" :isOpen="isOpen" />
      <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
        <ThemeSwitcher :theme="theme" @themeChanged="updateTheme" class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" />
      </div>
    </div>
  </nav>
</template>
