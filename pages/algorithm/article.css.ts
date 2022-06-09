import { style, globalStyle } from "@vanilla-extract/css";

export const Base = style({
  display: "flex",
  height: "100vh",
  gap: 40,
});

globalStyle(`${Base} > section`, {});
