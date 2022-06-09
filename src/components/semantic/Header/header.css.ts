import { fontFace, style } from "@vanilla-extract/css";

const myFont = fontFace({
  src: 'local("BRANCHE")',
});

export const headerStyle = style({
  height: "10vh",
  position: "sticky",
  top: 0,
  zIndex: 10,
  backdropFilter: "blur(2px)",
});

export const innerHeaderStyle = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 5%",
  position: "sticky",
  height: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const headerTitle = style({
  fontFamily: myFont,
  fontSize: "2rem",
  letterSpacing: "0.5rem",
  padding: "1% 0",
  cursor: "pointer",
});

export const Flex = style({
  display: "flex",
  gap: 15,
});
