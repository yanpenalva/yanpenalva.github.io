<script setup>
import IconLink2 from "@/components/icons/IconLink2.vue";
import { ref } from "vue";

const businessProjects = ref([
  { id: 1, title: "SISPPPG", description: "System for managing graduate programs and research projects, similar to SISTEX but focused on academic programs and project tracking.", role: "System Architect / Senior Software Engineer / DevOps", tech: "Laravel, Vue 3, PostgreSQL, Redis", reference: "sispppg.uefs.br" },
  { id: 2, title: "SISTEX", description: "University Extension System. Manages projects, plans and activity reports.", role: "System Architect / Senior Software Engineer / DevOps", tech: "Laravel, Vue 3, PostgreSQL, Redis", reference: "sistex.uefs.br" },
  { id: 3, title: "SIPAE", description: "Integrated Student Aid System. Manages scholarships and student benefits.", role: "System Architect / Senior Software Engineer / DevOps", tech: "Laravel, Vue 3, PostgreSQL, Redis, Docker", reference: "sipae.uefs.br" },
  { id: 4, title: "SIDOC", description: "Document management and administrative workflow system.", role: "Senior Software Engineer / DevOps", tech: "Laravel, Vue 3, PostgreSQL", reference: "sidoc.uefs.br" },
  { id: 5, title: "SIGRH", description: "Human Resources Management System for academic and technical staff.", role: "Senior Software Engineer / DevOps", tech: "Laravel, Vue 3, PostgreSQL", reference: "sigrh.uefs.br" },
  { id: 6, title: "SIAC", description: "Academic and Cultural Activities System. Manages public courses, workshops and events offered by the university.", role: "Senior Software Engineer / DevOps", tech: "Laravel, Blade, SQL Server", reference: "siac.uefs.br" },
  { id: 7, title: "SGP", description: "Institutional Project Management System.", role: "Senior Software Engineer / DevOps", tech: "Laravel, Blade, SQL Server", reference: "Internal system (no public URL)" },
]);

const infraProjects = ref([
  { id: 1, title: "Institutional Login Platform", description: "Implemented the university's unified authentication service, enabling login through institutional credentials and centralized access control across all systems.", role: "System Architect / Senior Software Engineer", tech: "OAuth2, Laravel, Vue 3, SSO, Keycloak" },
  { id: 2, title: "SAC Bahia API Orchestration", description: "Participated in the development of APIs and orchestration layer that manage appointments and services for the SAC Bahia network (Prodeb).", role: "Backend Engineer / API Specialist", tech: "Node.js, Express, PostgreSQL, Redis, Kubernetes" },
  { id: 3, title: "FUNDEF Court-Ordered Payments System", description: "Developed and supported the management of FUNDEF precatory payments for the State of Bahia, ensuring transparency and compliance in resource allocation.", role: "Backend Engineer / Data Integration Specialist", tech: "Laravel, PostgreSQL, REST APIs, Data Pipelines" },
  { id: 4, title: "CI/CD Pipelines Modernization", description: "Created and modernized Jenkins and GitLab CI pipelines to automate deployment, testing, and code quality checks across multiple projects.", role: "DevOps Engineer", tech: "Jenkins, GitLab CI, Docker, SonarQube, Shell scripting" },
  { id: 5, title: "Internal Container Registry Implementation", description: "Designed and deployed internal container registries using Harbor to manage and secure Docker images within the organization’s infrastructure.", role: "DevOps Engineer / System Administrator", tech: "Harbor, Docker, Nginx, LDAP, SSL" },
]);
</script>

<template>
  <section class="pt-10 sm:pt-14">
    <div class="text-center">
      <p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">Enterprise Projects</p>
      <h3 class="font-general-regular text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4">Enterprise systems currently in production</h3>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <div v-for="project in businessProjects" :key="project.id" class="group relative rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 bg-secondary-light dark:bg-ternary-dark p-6 transform hover:-translate-y-1">
        <h3 class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light mb-2">{{ project.title }}</h3>
        <p class="font-general-medium text-base text-primary-dark dark:text-ternary-light mb-4">{{ project.description }}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-1"><span class="font-semibold">Role:</span><br />{{ project.role }}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-1"><span class="font-semibold">Tech:</span><br />{{ project.tech }}</p>
        <div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm text-indigo-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl">
          <IconLink2 :size="16" class="inline mr-2" />{{ project.reference }}
        </div>
      </div>
    </div>

    <div class="mt-20 text-center">
      <p class="font-general-semibold text-2xl sm:text-4xl font-semibold mb-4 text-ternary-dark dark:text-ternary-light">Infrastructure &amp; API Projects</p>
      <h3 class="font-general-regular text-secondary-dark dark:text-ternary-light text-md sm:text-lg font-normal mb-10">Key contributions to system modernization, authentication, and API orchestration</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
        <div v-for="project in infraProjects" :key="project.id" class="rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 bg-secondary-light dark:bg-ternary-dark p-6 transform hover:-translate-y-1">
          <h3 class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light mb-2">{{ project.title }}</h3>
          <p class="font-general-medium text-base text-primary-dark dark:text-ternary-light mb-4">{{ project.description }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-1"><span class="font-semibold">Role:</span><br />{{ project.role }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-1"><span class="font-semibold">Tech:</span><br />{{ project.tech }}</p>
        </div>
      </div>
    </div>

    <div class="mt-24 text-center max-w-4xl mx-auto">
      <p class="font-general-semibold text-2xl sm:text-3xl text-ternary-dark dark:text-ternary-light mb-4">Beyond the listed projects</p>
      <p class="font-general-regular text-base sm:text-lg text-secondary-dark dark:text-ternary-light leading-relaxed">The projects shown here represent only a small part of my professional journey. Over the years, I have contributed to several enterprise systems and infrastructure initiatives, always focusing on performance, maintainability, and fast, high-quality delivery.</p>
      <p class="font-general-regular text-base sm:text-lg text-secondary-dark dark:text-ternary-light leading-relaxed mt-4">For a complete overview of my experience, you can download my <router-link to="/" class="text-indigo-500 hover:text-indigo-400 font-semibold transition-colors">resume here</router-link>. You can also reach out through my <span class="text-indigo-500 font-semibold">social media</span> to discuss projects, collaborations, or more technical details.</p>
      <p class="font-general-regular text-base sm:text-lg text-secondary-dark dark:text-ternary-light leading-relaxed mt-4">I value professionalism, clear communication, and clean architecture. My goal is always to deliver solutions that balance speed, reliability, and technical excellence.</p>
    </div>
  </section>
</template>
