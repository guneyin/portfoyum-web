import preprocess from "svelte-preprocess";
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        vite: {
            resolve: {
                alias: {
                    '@lib': path.resolve('./src/lib'),
                    '@stores': path.resolve('./src/stores'),
                    '@api': path.resolve('./src/api'),
                }
            }
        }
	},

    preprocess: [preprocess({
        postcss: true
    })]
};

export default config;
