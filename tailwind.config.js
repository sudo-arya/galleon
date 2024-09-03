/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoMedium: [
          '"Roboto Medium"',
          "Georgia",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
      },
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
        contrast: {
          high: "#111111", // High contrast (almost black)
          "medium-high": "#222222",
          medium: "#333333", // Medium contrast
          "medium-low": "#555555",
          low: "#777777", // Low contrast
          "extra-low": "#999999", // Extra low contrast
          // Add more contrast colors as needed
          1: "#1a1a1a", // Very dark shade
          2: "#333333", // Dark shade
          3: "#4d4d4d", // Medium dark shade
          4: "#666666", // Medium shade
          5: "#808080", // Medium light shade
          6: "#999999", // Light shade
          7: "#b3b3b3", // Very light shade
        },
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        // Add more sizes as needed
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
