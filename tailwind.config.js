/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'curva': '50% 50% 0 0'
      },
      backgroundImage: {
        alimentos: "url('/alimentos.jpg')",
        encabezado:"url('/verde.svg')",
        encabezadomd:"url('/verdes.svg')",
        conectividad:"url('/conectividad.png')",


      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        mulish:['Mulish', 'sans-serif'],

      },
      colors: {
        body: "#9EA79E",
        limon: "#8DC044",
        lima: "#6E9B2F",
        carmesi: "#A63F51",
        primario:'#474747',
        fondo:'#90CA3E',
        subtitulo:'#475569',
        back:'#F5F5F5'
      },
        textStrokeWidth: {
          1: '1px',
          2: '2px',
        },
        textStrokeColor: {
          white: '#ffffff',
          black: '#000000',
        },
        textShadow: {
          glow: "0 0 10px rgba(255, 255, 255, 0.8)",
        },
    },
  },
  

};
