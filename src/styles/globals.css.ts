import {keyframes, globalStyle, globalFontFace} from "@vanilla-extract/css";

const fadeInAnimation = keyframes({
  "0%": { transform: "translateX(30px)", opacity: 0 },
  "100%": { transform: "translateX(0)", opacity: 1 },
});

globalStyle("html, body", {
  fontFamily: "MaplestoryOTFLight, sans-serif",
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

globalFontFace('MaplestoryOTFLight',{
  src:  "url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFLight.woff') format('woff')"
})

globalStyle("article *", {
  fontFamily: "MaplestoryOTFLight, sans-serif !important",
});