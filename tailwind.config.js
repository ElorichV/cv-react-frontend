/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}