import { vars } from "@/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const nav = style({
  padding: vars.space["1x"],
  width: 270,
  flexDirection: "column",
  gap: 10,
  height: "fit-content",
  borderRadius: vars.borderRadius.base,
  position: "sticky",
  top: "10vh",
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
  height: "fit-content",
  borderRadius: vars.borderRadius.base,
  top: 100,
  display: "none",
  "@media": {
    "screen and (max-width: 578px)": {
      display: "flex",
      transition: "transform 100ms cubic-bezier(0.1, 0.57, 0.1, 1)",
      position: "fixed",
      backgroundColor: "#1b1b1b",
      top: 80,
      right: 0,
      zIndex: 10,
      width: "100%",
      height: "max-content",
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
    color: vars.color["gray-800"],
    textTransform: "uppercase",
  },
]);

export const categoryLink = style({
  position: "relative",
  transition: "color 150ms linear",
  padding: "10px",
  borderRadius: 8,
  fontSize: "0.9rem",
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
