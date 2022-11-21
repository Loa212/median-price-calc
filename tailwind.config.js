/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        pulsing: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.75 },
        },
      },
      animation: {
        "ring-pulse": "pulsing 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
