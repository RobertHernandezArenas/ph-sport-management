import { createI18n } from 'vue-i18n';
import { languagesAvailables } from '../languages';

const userLang = () => {
	const langBrowser = navigator.language.replace(/-[A-Z]{2}$/, '');

	let defaultLang = langBrowser;
	const languagesAvailables = ['es', 'en', 'it', 'fr', 'de']; // obtener el idioma del navegador del usuario
	return languagesAvailables.find(lang => {
		if (langBrowser === lang) {
			return lang;
		}
		return defaultLang;
	});
};

const messages = {
	...languagesAvailables.es, // establece los mensajes para cada idioma
	...languagesAvailables.en,
	...languagesAvailables.it,
	...languagesAvailables.fr,
	...languagesAvailables.de,
};

export const i18n = createI18n({
	legacy: false,
	locale: userLang(),
	fallbackLocale: 'es' || 'en',
	globalInjection: true,
	messages,
});

export default i18n;
