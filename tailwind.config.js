/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'curva': '50% 50% 0 0'
      },
      backgroundImage: {
        alimentos: "url('./src/assets/alimentos.jpg')",
        nutri:"url('./src/assets/NutriJessy.png')",
        encabezado:"url('/verde.svg')",
        encabezadomd:"url('/verdes.svg')",
        pie:"url('/fondo2.svg')",


      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        mulish:['Mulish', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        sourceSerif: ["'Source Serif 4'", "serif"],
      },
      colors: {
        body: "#9EA79E",
        limon: "#8DC044",
        lima: "#6E9B2F",
        carmesi: "#A63F51",
        primario:'#474747',
        fondo:'#90CA3E',
        subtitulo:'#475569'
      },
        textStrokeWidth: {
          1: '1px',
          2: '2px',
        },
        textStrokeColor: {
          white: '#ffffff',
          black: '#000000',
        }
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
         
        ".clip-bottom-convex": {
          clipPath: "ellipse(80% 90% at 50% 100%)",
        },
         
      });
    },
  ],
};
