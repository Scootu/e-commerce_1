/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        opacity: "0.25",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out forwards",
        oWiggle: "oWiggle 2s ease-in-out forwards",
      },
      keyframes: {
        oWiggle: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        wiggle: {
          from: { opacity: "1" },
          to: { opacity: "0", visibility: "hidden", position: "absolute" },
        },
      },
      minHeight: {
        128: "34.375rem",
      },
      height: {
        128: "296px",
        144: "492px",
      },
      textColor: {
        "text-blinder": "#46474a",
      },
    },
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
        ".smouthTran": {
          transition: "opacity 0.25s visibility 0.25s",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
