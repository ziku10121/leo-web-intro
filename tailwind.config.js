// tailwind.config.js
export default {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2d3436",
        orange: "#dd6013bf",
        cityLight: "#dfe6e9",
        breeze: "#b2bec3",
        green: "#749551",
        lake: "#2d5975",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
