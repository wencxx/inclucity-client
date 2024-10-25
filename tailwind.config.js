/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,vue}",
  ],
  theme: {
    extend: {
        colors: {
          'custom-primary': '#7B080E',
          'custom-secondary': '#0641d8',
          'custom-tertiary': '#ffac39',
        },
        fontFamily: {
          'poppins': 'Poppins',
          'manrope': 'Manrope'
        }
    },
  },
  plugins: [],
}

