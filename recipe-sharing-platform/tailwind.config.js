// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // all JS/JSX/TS/TSX files in src
    "./public/index.html"           // optional if you use public HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
