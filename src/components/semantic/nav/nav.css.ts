import { vars } from "@/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const mobileInteractionBox = style({
  display: "none",
  "@media": {
    "screen and (max-width: 578px)": {
      display: "flex",
      padding: "10px 20px",
    },
  },
});

export const nav = style({
  width: 220,
  flexDirection: "column",
  gap: 10,
  position: "sticky",
  maxHeight: "100vh",
  overflow: "hidden",
  height: "100%",
  top: 0,
  backgroundColor: themeVars.colors.secondary,
  "@media": {
    "screen and (max-width: 578px)": {
      display: "none",
    },
  },
});

export const navMobile = style({
  padding: vars.space["1x"],
  width: 270,
  flexDirection: "column",
  gap: 10,
  height: "100%",
  top: 100,
  display: "none",
  "@media": {
    "screen and (max-width: 578px)": {
      display: "flex",
      transition: "transform 100ms cubic-bezier(0.1, 0.57, 0.1, 1)",
      position: "fixed",
      backgroundColor: themeVars.colors.secondary,
      top: 80,
      right: 0,
      width: "100%",
      height: "calc(100vh - 80px)",
    },
  },
});

export const subSection = style({
  paddingTop: vars.space["1x"],
  paddingBottom: vars.space["1x"],
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

globalStyle(`${nav} h3`, {
  overflow: "hidden",
});

export const bigTitle = style([
  {
    display: "inline-block",
    position: "relative",
    color: themeVars.colors.text.main,
    textTransform: "uppercase",
  },
]);

export const categoryLink = style({
  position: "relative",
  transition: "color 150ms linear",
  padding: "10px",
  borderRadius: 8,
  fontSize: "0.8rem",
  ":before": {
    position: "absolute",
    content: "",
    bottom: 0,
    height: 2,
    width: "100%",
    left: 0,
    backgroundColor: "#ececec",
    transformOrigin: "bottom right",
    transform: "scaleX(0)",
    transition: "transform 0.25s ease-out",
    borderRadius: 4,
  },
  selectors: {
    "&:hover:before": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },
});

export const innerNav = style({
  padding: vars.space["2x"],
  height: "calc(100vh - 106px)",
  overflow: "overlay",
  "@media": {
    "screen and (max-width: 578px)": {
      height: "100%",
    },
  },
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
    border: `7px solid ${themeVars.colors.secondary}`,
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

export const headerBox = style({
  display: "flex",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 578px)": {
      display: "none",
    },
  },
});

export const headerTitle = style({
  fontFamily: "Dancing Script, sans-serif",
  fontSize: "2rem",
  // letterSpacing: "1rem",
  padding: "1vw 0",
  cursor: "pointer",
});

export const logoBox = style({
  display: "flex",
  justifyContent: "center",
  gap: 20,
  alignItems: "center",
  height: 50,
  borderTop: "1px solid white",
  borderBottom: "1px solid white",
  borderRadius: 2,
  "@media": {
    "screen and (max-width: 578px)": {
      gap: 15,
    },
  },
});

export const logoLink = style({
  width: 25,
  filter: "invert(1)",
  transition: "all 150ms linear",
  opacity: 0.3,
  "@media": {
    "screen and (max-width: 578px)": {
      width: 25,
    },
  },
  ":hover": {
    opacity: 1,
  },
});
