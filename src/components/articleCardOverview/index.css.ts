import { vars } from "@/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const layout = style({});

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
    width: "3px",
    height: "90%",
    backgroundColor: vars.color.point,
    borderRadius: vars.borderRadius.base,
    transition: "all 0.1s ease-out",
    transform: "translate(-5px, 5%)",
    opacity: 0,
    // transformOrigin: "",
  },
  ":hover": {
    transition: "transform 0.1s ease-out",
    transform: "translateX(5px)",
  },
  "@media": {
    "screen and (max-width: 578px)": {
      selectors: {
        "&:hover:before": {
          transform: "translate(0px, 5%)",
          opacity: 1,
        },
      },
      ":hover": {
        transition: "transform 0.1s ease-out",
        transform: "translateX(10px)",
      },
    },
  },
  selectors: {
    "&:hover:before": {
      transform: "translate(5px, 5%)",
      opacity: 1,
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
  "@media": {
    "screen and (max-width: 578px)": {
      padding: "10px",
    },
  },
});

export const dateBox = style({
  position: "relative",
  color: "white",
  left: 15,
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
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "0.8em",
      ":before": {
        width: 4,
        height: 4,
        top: "50%",
        left: -12,
      },
    },
  },
});

export const cardTagBox = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "5px 15px",
  borderTop: `1px solid ${vars.color.point}`,
  paddingTop: 20,
  "@media": {
    "screen and (max-width: 578px)": {
      paddingTop: 10,
      fontSize: "0.8em",
    },
  },
});

globalStyle(`${cardTagBox} > span`, {
  borderRadius: 8,
});

export const cardTitle = style({
  color: "#ececec",
  transition: "color 300ms linear",
  wordBreak: "keep-all",
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "1.2em",
      lineHeight: "1.5em",
    },
  },
  selectors: {
    [`${card}:hover &`]: {
      color: vars.color.point,
    },
  },
});

export const cardSummary = style({
  fontSize: "0.9em",
  wordBreak: "keep-all",
  paddingBottom: 5,
  color: vars.color["gray-800"],
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "0.8em",
      lineHeight: "1.5em",
    },
  },
});
