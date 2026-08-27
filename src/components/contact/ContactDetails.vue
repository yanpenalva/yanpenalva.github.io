<script setup>
import IconGithub from "@/components/icons/IconGithub.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconMapPin from "@/components/icons/IconMapPin.vue";

defineProps({ contacts: { type: Array, required: true } });

const iconMap = { "map-pin": IconMapPin, mail: IconMail, github: IconGithub, linkedin: IconLinkedin };
</script>

<template>
  <div class="w-full md:w-1/2">
    <div class="text-left max-w-xl px-6">
      <h2 class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">Contact details</h2>
      <ul class="font-general-regular">
        <li class="flex items-center" v-for="contact in contacts" :key="contact.id">
          <component :is="iconMap[contact.icon]" :size="20" class="text-gray-500 dark:text-gray-400 mr-4 shrink-0" />
          <a v-if="contact.href" :href="contact.href" :target="contact.href.startsWith('http') ? '_blank' : undefined" :rel="contact.href.startsWith('http') ? 'noopener noreferrer' : undefined" class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline">{{ contact.name }}</a>
          <span v-else class="text-lg mb-4 text-ternary-dark dark:text-ternary-light">{{ contact.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
