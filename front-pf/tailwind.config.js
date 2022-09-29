/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "1-color": "var(--oxford-blue)",
        "2-color": "var(--space-cadet)",
        "3-color": "var(--y-in-mn-blue)",
        "4-color": "var(--maximum-blue-green)",
        "5-color": "var(--turquoise-blue)"
      }
    },
  },
  plugins: [],
}