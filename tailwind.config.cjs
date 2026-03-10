/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070A12',
          900: '#0B1020',
          800: '#0E1324'
        },
        champagne: {
          500: '#D8B36A'
        },
        ocean: {
          500: '#56C7C7'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
