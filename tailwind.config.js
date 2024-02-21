/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sueEllen: "Sue Ellen Francisco",
        workSans: "Work Sans",
        inter: "inter",
        grotesque: "Darker Grotesque",
      },
      colors: {
        pumpkin: "#FC7A1E",
        majorelle: "#623CEA",
        keppel: "#46B29D",
        prussian: "#1E293B",
        floral: "#FEF9EF",
        cerise: "#EF1C5D",
        cinnamonRose: "#B7757A",
        sunset: "#FC915F",
      },
      screens: {
        "1/2xl": "1470px",
      },
    },
  },
  plugins: [],
};
