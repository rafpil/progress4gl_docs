/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2c384c',
        'secondary': '#1f2733',
        'success': '#5dd075',
        'waring': '#FFD166',
        'error': '#ff4a5d',
        'txt-primary': '#eeeeee',
      },

    },
  },
  plugins: [],
}

