<script setup>
defineProps({
	project: { type: Object, required: true },
});
</script>

<template>
	<a :href="project.href" target="_blank" rel="noopener noreferrer"
		class="rounded-2xl shadow-lg shadow-black hover:shadow-2xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark shadow-white"
		aria-label="Single Project">
		<div>
			<img :src="project.img" :alt="project.title" loading="lazy" width="400" height="225" class="rounded-t-xl border-none w-full object-cover" />
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ project.title }}
			</p>
			<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{ project.category }}</span>

		</div>
		<span class="font-general-medium text-base p-4 text-ternary-dark dark:text-ternary-light">{{ project.description
		}}</span>
	</a>
</template>

<style lang="scss" scoped>

</style>
