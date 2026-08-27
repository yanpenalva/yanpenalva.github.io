<script setup>
import FooterCopyright from "@/components/shared/FooterCopyright.vue";
import IconBook from "@/components/icons/IconBook.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconMessageCircle from "@/components/icons/IconMessageCircle.vue";

const socials = [
  { id: 1, name: "GitHub", icon: IconGithub, url: "https://github.com/yanpenalva" },
  { id: 2, name: "Medium", icon: IconBook, url: "https://medium.com/@yanpenabr" },
  { id: 3, name: "Instagram", icon: IconInstagram, url: "https://instagram.com/yanbpenalva" },
  { id: 4, name: "Linkedin", icon: IconLinkedin, url: "https://www.linkedin.com/in/yanpenalva/" },
  { id: 5, name: "WhatsApp", icon: IconMessageCircle, url: "https://wa.me/+5571992432603" },
];
</script>

<template>
  <div class="container mx-auto">
    <div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <ul class="flex gap-4 sm:gap-8">
          <li v-for="social in socials" :key="social.id">
            <a :href="social.url" target="_blank" rel="noopener noreferrer" :aria-label="social.name" class="flex text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500">
              <component :is="social.icon" :size="20" class="w-5 sm:w-8 h-5 sm:h-8" />
            </a>
          </li>
        </ul>
      </div>
      <FooterCopyright />
    </div>
  </div>
</template>
