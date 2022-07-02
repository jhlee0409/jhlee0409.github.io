import { globalStyle, style } from "@vanilla-extract/css";
export const footerBox = style({
  width: "100%",
  // height: 100,
  display: "flex",
  alignItems: "center",
  padding: 20,
  fontSize: "0.8em",
  borderTop: "1px solid white",
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

globalStyle(`${logoBox} > a`, {
  width: 40,
  filter: "invert(1)",
  "@media": {
    "screen and (max-width: 578px)": {
      width: 30,
    },
  },
});
