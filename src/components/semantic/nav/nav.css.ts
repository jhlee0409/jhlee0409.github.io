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
  height: "50vh",
});

globalStyle(`${nav} h3`, {
  textAlign: "center",
  overflow: "hidden",
});

const line = style({
  ":after": {
    content: "",
    position: "absolute",
    height: 1,
    width: "600px",
    backgroundColor: "white",
    top: "50%",
    transform: "translateY(-50%)",
  },
  ":before": {
    content: "",
    position: "absolute",
    height: 1,
    width: "1000px",
    backgroundColor: "white",
    top: "50%",
    transform: "translateY(-50%)",
  },
});

export const bigTitle = style([
  line,
  {
    display: "inline-block",
    position: "relative",
    ":after": {
      left: "100%",
      marginLeft: 15,
    },
    ":before": {
      right: "100%",
      marginRight: 15,
    },
  },
]);

export const categoryLink = style({
  position: "relative",
  // fontWeight: "bold",
  transition: "all 150ms linear",
  padding: "10px",
  borderRadius: 8,
  textAlign: "center",
  ":before": {
    position: "absolute",
    content: "",
    bottom: 0,
    height: 2,
    width: "100%",
    left: 0,
    backgroundColor: "white",
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
