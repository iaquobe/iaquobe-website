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
			'lavendar': '#C593EB',
			'indigo': '#4B0082',
			'periwinkle': '#BBBAE9',
			'windows-bg': '#c0c0c0',
			'windows-fg': '#222222',
		}
	},
	plugins: [],
}

