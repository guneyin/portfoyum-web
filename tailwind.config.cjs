const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	plugins: [
		require("daisyui")
	],
	daisyui: {
		styled: true,
		themes: [
			'light',
			'cupcake'
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	  },
};

module.exports = config;
