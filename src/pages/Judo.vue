<script setup>
import Title from '../components/Title.vue'
</script>

<template>
	<div
		class="hero flex flex-start flex-col min-h-screen m-auto w-full md:w-3/5 min-w-128 max-w-4xl p-6 bg-base-200 shadow-xl">

		<Title title="Judo"></Title>

		<h2 class="hero-content text-2xl text-center m-2">Was ist Judo?</h2>

		<div class="divider"></div>

		<div class="flex flex-row">
			<img src="/judo.png" alt="japanische Schriftzeichen für Judo" class="m-4 mx-20 max-[960px]:hidden">
			<p class="m-4">
				Judo bedeutet "der sanfte Weg" und ist eine Kampfsportart aus Japan, gegründet von Jigoro Kano
				(1860-1938)
				<br> <br>
				Das Judo-Prinzip = Siegen durch Nachgeben bzw. maximale Wirkung bei minimalem Aufwand <br>
				Kata = traditioneller Formenlauf <br>
				Randori = Übungskampf Shiai = Wettkampf <br>
				Dojo = Die Trainingshalle <br>
				Tatami = Die Judomatte <br>
				Gi = Der Judoanzug <br>
				Hajime = jap. für "Anfang", Beginnen, Kommando zum Start eines Kampfes
			</p>
		</div>
	</div>
</template>

<style scoped></style>