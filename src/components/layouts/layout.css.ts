import { vars } from "@/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const LayoutWrapper = style({
  display: "flex",
  position: "relative",
  backgroundColor: themeVars.colors.background,
});
export const contentLayout = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "90px 2vw",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: 50,
  width: "100%",
  minHeight: `90vh`,
  "@media": {
    "screen and (max-width: 578px)": {
      padding: "20px 25px 0 20px",
    },
  },
});

export const contentWrapper = style({
  width: "100%",
  // overflow: "hidden",
  position: "relative",
});

export const bodyLayout = style({
  overflow: "overlay",
  "::-webkit-scrollbar": {
    width: 16,
  },
  "::-webkit-scrollbar-track": {
    borderRadius: 5,
    backgroundColor: "white",
    display: "none",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#ddd",
    borderRadius: 20,
    border: `5px solid ${themeVars.colors.background}`,
    transition: "background-color 300ms ease-in",
  },
  "::-webkit-scrollbar-button": {
    display: "none",
  },
  selectors: {
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: vars.color.point,
    },
    "&::-webkit-scrollbar-thumb:active": {
      backgroundColor: "#dcdcdc",
    },
  },
});

// 10vh + 2vw
export const loadingLogoBox = style({
  width: "100%",
  height: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle(`${loadingLogoBox} > div`, {
  width: 100,
});
