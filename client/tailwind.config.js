/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Sintony', 'sans-serif'],
      },
      colors: {
        primary: "#6B9B6E",
        light: "#F4F1F2",
        dark: "#0E0C0D",
        accent: "#514349",
        muted: "#B1A69F"
      }
    },
  },
  plugins: [],
};

