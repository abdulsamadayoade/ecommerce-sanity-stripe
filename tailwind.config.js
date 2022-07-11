/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				fraunces: ["Fraunces", "serif"],
			},
			colors: {
				beige: "#fffcf8",
				lightGreen: "#e9ebe8",
				darkGreen: "#727e74",
				dark: "#23231a",
			},
		},
	},
	plugins: [],
};
