/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".btn": {
          padding: "2px 10px",
          border: "1px solid #000",
          cursor: "pointer",
          borderRadius: "11px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
