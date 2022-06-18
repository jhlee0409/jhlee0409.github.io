import { vars } from "@/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const nav = style({
  padding: vars.space["1x"],
  width: 230,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  backgroundColor: "rgba(255,255,255)",
  borderRadius: vars.borderRadius.base,
  position: "sticky",
  top: 100,
  height: 200,
});

export const categoryLink = style({
  color: "black",
  position: "relative",
  fontWeight: "bold",
  // width:'fit-content',
  transition: "all 150ms linear",
  padding: "5px 10px",
  ":hover": {
    borderRadius: 8,
    background: "#ececec",
    textDecoration: "underline",
  },
  // ":after": {
  //   transition: "transform 150ms linear",
  //   transformOrigin: "left",
  //   transform: "scaleX(0)",
  //   content: "",
  //   position: "absolute",
  //   width: "100%",
  //   height: 1,
  //   backgroundColor: "black",
  //   bottom: 0,
  //   left: 0,
  // },
  // selectors: {
  //   "&:hover::after": {
  //     transform: "scaleX(1)",
  //   },
  // },
});
