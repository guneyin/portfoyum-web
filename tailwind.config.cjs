const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: [
			'corporate'
		  ],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	  },
};

module.exports = config;
