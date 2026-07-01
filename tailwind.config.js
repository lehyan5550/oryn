/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        oryn: {
          black: "#111111",
          white: "#FFFFFF",
          gray: "#E5E5E5",
          graydark: "#4B4B4B",
          red: "#D90429",
          redlight: "#F72C4E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-.04em",
        widest2: ".2em",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn .6s ease forwards",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
