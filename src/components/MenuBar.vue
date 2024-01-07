<script setup>
import { toRefs } from 'vue';
const props = defineProps({
	config: {
		type: Object,
		default: () => {
			return {
				logo: {
					image: '/favicon/phsports-icon-logox100.png',
					title: 'PH Sport Management',
					subtitle: 'Sport Management',
					description: 'Icono de PH Sport Management',
				},
				links: [
					{ label: 'Home', title: 'Home', icon: null, children: [] },
					{
						label: 'Jugadores',
						title: 'Jugadores',
						icon: null,
						children: [],
					},
					{
						label: 'Servicios',
						title: 'Servicios',
						icon: null,
						children: [],
					},
					{ label: 'Equipo', title: 'Equipo', icon: null, children: [] },
					{
						label: 'Contacto',
						title: 'Contacto',
						icon: null,
						children: [],
					},
				],
			};
		},
	},
});

const { config } = toRefs(props);
</script>

<template>
	<nav class="ph-menu">
		<div class="ph-menu__logo-box">
			<img
				:src="config.logo.image"
				:alt="config.logo.description"
				:title="config.logo.description"
				class="ph-menu__logo"
			/>
		</div>
	</nav>
</template>

<style scoped>
.ph-menu {
}

.ph-menu__logo-box {
}

.ph-menu__logo {
}
</style>
