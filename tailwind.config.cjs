/** @type {import('tailwindcss').Config} */
module.exports = {
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
					200: '#328FFF',
					300: '#0074FF',
					400: '#005ECE',
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
				'slide-size': {
					'0%': {
						width: '0',
					},
					'100%': {
						width: '130%',
					},
				},
			},
			animation: {
				codewidget: 'appear-from-below 0.75s ease forwards, 1s disappear-to-top ease 2.5s forwards',
				typing: 'slide-size 1.3s linear 0.5s forwards',
				phone: 'appear-from-below 0.97s ease 2.7s forwards',
				laptop: 'appear-from-below 1s ease 2.75s forwards',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
};
