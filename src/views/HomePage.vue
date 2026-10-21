<script setup>
import AppBanner from "@/components/shared/AppBanner.vue";
import HeroPanel from "@/components/home/HeroPanel.vue";
import FeaturedBento from "@/components/home/FeaturedBento.vue";
import ResultCases from "@/components/home/ResultCases.vue";
import HomeMetrics from "@/components/home/HomeMetrics.vue";
import AIOSSStrip from "@/components/home/AIOSSStrip.vue";
import ExperienceTimeline from "@/components/home/ExperienceTimeline.vue";
import ContactCTA from "@/components/home/ContactCTA.vue";
</script>

<template>
  <main id="main-content" class="mx-auto w-full max-w-[1160px] space-y-14 px-4 py-8 sm:space-y-20 sm:px-6 sm:py-12 lg:space-y-24">
    <div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <AppBanner />
      <HeroPanel />
    </div>
    <HomeMetrics />
    <FeaturedBento />
    <ResultCases />
    <AIOSSStrip />
    <ExperienceTimeline />
    <ContactCTA />
  </main>
</template>
