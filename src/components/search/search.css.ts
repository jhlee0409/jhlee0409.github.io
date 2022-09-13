import { keyframes, style } from "@vanilla-extract/css";

const fadeIn = keyframes({
  "0%": { transform: "translateY(10px)", opacity: 0 },
  "100%": { transform: "translateY(0)", opacity: 1 },
});

export const searchInput = style({
  height: 35,
  padding: "0 20px",
  outline: "none",
  borderRadius: 4,
  border: "1px solid #ececec",
  width: "100%",
  selectors: {
    "&::placeholder": {
      color: "#ececec",
    },
  },
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
  width: "calc(100vw - 70px)",
  maxWidth: 750,
  height: 500,
  borderRadius: 12,
  padding: 30,
  backgroundColor: "white",
  animation: `${fadeIn} 300ms`,
});
