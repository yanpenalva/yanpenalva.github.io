<script setup>
import IconMoon from "@/components/icons/IconMoon.vue";
import IconSun from "@/components/icons/IconSun.vue";
import { useTheme } from "@/composables/useTheme";
import { useLocale } from "@/composables/useLocale";
import { computed } from "vue";

const props = defineProps({ theme: { type: String, required: true } });
const emit = defineEmits(["themeChanged"]);
const { toggleTheme: toggle } = useTheme();
const { t } = useLocale();

const isLight = computed(() => props.theme === "light");
function toggleTheme() {
  toggle();
  emit("themeChanged", isLight.value ? "dark" : "light");
}
</script>

<template>
  <button
    type="button"
    @click="toggleTheme"
    :aria-pressed="!isLight"
    :aria-label="t('common.toggleTheme')"
    class="text-muted transition-colors duration-150 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
  >
    <IconMoon v-if="isLight" :size="20" aria-hidden="true" />
    <IconSun v-else :size="20" aria-hidden="true" />
  </button>
</template>
