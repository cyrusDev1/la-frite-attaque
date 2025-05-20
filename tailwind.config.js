/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        5: "5px",
        6: "6px",
        8: "8px",
        10: "10px",
      },
      backgroundImage: {
        "fade-bottom":
          "linear-gradient(to bottom, rgba(4, 0, 30, 0.8) 0%, rgba(4, 0, 30, 0.8) 20%, transparent 100%)",
      },
      colors: {
        beige: {
          DEFAULT: "#FEEDCD",
          light: "#FFFBF0",
        },
        "indigo-blue": {
          DEFAULT: "#7D87E6",
          dark: "#5B61B8",
          light: "#AAB1F2",
        },
        red: "#F15B3F",
        blue: "#255DB4",
        orange: "#FFBA12",
        green: "#69A27B",
        azure: "#2A3D73",
        sunbeam: "#FFD372",
        "clay-orange": "#DF8D70",
        "light-black": "#1C1C1C",
        "sky-aqua": "#78E3FF",
        "coral-rose": "#FF8A8C",
      },
      rotate: {
        4: "4deg",
        5: "5deg",
        7: "7deg",
        8: "8deg",
        10: "10deg",
        11: "11deg",
        19: "19deg",
        30: "30deg",
      },
      fontFamily: {
        permanent: ['"PermanentMarker"', "cursive"],
        poppins: ['"Poppins"', "no-serif"],
        RumRaisin: ['"RumRaisin"', "no-serif"],
      },
      screens: {
        screens: {
          xs: "320px", // Petits téléphones
          sm: "375px", // Téléphones standards
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
