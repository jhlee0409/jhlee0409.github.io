import { style, globalStyle } from "@vanilla-extract/css";

export const Base = style({
  display: "flex",
  height: "100vh",
  gap: 40,
});

globalStyle(`${Base} > section`, {});

export const tagWrapper = style({
  display: "flex",
  gap: 10,
});

globalStyle(`${tagWrapper} > span`, {});

export const overviewWrapper = style({
  backgroundColor: "violet",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
  padding: 20,
  borderRadius: 20,
});
globalStyle(`${overviewWrapper} > h1`, {
  fontWeight: "bold",
  fontSize: "1.8em",
});
