import { vars } from "@/styles/vars.css";
import { style, globalStyle } from "@vanilla-extract/css";

export const Base = style({
  display: "flex",
  height: "100vh",
  gap: 40,
});

globalStyle(`${Base} > section`, {});

export const tagWrapper = style({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "5px 10px",
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "0.8em",
    },
  },
});

globalStyle(`${tagWrapper} > span`, {});

export const overviewWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // whiteSpace: "nowrap",

  gap: 10,

  padding: 20,
  borderRadius: 12,
  marginBottom: 30,
  "@media": {
    "screen and (max-width: 578px)": {
      padding: 10,
      borderRadius: vars.borderRadius.mobile,
    },
  },
});

globalStyle(`${overviewWrapper} > h1`, {
  fontWeight: "bold",
  fontSize: "1.6em",
  lineHeight: "1.8em",
  textAlign: "center",
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "1.2em",
    },
  },
});
globalStyle(`${overviewWrapper} > p`, {
  fontSize: "1em",
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "0.8em",
    },
  },
});

export const line = style({
  height: 4,
  backgroundColor: "white",
  width: "100%",
  marginTop: "2em",
  borderRadius: vars.borderRadius.base,
  "@media": {
    "screen and (max-width: 578px)": {
      borderRadius: vars.borderRadius.mobile,
    },
  },
});
