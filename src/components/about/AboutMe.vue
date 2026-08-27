<script setup>
const bios = [
  { id: 1, bio: "I am a Software Engineer with a passion for web development, specializing in creating robust, scalable, and user-friendly web applications. As a self-motivated and self-taught professional, I bring a strong work ethic and a track record of delivering high-quality software solutions. My approach combines continuous learning, team collaboration, and a commitment to diversity and inclusion. I excel in problem-solving and a critical thinking. My fast learning and adaptability enable me to embrace new challenges enthusiastically. I am an advocate for open-source software, the open web, and leveraging technology to address real-world issues. I firmly believe in technology's potential to enhance quality of life, promote social justice, and forge a sustainable, equitable future for all." },
  { id: 2, bio: "As a seasoned Software Engineer, I am adept at navigating the complete system lifecycle. My expertise encompasses maintaining production systems, spearheading new projects, conducting meticulous requirements analysis, crafting comprehensive technical documentation, and managing version control. Proficient in English, I am committed to enhancing my skills daily, striving for a 1% improvement with each passing day. My repertoire includes robust problem-solving abilities and sharp critical thinking aimed at devising effective solutions. Thanks to my extensive experience with a diverse array of tools, technologies, and methodologies, I am well-equipped to deliver superior-quality software solutions." },
];
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpeg" class="rounded-xl w-96" alt="Yan Penalva profile photo" width="384" height="384" loading="eager" />
    </div>
    <div class="w-full sm:w-3/4 text-left">
      <p v-for="bio in bios" :key="bio.id" class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">{{ bio.bio }}</p>
    </div>
  </div>
</template>
