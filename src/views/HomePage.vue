<script setup>
import AppBanner from "@/components/shared/AppBanner.vue";
import FeaturedBento from "@/components/home/FeaturedBento.vue";
import HomeMetrics from "@/components/home/HomeMetrics.vue";
import AIOSSStrip from "@/components/home/AIOSSStrip.vue";
import ExperienceTimeline from "@/components/home/ExperienceTimeline.vue";
import AboutClients from "@/components/about/AboutClients.vue";
import ContactCTA from "@/components/home/ContactCTA.vue";
</script>

<template>
  <main class="mx-auto w-full max-w-[1160px] space-y-14 px-4 py-8 sm:space-y-20 sm:px-6 sm:py-12 lg:space-y-24">
    <AppBanner />
    <HomeMetrics />
    <FeaturedBento />
    <AIOSSStrip />
    <ExperienceTimeline />
    <AboutClients />
    <ContactCTA />
  </main>
</template>
