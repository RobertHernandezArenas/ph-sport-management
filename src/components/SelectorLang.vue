<template>
	<div
		class="language-selector"
		@click="toggleOptions"
		:class="{ open: isOpen }"
	>
		<span class="selected"
			><img :src="selectedFlag" class="flag" /> {{ selectedLanguage }}</span
		>
		<div class="options">
			<a
				v-for="option in options"
				:key="option.value"
				:data-value="option.value"
				@click.prevent="
					handleSelectLanguage(option.value, option.text, option.flag)
				"
			>
				<img :src="option.flag" class="flag" />
				<span>{{ option.text }}</span>
			</a>
		</div>
	</div>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const selectedLanguage = ref('Choose a language');
const selectedFlag = ref(locale.value);
const selectedLanguageAndFlag = ref({});

const options = [
	{
		value: 'spanish',
		text: 'ES',
		flag: '/images/flags/spanish.png',
	},
	{
		value: 'english',
		text: 'EN',
		flag: '/images/flags/english.png',
	},
	{
		value: 'french',
		text: 'FR',
		flag: '/images/flags/french.png',
	},
	{
		value: 'italian',
		text: 'IT',
		flag: '/images/flags/italian.png',
	},
	{
		value: 'deutsch',
		text: 'DE',
		flag: '/images/flags/deutsch.png',
	},
];
const isOpen = ref(false);

function toggleOptions() {
	isOpen.value = !isOpen.value;
}

function handleSelectLanguage(value, label, flag) {
	
	selectedLanguage.value = label;
    locale.value = selectedLanguage.value.toLocaleLowerCase();
	selectedFlag.value = flag;
	selectedLanguageAndFlag.value = { language: selectedLanguage.value, flag: selectedFlag.value };
	localStorage.setItem('selectedLanguageAndFlag', JSON.stringify(selectedLanguageAndFlag.value));
}

watchEffect(() => {
	selectedLanguageAndFlag.value = JSON.parse(localStorage.getItem('selectedLanguageAndFlag'));
	if (selectedLanguageAndFlag.value) {
		selectedLanguage.value = selectedLanguageAndFlag.value.language;
		selectedFlag.value = selectedLanguageAndFlag.value.flag;
		locale.value = selectedLanguage.value.toLocaleLowerCase();
	}
});

</script>

<style scoped>
.language-selector {
	background: #fff;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 190px;
}

.language-selector .selected {
	display: flex;
	border: 1px solid #ccc;
	cursor: pointer;
	padding: 1rem 2rem;
	width: 190px;
	justify-content: center;
	align-items: center;
}

.language-selector .selected img {
	width: 30px;
	height: 30px;
	margin-left: 10px;
}

.language-selector .options {
	position: absolute;
	top: 100%;
	left: 0;
	display: none;
	background-color: #fff;
	border: 1px solid #ccc;
	z-index: 1;
	width: -webkit-fill-available;
}

.language-selector .options a {
	display: flex;
	align-items: center;
	padding: 10px;
	cursor: pointer;
	text-decoration: none;
}

.language-selector .options a:hover {
	background-color: #ccc;
}

.flag,
.language-selector .options a img {
	width: 30px;
	height: 30px;
	margin: 0 10px;
}

.language-selector.open .options {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>
