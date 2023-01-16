/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "check-bg": "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        "bg-light": "hsl(0, 0%, 98%)",
        "bg-dark": "hsl(235, 21%, 11%)",
        "elem-light": "hsl(236, 33%, 92%)",
        "elem-dark-1": "hsl(237, 14%, 26%)",
        "elem-dark-2": "hsl(233, 14%, 35%)",
        "text-active-blue": "hsl(220, 98%, 61%)",
        "text-inactive-light": "hsl(236, 9%, 61%)",
        "text-inactive-dark": "hsl(236, 9%, 61%)",
        "text-inactive-hov-dark": "hsl(236, 33%, 92%)",
        "li-text-light": "hsl(235, 19%, 35%)",
        "li-text-dark": "hsl(234, 39%, 85%)",
        "shadow-light": "hsl(236, 9%, 61%)",
        "shadow-dark": "hsl(235, 24%, 19%)",
      },
    },
  },
  plugins: [],
};
