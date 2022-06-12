module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            p: {
              color: "white",
            },
            code: {
              padding: "0.2em 0.4em",
              margin: 0,
              fontSize: "85%",
              backgroundColor: "rgba(110,118,129,0.4)",
              borderRadius: 6,
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
