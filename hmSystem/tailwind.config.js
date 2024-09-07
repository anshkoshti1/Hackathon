/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fros-blue-color': '#007BFF',
        'dark-gray': '#333',
        'light-gray': '#D1D5DB',
        'light-color': '#F8F9FA',
        'btn-blue': '#0056B3',
        'btn-light-blue': '#E0E8F9',
      },
    },
  },
  plugins: [],
}

