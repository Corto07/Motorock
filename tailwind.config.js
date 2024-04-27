/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
      'Fuente': ['fuente', 'sans-serif'],
      'Fuente1': ['Bebas Neue', 'sans-serif'],
      'Fuente2': ['fuente2', 'sans-serif'],
      'Fuente3': ['fuente3', 'sans-serif'],
      'Fuente4': ['fuente4', 'sans-serif'],
      },
    },
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'xsm': '375px',
      // => @media (min-width: 375px) { ... }

      'xsl': '425px',
      // => @media (min-width: 425px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {},
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}