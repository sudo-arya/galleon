/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cs1: "#5b2d12",
        cs2: "#ffffff",
        cs3: "#b25f16",
        cs4: "#00020d",
        cs5: "#0c2759",
        cs6: "#339947",
        cs7: "#415A77",
        facebook: "#465993",
        yt: "#f51c0c",
        x: "#000000",
        linkedin: "#0077b3",
      },
      keyframes: {
        gradient: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 8s ease infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
