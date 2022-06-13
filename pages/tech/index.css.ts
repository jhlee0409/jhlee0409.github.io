import { globalStyle, style } from "@vanilla-extract/css";

const baseBorderRadius = 12;

export const wrapper = style({
  display: "flex",
  gap: "3vw",
});
globalStyle(`${wrapper} > :first-child`, {
  flex: 4,
});

globalStyle(`${wrapper} > :last-child`, {
  flex: 15,
  // "@supports": {
  //   "(display: grid)": {
  //     display: "grid",
  //     gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  //     rowGap: 50,
  //     columnGap: 30,
  //   },
  // },
});

export const articlesBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 50,
});

export const card = style({
  position: "relative",
  // height: 100,
  borderRadius: baseBorderRadius,
  transition: "transform 150ms linear",
  cursor: "pointer",
  boxShadow: "rgb(255 255 255 / 4%) 0px 4px 16px 0px",
  ":hover": {
    boxShadow: "rgb(255 255 255 / 4%) 0px 8px 16px 0px",
    transform: "translateY(-5px)",
  },
});

export const cardImage = style({
  backgroundColor: "green",
  height: "65%",
  borderTopRightRadius: baseBorderRadius,
  borderTopLeftRadius: baseBorderRadius,
});

export const cardTextBox = style({
  padding: "25px 20px",
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
