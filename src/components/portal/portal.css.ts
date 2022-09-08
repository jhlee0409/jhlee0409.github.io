import { keyframes, style } from "@vanilla-extract/css";

export const layout = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: `rgba( 0 0 0 / 50%)`,
  zIndex: 10,
});

export const content = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 11,
});
