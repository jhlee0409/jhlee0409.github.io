import { keyframes, globalStyle, globalFontFace } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

const fadeInAnimation = keyframes({
  "0%": { transform: "translateX(30px)", opacity: 0 },
  "100%": { transform: "translateX(0)", opacity: 1 },
});

globalStyle("html, body", {
  // fontFamily: "NEXONLv1GothicOTFRegular, sans-serif",
});
globalStyle("body", {
  overflow: "auto",
  width: "100%",
});

globalStyle("body *", {
  wordBreak: "keep-all",
});

globalStyle("main > div", {
  animation: `${fadeInAnimation} ease 500ms`,
  animationFillMode: "linear",
  animationIterationCount: 1,
});

globalStyle("p, label, button, a, div", {
  color: themeVars.colors.text.normal,
});

// global font

globalFontFace("MaplestoryOTFLight", {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFLight.woff') format('woff')",
});

globalFontFace("NEXONLv1GothicOTFRegular", {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Light.woff') format('woff')",
});

// globalFontFace("D2Coding", {
//   src: "url('https://cdn.jsdelivr.net/gh/everydayminder/assets/subset-D2Codingligature.woff') format('woff')",
// });

// article css
globalStyle("article", {
  backgroundColor: "transparent !important",
});

// article font

globalStyle("article", {
  // fontFamily: "NEXONLv1GothicOTFRegular, sans-serif !important",
});

globalStyle("article code ", {
  // fontFamily: "NEXONLv1GothicOTFRegular, sans-serif !important",
});

globalStyle("article pre code", {
  // fontFamily: "D2Coding, sans-serif !important",
});

// article image

globalStyle("article img", {});

globalStyle("article .markdown-image-box", {
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "center",
  // margin: "0 auto",
  // gap: 5,
  // "@media": {
  //   "screen and (max-width: 578px)": {
  //     width: "95% !important",
  //   },
  // },
});
