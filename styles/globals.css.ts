import { keyframes, globalStyle } from "@vanilla-extract/css";

const fadeInAnimation = keyframes({
  "0%": { transform: "translateX(-20px)", opacity: 0 },
  "100%": { transform: "translateX(0)", opacity: 1 },
});

globalStyle("html, body", {
  fontFamily: "Noto Sans KR, sans-serif",
});
globalStyle("body", {
  backgroundColor: "#1b1b1b",
});
globalStyle("main > div", {
  animation: `${fadeInAnimation} ease 500ms`,
  animationFillMode: "forwards",
  animationIterationCount: 1,
});

globalStyle("p, span, label, button, div, a", {
  color: "white",
});

// body {
//   animation: fadeInAnimation ease 3s;
//   animation-iteration-count: 1;
//   animation-fill-mode: forwards;
// }
// @keyframes fadeInAnimation {
//   0% {
//       opacity: 0;
//   }
//   100% {
//       opacity: 1;
//   }
// }
