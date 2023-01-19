/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "hsl(236, 33%, 92%)",
        dark: "hsl(235, 21%, 11%)",
        "grad-color-1": "hsl(192, 100%, 67%)",
        "grad-color-2": "hsl(280, 87%, 65%)",
        "elem-light": "hsl(0, 0%, 98%)",
        "elem-dark-1": "hsl(237, 14%, 26%)",
        "elem-dark-2": "hsl(233, 14%, 35%)",
        "active-blue": "hsl(220, 98%, 61%)",
        "inactive-light": "hsl(236, 9%, 61%)",
        "inactive-dark": "hsl(236, 9%, 61%)",
        "inactive-hov-dark": "hsl(236, 33%, 92%)",
        "light-txt": "hsl(235, 19%, 35%)",
        "dark-txt": "hsl(234, 39%, 85%)",
        "shadow-light": "hsl(236, 9%, 61%)",
        "shadow-dark": "hsl(235, 24%, 19%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
