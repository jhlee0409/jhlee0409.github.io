import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    "0x": "0px",
    "1x": "10px",
    "2x": "20px",
    "3x": "30px",
    "4x": "40px",
    "5x": "50px",
    "6x": "60px",
    "7x": "70px",
    "8x": "80px",
  },
  spaceVw: {
    none: "0",
    "0x": "0vw",
    "1x": "10vw",
    "2x": "20vw",
    "3x": "30vw",
    "4x": "40vw",
    "5x": "50vw",
    "6x": "60vw",
    "7x": "70vw",
    "8x": "80vw",
    "9x": "90vw",
    "10x": "100vw",
  },
  spaceVh: {
    none: "0",
    "0x": "0vh",
    "1x": "10vh",
    "2x": "20vh",
    "3x": "30vh",
    "4x": "40vh",
    "5x": "50vh",
    "6x": "60vh",
    "7x": "70vh",
    "8x": "80vh",
    "9x": "90vh",
    "10x": "100vh",
  },
  color: {
    none: "none",
    red: "red",
    point: "#caf1f8",
    "rainbow-100": "#FF9AA2",
    "rainbow-200": "#FFB7B2",
    "rainbow-300": "#FFDAC1",
    "rainbow-400": "#E2F0CB",
    "rainbow-500": "#B5EAD7",
    "rainbow-600": "#C7CEEA",
    "rainbow-700": "#FF9AA2",
    "rainbow-800": "#FFB7B2",
    "rainbow-900": "#FFDAC1",
    "gray-800": "#c3c6c6",
    "gray-900": "#686666",
    orange: "orange",
    black: "black",
    white: "white",
    background: "#1b1b1b",
  },
  borderRadius: {
    base: "12px",
    mobile: "8px",
  },
  fontFamily: {},
  fontSize: {
    "1x": "1.2rem",
    none: "none",
  },
  lineHeight: {},
});
