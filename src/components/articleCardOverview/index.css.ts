import { vars } from "@/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const layout = style({
  // position: "relative",
});

globalStyle(`${layout} > span`, {
  width: "calc(100% - 40px)",
  textAlign: "center",
  display: "block",
  borderBottom: "2px solid rgba(64, 64, 64, 0.5)",
  margin: "20px auto 0 auto",
});

export const card = style({
  position: "relative",
  transition: "all 150ms linear",
  cursor: "pointer",
  borderRadius: vars.borderRadius.base,
  overflow: "hidden",
  ":before": {
    content: "",
    position: "absolute",
    width: "1500px",
    height: "200px",
    backgroundColor: vars.color["gray-900"],
    transition: "transform 0.1s ease-out",
    transform: "rotate(0) translateY(-50%) scaleX(0)",
    transformOrigin: "top left",
  },
  selectors: {
    "&:hover:before": {
      transform: "rotate(45deg) translateY(-50%) scaleX(0.05)",
    },
  },
});
export const line = style({
  position: "relative",
  transition: "all 150ms linear",
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
  borderTop: `1px solid ${vars.color.point}`,
  paddingTop: 20,
});

globalStyle(`${cardTagBox} > span`, {
  padding: "1px 10px",
  borderRadius: 8,
});

export const cardTitle = style({
  color: "#ececec",
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "1.5em",
    },
  },
});

export const cardSummary = style({
  fontSize: "0.9em",
  paddingBottom: 5,
  color: vars.color["gray-800"],
});
