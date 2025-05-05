<script setup>
import Title from '../components/Title.vue'
</script>

<template>
	<div
		class="hero flex flex-start flex-col min-h-screen m-auto w-full md:w-3/5 min-w-128 max-w-4xl p-6 bg-base-200 shadow-xl">

		<Title title="Trainingszeiten"></Title>

		<h2 class="hero-content text-2xl text-center m-2">Du möchtest Judo machen?</h2>

		<div class="divider"></div>

		<p class="m-4">
			Egal ob Anfänger oder Profi, ob Fitnessorientiert, Freizeitsportler oder Wettkampfathlet, ob jung oder
			alt.
			<br>
			<br>
			Komm einfach in eines unserer Trainings und probiere es kostenfrei aus. Du bist dir nicht sicher,
			welches
			Training geeignet ist? Dann schreibe einfach an  oder rufe  an.
			<br>
			Wir freuen uns auf dich!
		</p>

		<div class="divider"></div>

		<div class="overflow-x-auto w-full">
			<table class="table text-xs">
				<tr>
					<td colspan="5" class="text-2xl m-2">Montag</td>
				</tr>
				<tr class="bg-base-300">
					<td>Ort</td>
					<td>Training</td>
					<td>Uhrzeit</td>
					<td>Trainer</td>
					<td class="max-[960px]:hidden">
						<div class="avatar-group -space-x-6 rtl:space-x-reverse">
							<div class="avatar">
								<div class="w-12">
									<img src="/keinBild.png"></img>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>Ort</td>
					<td>Training</td>
					<td>Uhrzeit</td>
					<td>Trainer</td>
					<td class="max-[960px]:hidden">
						<div class="avatar-group -space-x-6 rtl:space-x-reverse">
							<div class="avatar">
								<div class="w-12">
									<img src="/keinBild.png"></img>
								</div>
							</div>
							<div class="avatar">
								<div class="w-12">
									<img src="/sRichard.jpeg"></img>
								</div>
							</div>
							<div class="avatar">
								<div class="w-12">
									<img src="/keinBild.png"></img>
								</div>
							</div>
						</div>
					</td>
				</tr>

				<tr>
					<td colspan="5" class="text-2xl m-2">Mittwoch</td>
				</tr>
				<tr class="bg-base-300">
					<td>Ort</td>
					<td>Training</td>
					<td>Uhrzeit</td>
					<td>Trainer</td>
					<td class="max-[960px]:hidden">
						<div class="avatar-group -space-x-6 rtl:space-x-reverse">
							<div class="avatar">
								<div class="w-12">
									<img src="/cBickenbach.jpg"></img>
								</div>
							</div>
							<div class="avatar">
								<div class="w-12">
									<img src="/sBallenberger.jpg"></img>
								</div>
							</div>
							<div class="avatar">
								<div class="w-12">
									<img src="/keinBild.png"></img>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td colspan="5" class="text-2xl m-2">Donnerstag</td>
				</tr>
				<tr class="bg-base-300">
					<td>Ort</td>
					<td>Training</td>
					<td>Uhrzeit</td>
					<td>Trainer</td>
					<td class="max-[960px]:hidden">
						<div class="avatar-group -space-x-6 rtl:space-x-reverse">
							<div class="avatar">
								<div class="w-12">
									<img src="/kChristner.jpg"></img>
								</div>
							</div>
							<div class="avatar">
								<div class="w-12">
									<img src="/keinBild.png"></img>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>Ort</td>
					<td>Training</td>
					<td>Uhrzeit</td>
					<td>Trainer</td>
					<td class="max-[960px]:hidden">
						<div class="avatar-group -space-x-6 rtl:space-x-reverse">
							<div class="avatar">
								<div class="w-12">
									<img src="/hChristner.jpg"></img>
								</div>
							</div>
							<div class="avatar">
								<div class="w-12">
									<img src="/kChristner.jpg"></img>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td colspan="5" class="text-2xl m-2">Freitag</td>
				</tr>
				<tr class="bg-base-300">
					<td>Ort</td>
					<td>Training</td>
					<td>Uhrzeit</td>
					<td>Trainer</td>
					<td class="max-[960px]:hidden">
						<div class="avatar-group -space-x-6 rtl:space-x-reverse">
							<div class="avatar">
								<div class="w-12">
									<img src="/cBickenbach.jpg"></img>
								</div>
							</div>
							<div class="avatar">
								<div class="w-12">
									<img src="/lMeinhold.jpg"></img>
								</div>
							</div>
							<div class="avatar">
								<div class="w-12">
									<img src="/keinBild.png"></img>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>Ort</td>
					<td>Training</td>
					<td>Uhrzeit</td>
					<td>Trainer</td>
					<td class="max-[960px]:hidden">
						<div class="avatar-group -space-x-6 rtl:space-x-reverse">
							<div class="avatar">
								<div class="w-12">
									<img src="/cBickenbach.jpg"></img>
								</div>
							</div>
							<div class="avatar">
								<div class="w-12">
									<img src="/lMeinhold.jpg"></img>
								</div>
							</div>
						</div>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<style scoped></style>