<script setup>
import { useTheme } from "@/composables/useTheme";
const { theme } = useTheme();
const resumeEnUrl = "/files/Yan_Penalva_Resume_EN.pdf";
const resumePtUrl = "/files/Yan_Penalva_Curriculo_PTBR.pdf";
</script>

<template>
  <section class="hero-section">
    <div class="hero-left">
      <h1 class="hero-title">Yan Penalva</h1>
      <p class="hero-subtitle">Software Engineer</p>
      <div class="center-sm-block">
        <a download="Yan_Penalva_Curriculo_PTBR.pdf" :href="resumePtUrl" class="my-btn" aria-label="Download Resume (PT-BR)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-inline" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v8.69l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L8.72 10.28a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Zm-8.25 12a.75.75 0 0 1 .75.75V18A2.25 2.25 0 0 0 7.5 20.25h9A2.25 2.25 0 0 0 18.75 18v-3a.75.75 0 0 1 1.5 0v3A3.75 3.75 0 0 1 16.5 21.75h-9A3.75 3.75 0 0 1 3.75 18v-3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" /></svg>
          <span class="btn-text">Resume(PT-BR)</span>
        </a>
      </div>
      <div class="center-sm-block">
        <a download="Yan_Penalva_Resume_EN.pdf" :href="resumeEnUrl" class="my-btn" aria-label="Download Resume (EN-US)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-inline" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v8.69l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L8.72 10.28a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Zm-8.25 12a.75.75 0 0 1 .75.75V18A2.25 2.25 0 0 0 7.5 20.25h9A2.25 2.25 0 0 0 18.75 18v-3a.75.75 0 0 1 1.5 0v3A3.75 3.75 0 0 1 16.5 21.75h-9A3.75 3.75 0 0 1 3.75 18v-3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" /></svg>
          <span class="btn-text">Resume(EN-US)</span>
        </a>
      </div>
    </div>
    <div class="hero-image-wrap">
      <img v-if="theme === 'light'" src="@/assets/images/logo-white.png" alt="Developer" width="600" height="400" loading="eager" />
      <img v-else src="@/assets/images/logo-dark.png" alt="Developer" width="600" height="400" loading="eager" />
    </div>
  </section>
</template>

<style scoped>
.hero-section { @apply flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10; }
.hero-left { @apply w-full md:w-1/3 text-left; }
.hero-title { @apply font-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase whitespace-nowrap; }
.hero-subtitle { @apply font-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400; }
.center-sm-block { @apply flex justify-center sm:block; }
.my-btn { @apply inline-flex items-center justify-center gap-2 w-56 sm:w-52 mt-8 mb-4 sm:mb-0 px-4 py-3 text-base leading-6 font-medium border border-indigo-200 dark:border-ternary-dark bg-indigo-50 text-gray-700 rounded-lg shadow-lg hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-1 focus:ring-indigo-900 transition; }
.icon-inline { @apply h-5 w-5 -mt-px shrink-0; }
.btn-text { @apply truncate; }
.hero-image-wrap { @apply w-full md:w-2/3 text-right float-right; }
</style>
