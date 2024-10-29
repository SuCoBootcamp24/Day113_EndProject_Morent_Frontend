/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBG: "#F6F7F9",
        navBG: "#C3D4E9"
      },
    },
  },
  plugins: [require("daisyui")],
};
