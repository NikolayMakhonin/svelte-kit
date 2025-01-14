import adapter from '../../../../adapter-static/index.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),

		prerender: {
			default: true
		},

		trailingSlash: 'always'
	}
};

export default config;
