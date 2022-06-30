import { keyframes, globalStyle } from "@vanilla-extract/css";

const fadeInAnimation = keyframes({
  "0%": { transform: "translateX(30px)", opacity: 0 },
  "100%": { transform: "translateX(0)", opacity: 1 },
});

globalStyle("html, body", {
  fontFamily: "Noto Sans KR, Noto Sans, sans-serif",
});
globalStyle("body", {
  backgroundColor: "#1b1b1b",
  overflow: "auto",
  width: "100%",
});

globalStyle("main > div", {
  animation: `${fadeInAnimation} ease 500ms`,
  animationFillMode: "linear",
  animationIterationCount: 1,
});

globalStyle("p, label, button, a, div", {
  color: "white",
});
globalStyle("article", {
  backgroundColor: "transparent !important",
});
