import { sprinkles } from "./../../../styles/sprinkles.css";
import { vars } from "@/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const nav = style({
  padding: vars.space["1x"],
  width: 230,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  // backgroundColor: "rgba(255,255,255)",
  borderRadius: vars.borderRadius.base,
  position: "sticky",
  top: 100,
  height: 200,
});

const line = style({
  ":after": {
    content: "",
    position: "absolute",
    height: 1,
    width: "15%",
    backgroundColor: "white",
    top: "50%",
    transform: "translateY(-50%)",
  },
  ":before": {
    content: "",
    position: "absolute",
    height: 1,
    width: "15%",
    backgroundColor: "white",
    top: "50%",
    transform: "translateY(-50%)",
  },
});

export const bigTitle = style([
  line,
  {
    // color: "black",
    position: "relative",
    textAlign: "center",
    ":after": {
      left: 0,
    },
    ":before": {
      right: 0,
    },
  },
]);

export const categoryLink = style({
  position: "relative",
  fontWeight: "bold",
  transition: "all 150ms linear",
  padding: "5px 10px",
  borderRadius: 8,
  ":hover": {
    color: "black",
    background: "#ececec",
    textDecoration: "underline",
  },
});
