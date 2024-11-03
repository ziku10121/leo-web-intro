// tailwind.config.js
export default {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
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
