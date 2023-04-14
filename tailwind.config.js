/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				p2p:   ["p2p"],
				comic: ["comic"],
				sans:  ["comic"],
			},
		},
		colors: {
			'powderblue': "#B0E0E6",
			'purple': '#800080',
			'magenta': '#d946ef',
		}
	},
	plugins: [],
}

