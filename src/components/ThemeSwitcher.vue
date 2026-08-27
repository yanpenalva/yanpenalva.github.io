<script setup>
import IconMoon from "@/components/icons/IconMoon.vue";
import IconSun from "@/components/icons/IconSun.vue";
import { useTheme } from "@/composables/useTheme";
import { computed } from "vue";

const props = defineProps({ theme: { type: String, required: true } });
const emit = defineEmits(["themeChanged"]);
const { toggleTheme: toggle } = useTheme();

const isLight = computed(() => props.theme === "light");
function toggleTheme() {
  toggle();
  emit("themeChanged", isLight.value ? "dark" : "light");
}
</script>

<template>
  <button type="button" @click="toggleTheme" aria-label="Toggle theme">
    <IconMoon v-if="isLight" :size="20" class="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light" />
    <IconSun v-else :size="20" class="text-gray-200 hover:text-gray-50" />
  </button>
</template>
