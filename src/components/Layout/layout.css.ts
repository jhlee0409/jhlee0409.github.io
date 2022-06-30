import { vars } from "@/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const contentLayout = style({
  width: "100%",
  overflow: "hidden",
});

export const contentWrapper = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "90px 2vw",
  display: "flex",
  gap: 50,
  width: "100%",
  position: "relative",
  "@media": {
    "screen and (max-width: 578px)": {
      padding: "20px 25px 0 20px",
    },
  },
});

export const bodyLayout = style({
  overflow: "overlay",
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
    border: "5px solid #1b1b1b",
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
