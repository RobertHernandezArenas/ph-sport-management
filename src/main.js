import './assets/main.css';
import 'animate.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS JavaScript
AOS.init()

import i18n from '@/locales/i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

const app = createApp(App);

app.use(createPinia()).use(router).use(i18n).mount('#app');
import 'bootstrap/dist/js/bootstrap.min';
