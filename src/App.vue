<script setup>
// importieren aller Komponenten
import Start from './pages/Start.vue';
import Judo from './pages/Judo.vue';
import Trainings from './pages/Trainings.vue';
import News from './pages/News.vue';
import Personen from './pages/Personen.vue';
import Kontakt from './pages/Kontakt.vue';
import Termine from './pages/Termine.vue';
import GJudo from './pages/GJudo.vue';
import Satzung from './pages/Satzung.vue';
import Impressum from './pages/Impressum.vue';
import Datenschutz from './pages/Datenschutz.vue';
import Formulare from './pages/Formulare.vue';
</script>

<script>
export default {
	data() {
		return {
			// definieren aller Variablen
			page: 0,
		}
	},

	methods: {
		// definieren aller Methoden
		goStart() {
			this.page = 0
			console.log("Start " + this.page)
			window.scrollTo(0, 0);
		},

		goJudo() {
			this.page = 1
			console.log("Judo " + this.page)
			window.scrollTo(0, 0);
		},

		goTrainings() {
			this.page = 2
			console.log("Trainings " + this.page)
			window.scrollTo(0, 0);
		},

		goNews() {
			this.page = 3
			console.log("News " + this.page)
			window.scrollTo(0, 0);
		},

		goPersonen() {
			this.page = 4
			console.log("Personen " + this.page)
			window.scrollTo(0, 0);
		},

		goKontakt() {
			this.page = 5
			console.log("Kontakt " + this.page)
			window.scrollTo(0, 0);
		},

		goTermine() {
			this.page = 6
			console.log("Termine " + this.page)
			window.scrollTo(0, 0);
		},

		goGJudo() {
			this.page = 7
			console.log("G-Judo " + this.page)
			window.scrollTo(0, 0);
		},

		goSatzung() {
			this.page = 9
			console.log("Satzung " + this.page)
			window.scrollTo(0, 0);
		},

		goImpressum() {
			this.page = 10
			console.log("Impressum " + this.page)
			window.scrollTo(0, 0);
		},

		goDatenschutz() {
			this.page = 11
			console.log("Datenschutz " + this.page)
			window.scrollTo(0, 0);
		},

		goFormulare() {
			this.page = 12
			console.log("Formulare " + this.page)
			window.scrollTo(0, 0);
		},
	},

	pages: {
		// deffinieren aller Komponenten
		Start,
		Judo,
		Trainings,
		News,
		Personen,
		Kontakt,
		Termine,
		GJudo,
		Satzung,
		Impressum,
		Datenschutz,
		Formulare,
	},
}
</script>

<template>
	<div class="bg-fixed bg-cover min-h-screen width-full"
		style="background-image: url('/jcffb-test/background.jpg') ">

		<div class="navbar bg-base-100 fixed z-50 shadow-xl">
			<div class="flex-1">
				<a @click="goStart" lang="en" class="btn btn-ghost text-xl">Home</a>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal px-1">
					<li><a @click="goJudo">Judo</a></li>
					<li><a @click="goTrainings">Trainings</a></li>
					<li><a @click="goNews" lang="en">News</a></li>
					<li><a @click="goPersonen">Personen</a></li>
					<li><a @click="goKontakt">Kontakt</a></li>
				</ul>
			</div>
		</div>

		<Start v-if="page === 0" @goTrainings="goTrainings" />

		<Judo v-else-if="page === 1" />

		<Trainings v-else-if="page === 2" />

		<News v-else-if="page === 3" />

		<Personen v-else-if="page === 4" />

		<Kontakt v-else-if="page === 5" />

		<Termine v-else-if="page === 6" />

		<GJudo v-else-if="page === 7" />

		<Satzung v-else-if="page === 9" />

		<Impressum v-else-if="page === 10" />

		<Datenschutz v-else-if="page === 11" />

		<Formulare v-else-if="page === 12" />

		<footer class="footer p-10 bg-base-100 text-base-content shadow-xl">
			<aside>
				<img width="150" height="150" src="/logo.png" class="fill-current" @click="goStart"
					alt="Logo des JC FFB"></img>
				<p>Judoclub Fürstenfeldbruck e.V.<br>gegründet 1978</p>
			</aside>
			<nav>
				<h6 class="footer-title">Menü</h6>
				<p class="link link-hover" @click="goTermine">Termine</p>
				<p class="link link-hover" @click="goGJudo">G-Judo</p>
				<a class="link link-hover" href="https://www.bayernjudo.de/">Bayerischer Judoverband</a>
				<a class="link link-hover" href="https://www.judobund.de/">Deutscher Judo-Bund</a>
			</nav>
			<nav>
				<h6 class="footer-title">Kontakt</h6>
				<p>Telefon: -</p>
				<p>Mail: -</p>
				<a class="link link-hover"
					href="https://www.facebook.com/Judoclub-F%C3%BCrstenfeldbruck-eV-213666331982425">Facebook:
					Judoclub
					Fürstenfeldbruck e.V. </a>
				<a class="link link-hover" href="https://www.instagram.com/judoclub_ffb/">Instagramm:
					@judoclub_ffb</a>
			</nav>
			<nav>
				<h6 class="footer-title">Rechtliches</h6>
				<p class="link link-hover" @click="goSatzung">Satzung</p>
				<p class="link link-hover" @click="goImpressum">Impressum</p>
				<p class="link link-hover" @click="goDatenschutz">Datenschutz</p>
				<p class="link link-hover" @click="goFormulare">Formulare</p>
			</nav>
		</footer>
	</div>
</template>

<style scoped></style>
