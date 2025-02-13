/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        alimentos: "url('./src/assets/alimentos.jpg')",
        nutri:"url('./src/assets/nutri.png')",
        consulta:"url('./src/assets/consulta.webp')",
        woman:"url('./src/assets/nutri2.jpg')",
        antropometria:"url('./src/assets/antro.webp')",
        genetic:"url('./src/assets/genetic.jpeg')",
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        mulish:['Mulish', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        body: "hsl(0 0% 100%)",
        limon: "#8DC044",
        lima: "#6E9B2F",
        carmesi: "#A63F51",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-tl-45": {
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
        },
        ".clip-tr-45": {
          clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
        },
        ".clip-bl-45": {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)",
        },
        ".clip-br-45": {
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
        },
      });
    },
  ],
};
