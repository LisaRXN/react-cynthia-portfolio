/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Inclut les fichiers React
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"], // Police pour titres ou autres
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        montUnderline: ["Montserrat Underline", "sans-serif"],
        lora: ['Lora','serif'],
        open: ['Open Sans', 'sans-serif'],
        abril: ['Abril Fatface', 'serif'],
        display: ['DM Serif Display', 'serif'],
        grotesk: ['Schibsted Grotesk', 'sans-serif'],
        tusker: ['Tusker Grotesk', 'sans-serif'],
         shadows: ['Shadows Into Light', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
        rock: ['Rock Salt', 'cursive'],
        rainbow: ['Over the Rainbow', 'cursive'],
      },
      colors: {
        bronze:"#b47c5e",
        gold:"#d29d3b",
        silver:"#8a8a8a",
        finalist:"#dfd6c6",
        // mygreen: "#00FECA",
        mygreen: "#92ff71",
        mygreen3: "#326421",
        myyellow: "#FDF200",
        mypink: "#FF85EA",
        myviolet: "#7B61F8",
        myviolet_shade: "#f1effe",
        mygrey:"#282828",
        mygrey2:"#1E1E1E",
        mygreen2: "#92ff71",
        // mygreen2: "#8AF7EA",
        mypink2: "#FDCBFC",
        myviolet2: "#C6BDEA",
        myblue2: "#48ADF1",
      },
      animation: {
        'gradientMove': 'gradientMove 5s ease infinite',
        'marquee': 'marquee 45s linear infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

    },
  },
  plugins: [
    daisyui 
  ],
};
