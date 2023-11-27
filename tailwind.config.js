/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
       colors: {
        "white-100": "#fff",
        "gray-100": "#dadce0",
        "black-200": "#2b2b2b",
        "black-100": "#000000",
        "blue-100": "#42b3e5",
        "buttonblue-100": "#3a9ecb",
        "buttonhover-200":  "#2a2a2a",
        "h2-100": "#42b3e5",
        "h4-200": "#737373",
        "border-100": "#3a9ecb",
      },
    },
    fontFamily: {
      BenchNine:['BenchNine', 'sans-serif']
    }
  },
  plugins: [require('flowbite/plugin')],
}

