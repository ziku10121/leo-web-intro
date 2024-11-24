// tailwind.config.js
export default {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2d3436",
        cityLight: "#dfe6e9",
        breeze: "#b2bec3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
