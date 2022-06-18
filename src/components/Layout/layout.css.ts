import { style } from "@vanilla-extract/css";

export const contentLayout = style({
  width: "100%",
  overflow: "hidden",
});

export const contentWrapper = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "90px 2vw",
  display: "flex",
  gap: 50,
  width: "100%",
  position: "relative",
});
