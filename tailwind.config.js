/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#0b4da3',
				'primary-dark': '#083a78',
				accent: '#d4a017',
			},
			boxShadow: {
				primary: '0 10px 25px rgba(11,77,163,0.12)'
			}
		},
	},
	plugins: [],
}
