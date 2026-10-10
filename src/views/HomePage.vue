<script setup>
import AppBanner from "@/components/shared/AppBanner.vue";
import FeaturedBento from "@/components/home/FeaturedBento.vue";
import HomeMetrics from "@/components/home/HomeMetrics.vue";
import ExperienceTimeline from "@/components/home/ExperienceTimeline.vue";
import AboutClients from "@/components/about/AboutClients.vue";
import ContactCTA from "@/components/home/ContactCTA.vue";
</script>

<template>
  <div class="mx-auto max-w-5xl space-y-16 px-4 py-8">
    <AppBanner />
    <FeaturedBento />
    <HomeMetrics />
    <ExperienceTimeline />
    <AboutClients />
    <ContactCTA />
  </div>
</template>
