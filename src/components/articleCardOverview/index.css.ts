import { vars } from "@/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

const border = 4;

export const layout = style({
  // borderRadius: vars.borderRadius.base,
  // overflow: "hidden",
  // padding: 1.5,
});

export const card = style({
  position: "relative",
  // borderRadius: vars.borderRadius.base,
  transition: "transform 150ms linear",
  cursor: "pointer",
  background: "rgba( 255, 255, 255, 0.35 )",
  boxShadow: " rgb(255 255 255 / 4%) 0 8px 16px 0",
  backdropFilter: " blur( 11px )",
  WebkitBackdropFilter: " blur( 11px )",
  ":hover": {
    boxShadow: "rgb(255 255 255 / 4%) 0px 8px 16px 0px",
    // transform: "translateY(-5px)",
  },
  ":before": {
    position: "absolute",
    content: "",
    bottom: 0,
    width: border,
    height: "100%",
    right: 0,
    backgroundColor: "white",
    transformOrigin: "left bottom",
    transform: "scaleY(0)",
    transition: "transform 0.15s 0.25s ease-out",
  },
  ":after": {
    position: "absolute",
    content: "",
    top: 0,
    width: border,
    height: "100%",
    left: 0,
    backgroundColor: "white",
    transformOrigin: "right top",
    transform: "scaleY(0)",
    transition: "transform 0.15s 0.25s ease-out",
  },
  selectors: {
    "&:hover:before": {
      transform: "scaleY(1)",
      transformOrigin: "left top",
    },
    "&:hover:after": {
      transform: "scaleY(1)",
      transformOrigin: "right bottom",
    },
  },
});

export const line = style({
  position: "relative",
  transition: "all 150ms linear",
  // textAlign: "center",
  ":before": {
    position: "absolute",
    content: "",
    bottom: 0,
    height: border,
    width: "100%",
    left: 0,
    backgroundColor: "white",
    transformOrigin: "bottom left",
    transform: "scaleX(0)",
    transition: "transform 0.25s ease-out",
  },
  ":after": {
    position: "absolute",
    content: "",
    top: 0,
    height: border,
    width: "100%",
    left: 0,
    backgroundColor: "white",
    transformOrigin: "top right",
    transform: "scaleX(0)",
    transition: "transform 0.25s ease-out",
  },
  selectors: {
    "&:hover:before": {
      transform: "scaleX(1)",
      transformOrigin: "bottom right",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "top left",
    },
  },
});

export const cardImage = style({
  backgroundColor: "green",
  height: "65%",
  borderTopRightRadius: vars.borderRadius.base,
  borderTopLeftRadius: vars.borderRadius.base,
});

export const cardTextBox = style({
  padding: "25px 20px",
  display: "flex",
  flexDirection: "column",
  gap: 5,
});

export const dateBox = style({
  position: "absolute",
  top: -30,
  left: 20,
  ":before": {
    content: "",
    position: "absolute",
    width: 6,
    height: 6,
    left: -15,
    top: "55%",
    transform: "translateY(-50%)",
    borderRadius: "100%",
    backgroundColor: "#37a985",
  },
});

export const cardTagBox = style({
  display: "flex",
  gap: 10,
  borderTop: "1px solid white",
  paddingTop: 10,
});

globalStyle(`${cardTagBox} > span`, {
  padding: "1px 10px",
  borderRadius: 8,
  color: "black",
});

export const cardTitle = style({});

export const cardSummary = style({
  fontSize: "0.9em",
  paddingBottom: 5,
});
