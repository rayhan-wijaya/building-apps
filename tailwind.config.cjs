/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	mode: 'jit',
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'cool-blue': {
					900: '#151A49',
					800: '#2E3464',
					700: '#5260BE',
				},
				'ice-blue': {
					100: '#5FA8FF',
					900: '#1D4676',
				},
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
