<script setup>
import { computed, ref } from "vue";
import projectsData from "@/data/projects";
import { useLocale } from "@/composables/useLocale";

defineProps({
  select: { type: String, default: "projects" },
});

const emit = defineEmits(["filter"]);
const { t } = useLocale();

const selected = ref("");

const categories = computed(() => {
  const unique = [];
  for (const project of projectsData) {
    if (project.category && !unique.includes(project.category)) {
      unique.push(project.category);
    }
  }
  return unique;
});

const onChange = (event) => {
  emit("filter", event.target.value);
};
</script>

<template>
  <select
    :id="select"
    :name="select"
    :aria-label="t('projects.filterLabel')"
    v-model="selected"
    class="rounded-lg border border-border bg-surface px-3 py-2 font-sans text-sm text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    @change="onChange"
  >
    <option value="">{{ t("projects.allLabel") }}</option>
    <option v-for="category in categories" :key="category" :value="category">
      {{ t("projects.categories." + category) }}
    </option>
  </select>
</template>
