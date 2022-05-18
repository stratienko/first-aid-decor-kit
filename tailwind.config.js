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
      gridTemplateColumns: {
        "about-gallery": "24rem 1fr",
        services: "repeat(auto-fill, minmax(20rem, 1fr));",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        10: "repeat(10, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
      },
      fontFamily: {
        noto: ["Noto Serif Display", "serif"],
      },
      height: {
        120: "30rem",
        128: "32rem",
        160: "40rem",
        180: "45rem",
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
