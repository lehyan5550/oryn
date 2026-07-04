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
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.6)" },
          "70%": { opacity: "1", transform: "scale(1.08)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseOnce: {
          "0%": { transform: "scale(1)" },
          "35%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        overlayIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        modalIn: {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn .6s ease both",
        marquee: "marquee 22s linear infinite",
        popIn: "popIn .4s cubic-bezier(0.34,1.56,0.64,1) both",
        pulseOnce: "pulseOnce .35s ease",
        overlayIn: "overlayIn .2s ease both",
        modalIn: "modalIn .25s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
