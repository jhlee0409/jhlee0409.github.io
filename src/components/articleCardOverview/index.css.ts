import { vars } from "@/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const card = style({
  position: "relative",
  borderRadius: vars.borderRadius.base,
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
  border: "1px solid white",
  padding: "1px 10px",
  backgroundColor: "white",
  borderRadius: 8,
  color: "black",
});

export const cardTitle = style({});

export const cardSummary = style({
  fontSize: "0.9em",
});
