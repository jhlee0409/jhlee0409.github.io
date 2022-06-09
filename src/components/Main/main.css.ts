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
  height: "50vh",
  borderRadius: 30,
  background: "linear-gradient(330deg, #213a58 0%, #284056 51%, #181f38 75%)",
  backdropFilter: "blur(10px)",
  boxShadow: "4px 4px 8px rgba(0,0,0,0.2)",
  padding: "3em",
});

globalStyle(`${mainTopWrapper} p`, {
  fontSize: "4rem",
  fontWeight: "bold",
  WebkitTextFillColor: "transparent",
  WebkitBackgroundClip: "text",
  background:
    "linear-gradient(330deg, #e05252 0%, #99e052 25%, #52e0e0 50%, #9952e0 75%, #e05252 100%)",
});
