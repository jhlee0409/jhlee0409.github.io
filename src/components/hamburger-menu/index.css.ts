import { globalStyle, style } from "@vanilla-extract/css";
export const wrapper = style({
  flexDirection: "column",
  gap: 5,
  position: "relative",
  width: 25,
  justifyContent: "center",
  display: "none",
  "@media": {
    "screen and (max-width: 578px)": {
      display: "flex",
    },
  },
});

globalStyle(`${wrapper} > div`, {
  width: "100%",
  backgroundColor: "white",
  height: 2,
  borderRadius: 1,
  transition: "all 150ms linear",
  transformOrigin: "left",
});

export const first = style({
  transform: "rotate(45deg)",
});
export const second = style({
  transform: "translateX(-100%)",
  opacity: 0,
});
export const third = style({
  transform: " rotate(-45deg)",
  marginTop: 3,
});
