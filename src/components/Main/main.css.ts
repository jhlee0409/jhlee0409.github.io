import { globalStyle, style, createThemeContract } from "@vanilla-extract/css";

export const main = style({});

export const mainNav = style({
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid black",
  maxWidth: "1200px",
  width: "100%",
});

globalStyle(`${mainNav} > div`, {});

globalStyle(`${mainNav} a`, {
  fontSize: "2rem",
  position: "relative",
});

export const mainTopWrapper = style({
  width: "100%",
  background:
    "linear-gradient(330deg, #e05252 0%, #99e052 25%, #52e0e0 50%, #9952e0 75%, #e05252 100%)",
});

globalStyle(`${mainTopWrapper} p`, {
  fontSize: "4rem",
  fontWeight: "bold",
  background: "white",
  color: "#000",
  mixBlendMode: "color-dodge",
});
