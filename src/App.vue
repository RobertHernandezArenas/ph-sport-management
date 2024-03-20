<script setup>
import { RouterView } from 'vue-router';
import SelectorLang from './components/SelectorLang.vue';

</script>

<template>
  <h1 class="animate animate__bounce">PH Sport Management</h1>
<SelectorLang />

  <span>{{ $t('home.newsletter.title') }}</span>
	<RouterView />
</template>

<style scoped></style>
