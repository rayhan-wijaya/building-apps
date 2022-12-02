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
					200: '#4985CC',
					900: '#1D4676',
				},
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			keyframes: {
				'appear-from-below': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
				'disappear-to-top': {
					'0%': {
						opacity: '1',
					},
					'100%': {
						transform: 'translateY(-100%)',
						opacity: '0',
					},
				},
			},
		},
	},
	plugins: [],
};
