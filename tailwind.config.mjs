/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        '4-light-red': 'hsl(0, 100%, 67%)',
        '4-orangey-yellow': 'hsl(39, 100%, 56%)',
        '4-green-teal': 'hsl(166, 100%, 37%)',
        '4-cobalt-blue': 'hsl(234, 85%, 45%)',
        '4-pale-blue': 'hsl(221, 100%, 96%)',
        '4-light-lavender': 'hsl(241, 100%, 89%)',
        '4-dark-gray-blue': 'hsl(224, 30%, 27%)',
        '4-light-slate-blue-bg': 'hsl(252, 100%, 67%)',
        '4-light-royal-blue-bg': 'hsl(241, 81%, 54%)',
        '4-violet-blue-c': 'hsla(256, 72%, 46%, 1)',
        '4-persian-blue-c': 'hsla(241, 72%, 46%, 0)',
        '5-dark-cyan': 'hsl(158, 36%, 37%)',
        '5-cream': 'hsl(30, 38%, 92%)',
        '5-very-dark-blue': 'hsl(212, 21%, 14%)',
        '5-dark-grayish-blue': 'hsl(228, 12%, 48%)',
        '6-light-gray': 'hsl(212, 45%, 89%)',
        '6-grayish-blue': 'hsl(220, 15%, 55%)',
        '6-dark-blue': 'hsl(218, 44%, 22%)',
        '7-yellow': 'hsl(47, 88%, 63%)',
        '7-grey': 'hsl(0, 0%, 50%)',
        '7-black': 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        montserrat: ['Montserrat Variable', 'sans-serif'],
        fraunces: ['Fraunces Variable', 'sans-serif'],
        outfit: ['Outfit Variable', 'sans-serif'],
        figtree: ['Figtree Variable', 'sans-serif'],
        'hanken-grotesk': ['Hanken Grotesk Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
