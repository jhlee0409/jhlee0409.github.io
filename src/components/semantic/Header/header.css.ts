import { vars } from "@/styles/vars.css";
import { fontFace, globalStyle, style } from "@vanilla-extract/css";
export const headerStyle = style({
  height: "10vh",
  position: "sticky",
  top: 0,
  backgroundColor: vars.color.background,
  zIndex: 10,
});

export const progressbar = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: 3,
  zIndex: 11,
});

globalStyle(`${progressbar} > div`, {
  backgroundColor: "white",
  height: "100%",
});

export const innerHeaderStyle = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 2vw",
  position: "sticky",
  height: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media": {
    "screen and (max-width: 578px)": {
      padding: "0 35px 0px 20px",
      height: 80,
    },
  },
});

export const Flex = style({
  display: "flex",
  gap: 15,
});

export const rightHeaderSection = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
  gap: 15,
  "@media": {
    "screen and (max-width: 578px)": {
      display: "none",
    },
  },
});

export const aboutMeBtn = style({
  transition: "all 150ms linear",
  position: "relative",
  padding: "8px 0",
  ":hover": {
    color: vars.color.point,
  },
  ":before": {
    position: "absolute",
    content: "",
    bottom: 0,
    height: 2,
    width: "100%",
    left: 0,
    backgroundColor: "#ececec",
    transformOrigin: "bottom",
    transform: "scaleY(0)",
    transition: "transform 0.25s ease-out",
    borderRadius: 4,
  },
  selectors: {
    "&:hover:before": {
      transform: "scaleY(1)",
    },
  },
});

export const logoMobileBox = style({
  display: "none",
  "@media": {
    "screen and (max-width: 578px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
});

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
