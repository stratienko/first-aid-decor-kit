const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    colors: {
      ...colors,
      primary: "#3f4241",
      secondary: "#e5e5e5",
    },
    extend: {
      animation: {
        "fade-in": "fadeIn 700ms ease-in 1 normal forwards",
      },
      gridTemplateColumns: {
        "about-gallery": "24rem 1fr",
        services: "repeat(auto-fill, minmax(20rem, 1fr));",
      },
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      height: {
        120: "30rem",
        128: "32rem",
        160: "40rem",
        180: "45rem",
      },
      keyframes: {
        fadeIn: {
          from: {
            transform: "scale(0.98)",
            filter: "grayscale(100%) blur(0.125rem)",
            opacity: 0,
          },
          to: {
            transform: "scale(1)",
            filter: "grayscale(0%) blur(0)",
            opacity: 1,
          },
        },
      },
      lineHeight: {
        26: "6.5rem",
      },
      minWidth: {
        100: "25rem",
      },
      maxWidth: {
        360: "90rem",
      },
      scale: {
        98: "0.98",
      },
      width: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        120: "30rem",
        132: "33rem",
        360: "90rem",
      },
    },
  },
};
