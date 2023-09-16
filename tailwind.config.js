/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeimg: "url('./src/assets/homeimg.png')",
        footerimg: "url(./src/assets/Footerbg.png)"
      },
      colors: {
        orange: "#FA4A0C",
        grey: "#737373",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(-300px)" },
          100: {
            transform: "translateX(0px)",
          },
        },
        "drop-down": {
          "0%": { transform: "translateY(-100px)" },
          "100%": { transform: "translateY(0)" },
        },
        moveside1: {
          to:{
            transform: "translateX(-20px)"
          }
        },
        moveside2: {
          to:{
            transform : "translateX(20px)"            
          }
        },
      },
      animation: {
        slidein: "slidein 1.5s ease-in-out",
        "drop-down": "drop-down 1.5s ease-in-out",
        moveside1: "moveside1 1s ease-in-out infinite alternate",
        moveside2: "moveside2 1s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
