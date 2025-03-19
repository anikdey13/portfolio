/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Add this to enable class-based dark mode
  theme: {
    extend: {
      colors: {
        "text": 'var(--text)',
        "background": 'var(--background)'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ibm: ["IBM Plex Mono", "monospace"],
        roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}