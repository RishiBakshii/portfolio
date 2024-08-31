/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background':'rgb(15 23 42)',
        'text-secondary':'rgb(148 163 184)',
        'text-primary':'#E2E8F0'
      }
    },
  },
  plugins: [],
}