import { style } from "@vanilla-extract/css";

export const searchBtn = style({
  filter: "invert(1)",
  width: 30,
  padding: 5,
  display: "flex",
  alignItems: "center",
  borderRadius: 8,
  transition: "all 150ms linear",
  border: "2px solid transparent",
  ":hover": {
    border: "2px solid black",
  },
});
