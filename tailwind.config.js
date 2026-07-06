/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#071C3A",
        secondary: "#0E2F61",
        background: "#061426",
        surface: "#0D1E36",
        gold: "#D7A83D",
        lightgold: "#E8C86F",
        silver: "#C7CBD1",
        white: "#FFFFFF",
        gray: {
          400: "#B7BDC7", // Mapping standard gray text or usage
          DEFAULT: "#B7BDC7"
        },
        success: "#00C896",
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '1px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
