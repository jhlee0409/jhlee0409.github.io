import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";
const w = 30;

export const iconImage = style({
  width: w / 2,
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  filter: `invert(${themeVars.colors.invert})`,
  transition: "all 200ms ease-in-out",
});

export const sunIcon = style({
  transform: "translate(50%,-50%)",
});
export const moonIcon = style({
  transform: "translate(-150%,-50%)",
});

export const themeButtonBox = style({
  display: "flex",
  alignItems: "center",
});

export const switchThemeButton = style({
  width: w * 2,
  height: w,
  borderRadius: w / 2,
  border: `1px solid ${themeVars.colors.text.normal}`,
  position: "relative",
  ":before": {
    transition: "all 150ms ease-in-out",
    position: "absolute",
    content: "",
    backgroundColor: themeVars.colors.text.normal,
    borderRadius: "50%",
    width: w - 10,
    height: w - 10,
    top: "50%",
    zIndex: 10,
  },
});

export const on = style({
  ":before": {
    transform: "translate(15%, -50%)",
  },
});

export const off = style({
  ":before": {
    transform: "translate(-115%, -50%)",
  },
});
