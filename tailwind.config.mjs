/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        '5-dark-cyan': 'hsl(158, 36%, 37%)',
        '5-cream': 'hsl(30, 38%, 92%)',
        '5-very-dark-blue': 'hsl(212, 21%, 14%)',
        '5-dark-grayish-blue': 'hsl(228, 12%, 48%)',
      },
			fontFamily: {
				'montserrat': ['Montserrat Variable', 'sans-serif'],
				'fraunces': ['Fraunces Variable', 'sans-serif']
			}
    },
  },
  plugins: [],
}
