/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      bigStone: "#123",
      beige: "#f5f5dc",
      black: "#000", // Hmmm.
      brownDerby: "#492615",
      concrete: "#f2f2f2",
      chathamsBlue: "#147",
      doveGrey: "#666",
      emperor: "#555",
      mineShaft: "#333",
      silver: "#ccc",
      tundora: "#404040",
      white: "#fff", // Hmmm.
    },
    extend: {},
  },
  plugins: [],
};
