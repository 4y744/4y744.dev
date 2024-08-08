/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": {
          300: "#b9b9b9", //text-hover
          400: "#9a9a9a", //text
          500: "#656565", //unassigned
          600: "#464646", //unassigned
          700: "#242424", //border-hover
          800: "#1a1a1a", //border
          900: "#101010", //secondary
          950: "#0a0a0a"  //primary
        }
      },
      fontFamily: {
        "inter": ["Inter", "system-ui"]
      },
      transitionProperty: {
        "w": "width, mah-width",
        "h": "height, max-height",
        "bg": "background",
        "text": "color, font-size",
        "rotation": "rotate"
      }
    },
  },
  plugins: [],
}

