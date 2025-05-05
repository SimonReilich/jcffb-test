<script setup>
import Title from '../components/Title.vue'
</script>

<template>
	<div
		class="hero flex flex-start flex-col min-h-screen m-auto w-full md:w-3/5 min-w-128 max-w-4xl p-6 bg-base-200 shadow-xl">

		<Title title="Termine"></Title>

		<h2 class="hero-content text-2xl text-center m-2">anstehende Termine zu Projekten, Turnieren, etc.</h2>

		<div class="divider"></div>

		<div class="overflow-x-auto w-full">
			<table class="table table-zebra w-full">
				<tr class="bg-base-300">
					<td>Sa 23.03.</td>
					<td>Osterturnier Passau / Kampfrichterausbildung Trainer der Zukunft</td>
				</tr>
				<tr>
					<td>Do 04.04.</td>
					<td>Ferientraining 16:30 - 18:00 Uhr (für alle)</td>
				</tr>
				<tr class="bg-base-300">
					<td>Fr 12.04.</td>
					<td>Sportlerehrung der Stadt FFB (Annika Riebler & Louis Rudorf)</td>
				</tr>
				<tr>
					<td>Sa 20.04.</td>
					<td>Franz-Mayer-Turnier</td>
				</tr>
				<tr class="bg-base-300">
					<td>Fr 26.04.</td>
					<td>Volksfesteinzug FFB</td>
				</tr>
				<tr>
					<td>Sa 27.04.</td>
					<td>Oberbayerische Einzelmeisterschaft U11 (Holzkirchen)</td>
				</tr>
				<tr class="bg-base-300">
					<td>So 28.04.</td>
					<td>Oberbayerische Einzelmeisterschaft U15 (Moosburg)</td>
				</tr>
				<tr>
					<td>Sa 11.05.</td>
					<td>Südbayerische Einzelmeisterschaft U15</td>
				</tr>
				<tr class="bg-base-300">
					<td>Sa 08.06.</td>
					<td>Bayerische Einzelmeisterschaft U15</td>
				</tr>
				<tr>
					<td>Sa 13.07.</td>
					<td>Sommerfest (mit Übernachtung in der Halle)</td>
				</tr>
			</table>
		</div>

	</div>
</template>

<style scoped></style>