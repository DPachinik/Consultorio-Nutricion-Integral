/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        alimentos: "url('./src/assets/alimentos.jpg')",
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
      },
      colors: {
        body: "#ffffff",
        limon: "#8DC044",
        lima: "#6E9B2F",
        carmesi: "#A63F51",
      },
    },
  },
  plugins: [],
};
