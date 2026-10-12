<script setup>
import { computed, ref } from "vue";
import ProjectsFilter from "@/components/projects/ProjectsFilter.vue";
import ProjectSingle from "@/components/projects/ProjectSingle.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import projectsData from "@/data/projects";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const selectedCategory = ref("");
const search = ref("");

const filteredProjects = computed(() => {
  const term = search.value.trim().toLowerCase();
  return projectsData.filter((project) => {
    if (selectedCategory.value !== "" && project.category !== selectedCategory.value) {
      return false;
    }
    if (term === "") {
      return true;
    }
    return (
      project.title.toLowerCase().includes(term) ||
      t("projects.items." + project.id + ".title").toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      t("projects.items." + project.id + ".description").toLowerCase().includes(term) ||
      (project.language || "").toLowerCase().includes(term)
    );
  });
});
</script>

<template>
  <section v-reveal class="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16">
    <div class="flex items-center justify-end gap-2 font-sans text-sm">
      <span class="text-muted">{{ t("projects.moreLabel") }}</span>
      <a
        href="https://github.com/yanpenalva"
        target="_blank"
        rel="noopener noreferrer"
        class="text-accent hover:underline"
      >GitHub</a>
    </div>
    <h2 class="text-center text-2xl font-semibold text-text">{{ t("projects.title") }}</h2>
    <p class="text-center text-muted">{{ t("projects.hint") }}</p>
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div class="flex flex-1 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
        <IconSearch class="h-4 w-4 shrink-0 text-muted" />
        <input
          v-model="search"
          type="search"
          :placeholder="t('projects.searchPlaceholder')"
          :aria-label="t('projects.searchAria')"
          class="w-full bg-transparent font-sans text-sm text-text placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      </div>
      <ProjectsFilter select="projects" @filter="selectedCategory = $event" />
    </div>
    <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="project in filteredProjects" :key="project.id" v-reveal class="h-full">
        <ProjectSingle :project="project" />
      </div>
    </div>
    <p v-else role="status" class="py-12 text-center text-muted">{{ t("projects.empty") }}</p>
  </section>
</template>
