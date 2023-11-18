/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sueEllen: "Sue Ellen Francisco",
        workSans: "Work Sans",
      },
      colors: {
        pumpkin: "#FC7A1E",
        majorelle: "#623CEA",
        keppel: "#46B29D",
        prussian: "#1E293B",
        floral: "#FEF9EF",
        cerise: "#EF1C5D",
      },
    },
  },
  plugins: [],
};
