import { vars } from "@/styles/vars.css";
import { fontFace, style } from "@vanilla-extract/css";
export const headerStyle = style({
  height: "10vh",
  position: "sticky",
  top: 0,
  zIndex: 10,
  // backdropFilter: "blur(2px)",
  backgroundColor: vars.color.background,
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
  "@media": {
    "screen and (max-width: 578px)": {
      padding: "0 35px 0px 20px",
    },
  },
});

export const headerTitle = style({
  fontFamily: "Dancing Script, sans-serif",
  fontSize: "2rem",
  // letterSpacing: "1rem",
  padding: "1vw 0",
  cursor: "pointer",
});

export const Flex = style({
  display: "flex",
  gap: 15,
});

export const rightHeaderSection = style({
  display: "flex",
  gap: 15,
  "@media": {
    "screen and (max-width: 578px)": {
      display: "none",
    },
  },
});
