<script setup>
import Title from '../components/Title.vue'
</script>

<template>
	<div
		class="hero flex flex-start flex-col min-h-screen m-auto w-full md:w-3/5 min-w-128 max-w-4xl p-6 bg-base-200 shadow-xl">

		<Title title="Kontakt"></Title>

		<h2 class="hero-content text-2xl text-center m-2">Kontaktformular</h2>
		<div class="divider"></div>

		<input type="text" placeholder="Name" class="input input-bordered w-full max-w-144 m-2" />

		<input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-144 m-2" />

		<textarea class="textarea textarea-bordered w-full max-w-144 m-2" placeholder="Nachricht"></textarea>

		<button class="btn btn-primary m-2">Absenden</button>
	</div>
</template>

<style scoped></style>