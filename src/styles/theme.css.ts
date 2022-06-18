import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    heading: "Inter, sans-serif",
    body: "system-ui",
  },
});

export const exampleStyle = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  color: "black",
  padding: 10,
});
