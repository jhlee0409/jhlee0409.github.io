import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

const root = createGlobalTheme("#app", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  fonts: {
    heading: "Georgia, Times, Times New Roman, serif",
    body: "system-ui",
  },
});

const colors = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  pointColor: null,
  invert: null,
  text: {
    normal: null,
    main: null,
    title: null,
    bitTitle: null,
    articleHTag: null,
  },
});

export const lightTheme = createTheme(colors, {
  primary: "#1E40AF",
  secondary: "#B8DFD8",
  background: "#E8F6EF",
  pointColor: "#3c3c3c",
  invert: `0`,
  text: {
    normal: "#3c3c3c",
    main: "#213547",
    title: "#3c3c3c",
    bitTitle: "#B8DFD8",
    articleHTag: "#3c3c3c",
  },
});

export const darkTheme = createTheme(colors, {
  primary: "#1b1b1b",
  secondary: "#202020",
  background: "#1b1b1b",
  pointColor: "#caf1f8",
  invert: `1`,
  text: {
    normal: "#ffffff",
    main: "#c3c6c6",
    title: "#ececec",
    bitTitle: "#caf1f8",
    articleHTag: "#c9d1d9",
  },
});

export const themeVars = { ...root, colors };
