/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
    screens: {
      '3xl': '2000px',
    },
    borderRadius: {
      '2.5xl': '20px',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald", "buisness"],
    darkMode: "buisness",
  },
}