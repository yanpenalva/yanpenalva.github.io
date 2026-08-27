<script setup>
import ProjectsFilter from "@/components/projects/ProjectsFilter.vue";
import ProjectSingle from "@/components/projects/ProjectSingle.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import projectsData from "@/data/projects";
import { computed, ref } from "vue";

const projects = ref(projectsData);
const projectsHeading = ref("Projects");
const selectedCategory = ref("");
const searchProject = ref("");

const filteredProjects = computed(() => {
  let result = projects.value;
  if (selectedCategory.value) {
    result = result.filter((item) => item.category === selectedCategory.value);
  }
  if (searchProject.value.trim()) {
    const q = searchProject.value.toLowerCase();
    result = result.filter((el) => el.title.toLowerCase().includes(q));
  }
  return result;
});
</script>

<template>
  <section class="text-center mt-10">
    <a href="https://github.com/yanpenalva" target="_blank" rel="noopener noreferrer" class="font-general-medium text-md sm:text-xl text-primary-dark dark:text-ternary-light">More projects: <span class="font-semibold">GitHub Yan Penalva</span></a>
  </section>

  <section class="pt-10 sm:pt-14">
    <div class="text-center">
      <p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">{{ projectsHeading }}</p>
    </div>

    <div class="mt-10 sm:mt-10">
      <h3 class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4">Search projects by title or filter by category</h3>
      <div class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2">
        <div class="flex justify-between gap-2">
          <span class="hidden sm:flex items-center justify-center bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
            <IconSearch :size="18" class="text-ternary-dark dark:text-ternary-light" />
          </span>
          <input v-model="searchProject" class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light" id="search-projects" name="search" type="search" placeholder="Search Projects" aria-label="Search Projects" />
        </div>
        <ProjectsFilter select="projects" @filter="selectedCategory = $event" />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle v-for="project in filteredProjects" :key="project.id" :project="project" />
    </div>
    <p v-if="filteredProjects.length === 0" class="mt-10 text-ternary-dark dark:text-ternary-light">No projects found.</p>
  </section>
</template>
