<script setup>
const props = defineProps(['title'])
</script>

<template>
	<h1 class="hero-content text-5xl font-bold bg-base-100 m-6 mt-24 h-60 w-full flex flex-row flex-start rounded-2.5xl"
		style="background-image: url('/jcffb-test/titel.jpg'); background-size: cover;">
		<img width="200" height="200" src="/logo.png" class="fill-current m-2 drop-shadow-2xl fit"></img>
		<p class="flex-auto text-center m-2 text-slate-100 max-[960px]:text-3xl" lang="de">{{ title }}</p>
	</h1>
</template>

<style scoped></style>