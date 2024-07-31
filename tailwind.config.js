/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#080808",
        "secondary": "#101010",
        "border": {
          100: "#52525b",
          200: "#3f3f46",
          300: "#27272a",
          400: "#18181b"
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
        "btn": "background, color, border, margin, padding, transform, top",
        "rotation": "rotate"
      }
    },
  },
  plugins: [],
}

