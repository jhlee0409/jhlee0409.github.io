import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const searchBtn = style({
  fill: themeVars.colors.text.normal,
  width: 30,
  padding: 5,
  display: "flex",
  alignItems: "center",
  borderRadius: 8,
  transition: "all 150ms linear",
  border: "2px solid transparent",
  ":hover": {
    border: `2px solid ${themeVars.colors.text.normal}`,
  },
});
