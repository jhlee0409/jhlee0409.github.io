import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "sticky",
  top: 100,
  maxHeight: "calc(100vh - 40px)",
  overflow: "auto",
  width: "100%",
});
