/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	darkMode: 'class',
  theme: {
    extend: {
			fontFamily:{
				mont: ['var(--font-mont',...fontFamily.sans]
			},
			colors: {
				dark: "#191B1C",
				light: "#f0f0f0",
				primary: "#CC1318", // 
				primaryDark: "#12CC43", // 
			},
			backgroundImage:{
				'home': "url('../../public/accounting-1.jpg')",
				'about': "url('../../public/about.jpg')",
			},
		},
		screens: {
			"2xl": { min: "1665px" },
			// => @media (min-width: 1665px) { ... }
	
			xl: { min: "1279px" },
			// => @media (min-width: 1279px) { ... }
	
			lg: { min: "1023px" },
			// => @media (min-width: 1023px) { ... }
	
			md: { min: "767px" },
			// => @media (min-width: 767px) { ... }
	
			sm: { min: "639px" },
			// => @media (min-width: 639px) { ... }
	
			xs: { min: "479px" },
			// => @media (min-width: 479px) { ... }
		},
  },
  plugins: [],
}