/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // ← React/Vite 경로 지정
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}