import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("button", {
  backgroundColor: "unset",
  outline: "none",
  border: "none",
  cursor: "pointer",
});

globalStyle("a", {
  color: "black",
  outline: "none",
  cursor: "pointer",
  textDecoration: "none",
});
