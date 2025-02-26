/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      animation: {
        clockwise: "clockwise 3s linear infinite",
        "counter-clockwise": "counter-clockwise 3s linear infinite",
      },
      keyframes: {
        clockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "counter-clockwise": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        dharma: ["Dharma Gothic", "sans-serif"], 
        anton: ["Anton", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

