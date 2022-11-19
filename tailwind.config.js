/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { inter: "Inter", poppins: "Poppins", exo: "Exo" } },
    colors: {
      white: "#fff",
      black: "#000",
      gray: {
        "100": "#f1f1f1",
        "200": "#3c3c3c",
        "300": "#222",
        "400": "rgba(0, 0, 0, 0.27)",
        "500": "rgba(0, 0, 0, 0.15)",
        "600": "rgba(34, 34, 34, 0.1)",
        "700": "rgba(0, 0, 0, 0.5)",
        "800": "rgba(34, 34, 34, 0.11)",
        "900": "rgba(0, 0, 0, 0.03)",
        "1000": "rgba(60, 60, 60, 0.6)",
      },
      orange: "#e9bf57",
    },
    fontSize: {
      "4xs": "12.8px",
      "3xs": "13px",
      "2xs": "13.8px",
      xs: "14.4px",
      sm: "15.52px",
      base: "16px",
      lg: "18px",
      xl: "25px",
      "2xl": "26px",
      "3xl": "38.4px",
      "4xl": "54px",
      "5xl": "64px",
    },
  },
  corePlugins: { preflight: false },
};
