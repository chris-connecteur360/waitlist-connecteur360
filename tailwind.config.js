/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '0px 16px 32px -12px rgba(88, 92, 95, 0.10)',
      },
      fontFamily: {
        nanami: 'nanamiLight',
        nanamiBook: 'nanamiBook',
        nanamiBold: 'nanamiBold',
        urbanist: 'urbanist'
      }
    },
  },
  plugins: [],
}

