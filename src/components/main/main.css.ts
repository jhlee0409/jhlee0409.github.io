import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";
import { themeVars } from "@/styles/theme.css";

export const main = style({});

export const mainTopWrapper = style({
  display: "flex",
});

export const title = style({
  fontWeight: "bold",
  width: "100%",
  letterSpacing: 4,
  fontSize: 46,
  color: themeVars.colors.text.bitTitle,
  borderBottom: `3px solid ${themeVars.colors.secondary}`,
  "@media": {
    "screen and (max-width: 578px)": {
      marginBottom: 20,
      fontSize: 40,
    },
  },
});
