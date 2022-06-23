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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
  padding: 20,
  borderRadius: 20,
  marginBottom: 30,
});

globalStyle(`${overviewWrapper} > h1`, {
  fontWeight: "bold",
  fontSize: "1.6em",
});

export const line = style({
  height: 4,
  backgroundColor: "white",
  width: "100%",
  marginTop: "2em",
  borderRadius: 12,
});
