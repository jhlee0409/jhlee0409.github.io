import { keyframes, style } from "@vanilla-extract/css";

const fadeIn = keyframes({
  "0%": { transform: "translateY(10px)", opacity: 0 },
  "100%": { transform: "translateY(0)", opacity: 1 },
});

export const searchBtn = style({
  filter: "invert(1)",
  width: 30,
  padding: 5,
  display: "flex",
  alignItems: "center",
  borderRadius: 8,
  transition: "all 150ms linear",
  border: "2px solid transparent",
  ":hover": {
    border: "2px solid black",
  },
});

export const innerContent = style({
  maxWidth: "50vw",
  width: "100%",

  height: 500,
  borderRadius: 12,
  padding: 30,
  backgroundColor: "white",
  animation: `${fadeIn} 300ms`,
});
