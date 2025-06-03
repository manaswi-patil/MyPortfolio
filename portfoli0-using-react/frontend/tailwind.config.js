/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-primary": "#f5f6f2",
        secondary: "#e7e8e0",
        "brand-secondary": "#F5F6F1",
        "brand-tertiary": "#f3f3f3",
        tertiary: "rgb(238, 64, 61)",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
