import { globalStyle, style } from "@vanilla-extract/css";
export const footerBox = style({
  width: "100%",
  // height: 100,
  display: "flex",
  alignItems: "center",
  padding: 20,
  fontSize: "0.8em",
  // borderTop: "1px solid white",
  flexDirection: "column",
  gap: 20,
});

export const logoBox = style({
  display: "flex",
  gap: 20,
  "@media": {
    "screen and (max-width: 578px)": {
      gap: 15,
    },
  },
});

export const logoLink = style({
  width: 30,
  filter: "invert(1)",
  transition: "all 150ms linear",
  opacity: 0.3,
  "@media": {
    "screen and (max-width: 578px)": {
      width: 30,
    },
  },
  ":hover": {
    opacity: 1
  },
});
