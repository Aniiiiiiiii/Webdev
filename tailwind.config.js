/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: {
          "100": "#ddd",
          "200": "#d8d8d8",
        },
        gold: "#fdcf31",
        darkslategray: "#393532",
        whitesmoke: "#f4f4f4",
        gray: "#888",
        darkseagreen: "#90be73",
        tan: "#b48c65",
        wheat: "#dfd0a9",
        lightsteelblue: "#9fbdd9",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "playfair-display": "'Playfair Display'",
      },
    },
    fontSize: {
      smi: "13px",
      "17xl": "36px",
      lg: "18px",
      xl: "20px",
      sm: "14px",
      xs: "12px",
      base: "16px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
