/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '320px',
      // min 320 max 575px

      'sm': '576px',
      // => @media (min-width: 576px max 767px) { ... }

      'md': '768px',
      // => @media (min-width: 768px max 991px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px max 1239px) { ... }

      'xl': '1240px',
      // => @media (min-width: 1240px 1535px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin')
  ],
}