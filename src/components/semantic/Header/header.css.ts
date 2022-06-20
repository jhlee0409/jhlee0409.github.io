import { fontFace, style } from "@vanilla-extract/css";
const myFont = fontFace({
  src: "public/assets/fonts/BRANCHE/BRANCHÉ Demo.ttf",
});

export const headerStyle = style({
  height: "10vh",
  position: "sticky",
  top: 0,
  zIndex: 10,
  backdropFilter: "blur(2px)",
});

export const innerHeaderStyle = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 2vw",
  position: "sticky",
  height: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const headerTitle = style({
  fontFamily: "Tipo PRESS, sans-serif",
  fontSize: "2rem",
  letterSpacing: "0.5rem",
  padding: "1vw 0",
  cursor: "pointer",
});

export const Flex = style({
  display: "flex",
  gap: 15,
});
