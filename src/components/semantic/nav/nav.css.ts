import { fontFace, style } from "@vanilla-extract/css";

export const nav = style({
  border: "1px solid black",
  padding: "1vw",
  minWidth: 200,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  textTransform: "uppercase",
});
