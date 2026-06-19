/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This sets Inter as the primary sans font
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}