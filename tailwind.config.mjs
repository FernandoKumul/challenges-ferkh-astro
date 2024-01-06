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
        '6-light-gray': 'hsl(212, 45%, 89%)',
        '6-grayish-blue': 'hsl(220, 15%, 55%)',
        '6-dark-blue': 'hsl(218, 44%, 22%)',
        "7-yellow": 'hsl(47, 88%, 63%)',
        "7-grey": 'hsl(0, 0%, 50%)',
        "7-black": 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        montserrat: ['Montserrat Variable', 'sans-serif'],
        fraunces: ['Fraunces Variable', 'sans-serif'],
        outfit: ['Outfit Variable', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
