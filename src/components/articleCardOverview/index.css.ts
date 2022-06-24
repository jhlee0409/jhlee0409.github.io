import { vars } from "@/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

const borderWidth = 2;
const borderColor = "#4374D9";

export const layout = style({
  // position: "relative",
});
globalStyle(`${layout} > span`, {
  width: "90%",
  textAlign: "center",
  display: "block",
  borderBottom: "2px solid rgba(64, 64, 64, 0.5)",
  margin: "20px auto 0 auto",
});

export const card = style({
  position: "relative",
  // borderRadius: vars.borderRadius.base,
  transition: "all 150ms linear",
  cursor: "pointer",
  background: "#1b1b1b",
  // boxShadow: " rgb(255 255 255 / 4%) 0 8px 16px 0",
  ":hover": {
    // boxShadow: "rgb(255 255 255 / 4%) 0px 8px 16px 0px",
    transform: "scale(1.01)",
    // opacity: 0.8,
  },
  // ":before": {
  //   position: "absolute",
  //   content: "",
  //   bottom: 0,
  //   width: borderWidth,
  //   height: "100%",
  //   right: 0,
  //   backgroundColor: borderColor,
  //   transformOrigin: "left bottom",
  //   transform: "scaleY(0)",
  //   transition: "transform 0.15s 0.25s ease-out",
  // },
  // ":after": {
  //   position: "absolute",
  //   content: "",
  //   top: 0,
  //   width: borderWidth,
  //   height: "100%",
  //   left: 0,
  //   backgroundColor: borderColor,
  //   transformOrigin: "right top",
  //   transform: "scaleY(0)",
  //   transition: "transform 0.15s 0.25s ease-out",
  // },
  // selectors: {
  //   "&:hover:before": {
  //     transform: "scaleY(1)",
  //     transformOrigin: "left top",
  //   },
  //   "&:hover:after": {
  //     transform: "scaleY(1)",
  //     transformOrigin: "right bottom",
  //   },
  // },
});

export const line = style({
  position: "relative",
  transition: "all 150ms linear",
  // textAlign: "center",
  // ":before": {
  //   position: "absolute",
  //   content: "",
  //   bottom: 0,
  //   height: borderWidth,
  //   width: "100%",
  //   left: 0,
  //   backgroundColor: borderColor,
  //   transformOrigin: "bottom left",
  //   transform: "scaleX(0)",
  //   transition: "transform 0.25s ease-out",
  // },
  // ":after": {
  //   position: "absolute",
  //   content: "",
  //   top: 0,
  //   height: borderWidth,
  //   width: "100%",
  //   left: 0,
  //   backgroundColor: borderColor,
  //   transformOrigin: "top right",
  //   transform: "scaleX(0)",
  //   transition: "transform 0.25s ease-out",
  // },
  // selectors: {
  //   "&:hover:before": {
  //     transform: "scaleX(1)",
  //     transformOrigin: "bottom right",
  //   },
  //   "&:hover:after": {
  //     transform: "scaleX(1)",
  //     transformOrigin: "top left",
  //   },
  // },
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
  gap: 15,
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
    backgroundColor: vars.color.point,
  },
});

export const cardTagBox = style({
  display: "flex",
  gap: 10,
  borderTop: `1px solid white`,
  paddingTop: 20,
});

globalStyle(`${cardTagBox} > span`, {
  padding: "1px 10px",
  borderRadius: 8,
  // color: vars.color["rainbow-600"],
});

export const cardTitle = style({
  color: "#ececec",
});

export const cardSummary = style({
  fontSize: "0.9em",
  paddingBottom: 5,
  color: vars.color.point,
});
