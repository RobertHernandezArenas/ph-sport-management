import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VueDevTools()
	],
	server: {
		port: 3000,
		compression: true,
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	vueCompilerOptions: {
		productionMode: true,
	},
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			input: 'index.html',
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`,
				manualChunks: { vue: ['vue'] },
			},
		},
		// habilitar la generación de service workers
		sourcemap: true,
		assetsInlineLimit: 4096,
		chunkSizeWarningLimit: 1500,
		manifest: true,
		outDir: 'dist',
	},
});
