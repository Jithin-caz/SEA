import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightblue:'#caf0f8'
      },
      keyframes: {
        moveRandom: {
'0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(80px, -100px)' }, // Move to the right and up
          '50%': { transform: 'translate(-100px, 80px)' }, // Move to the left and down
          '75%': { transform: 'translate(100px, 100px)' }, // Move right and down
          '90%': { transform: 'translate(-80px, -80px)' }, // Move left and up
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        moveRandom: 'moveRandom 5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
