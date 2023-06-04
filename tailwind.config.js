const defaultTheme = require ("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Commissioner', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 48%)",
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
      }
    }, 
  },
  plugins: [],
}

