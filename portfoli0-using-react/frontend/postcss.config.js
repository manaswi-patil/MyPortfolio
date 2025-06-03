/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
