/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{ts,tsx}"];
export const darkMode = "class";

export const theme = {
  extend: {
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
    },
  },
};
export const plugins = [];




