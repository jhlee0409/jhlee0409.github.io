import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

const fadeIn = keyframes({
  "0%": { transform: "translateY(10px)", opacity: 0 },
  "100%": { transform: "translateY(0)", opacity: 1 },
});

export const searchInputBox = style({
  display: "flex",
  alignItems: "center",
  height: 50,
  minHeight: 50,
  padding: "20px 25px",
  "@media": {
    "screen and (max-width: 578px)": {
      padding: "0 10px",
      height: 40,
      minHeight: 40,
    },
  },
});

globalStyle(`${searchInputBox} > div`, {
  width: 22,
  display: "flex",
  alignItems: "center",
});

export const searchInput = style({
  padding: "0 10px",
  outline: "none",
  fontSize: "1rem",
  borderRadius: 4,
  border: "none",
  width: "100%",
  selectors: {
    "&::placeholder": {
      color: "#b1b1b1b1",
    },
  },
});

export const innerContent = style({
  width: "calc(100vw - 30px)",
  backgroundColor: "white",
  maxWidth: 750,
  height: 500,
  borderRadius: 12,
  padding: 10,
  animation: `${fadeIn} 300ms`,
  position: "relative",
});

globalStyle(`${innerContent} > div`, {
  height: "100%",
});

export const searchedList = style({
  listStyle: "none",
  height: "calc(100% - 50px)",
  overflowY: "auto",
  overflowX: "hidden",
  borderRadius: 4,
  "@media": {
    "screen and (max-width: 578px)": {
      height: "calc(100% - 50px)",
    },
  },
  "::-webkit-scrollbar": {
    width: 16,
  },
  "::-webkit-scrollbar-track": {
    borderRadius: 5,
    backgroundColor: "white",
    display: "none",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#ddd",
    borderRadius: 20,
    border: "5px solid white",
    transition: "background-color 300ms ease-in",
  },
  "::-webkit-scrollbar-button": {
    display: "none",
  },
  selectors: {
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: vars.color.point,
    },
    "&::-webkit-scrollbar-thumb:active": {
      backgroundColor: "#dcdcdc",
    },
  },
});

export const searchLink = style({
  transition: "all 150ms linear",
  width: "100%",
  borderRadius: 4,
  // padding: "10px 20px",
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(0 0 0 / 5%)",
    },
  },
});

globalStyle(`${searchLink} a `, {
  display: "inline-block",
  color: "black",
  padding: 10,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  width: "100%",
  fontSize: "1rem",
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "0.8rem",
    },
  },
});
