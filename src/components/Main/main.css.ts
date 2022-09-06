import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const main = style({});

export const mainTopWrapper = style({
  display: "flex",
});

export const title = style({
  fontWeight: "bold",
  width: "100%",
  letterSpacing: 4,
  fontSize: 46,
  color: vars.color.point,
  borderBottom: "3px solid #202020",
});
