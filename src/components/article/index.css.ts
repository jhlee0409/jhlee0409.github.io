import { vars } from "@/styles/vars.css";
import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const Base = style({
  display: "flex",
  height: "100vh",
  gap: 40,
});

globalStyle(`${Base} > section`, {});

export const tagWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "5px 10px",
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "0.8em",
    },
  },
});

globalStyle(`${tagWrapper} > span`, {});

export const overviewWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: "40px 20px",
  backgroundColor: "rgba(0 0 0 / 20%)",
  borderRadius: 4,
  marginBottom: 30,
  "@media": {
    "screen and (max-width: 578px)": {
      padding: 10,
    },
  },
});

globalStyle(`${overviewWrapper} > h1`, {
  fontWeight: "bold",
  fontSize: "1.8em",
  lineHeight: "1.8em",
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "1.2em",
    },
  },
});
globalStyle(`${overviewWrapper} > p`, {
  fontSize: "1em",
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "0.8em",
    },
  },
});

export const line = style({
  height: 4,
  backgroundColor: "white",
  width: "100%",
  marginTop: "2em",
  borderRadius: vars.borderRadius.base,
  "@media": {
    "screen and (max-width: 578px)": {
      borderRadius: vars.borderRadius.mobile,
    },
  },
});

export const markdownArticle = style({});

globalStyle(`${markdownArticle} h1`, {
  color: themeVars.colors.text.articleHTag,
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "1.4em",
    },
  },
});

globalStyle(`${markdownArticle} h2`, {
  color: themeVars.colors.text.articleHTag,
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "1.2em",
    },
  },
});

globalStyle(`${markdownArticle} h3`, {
  color: themeVars.colors.text.articleHTag,
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "1.1em",
    },
  },
});
globalStyle(`${markdownArticle} h4`, {
  color: themeVars.colors.text.articleHTag,
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "1em",
    },
  },
});

globalStyle(`${markdownArticle} p`, {
  "@media": {
    "screen and (max-width: 578px)": {
      margin: "10px 0",
    },
  },
});

globalStyle(`${markdownArticle} li, p, span, a`, {
  color: themeVars.colors.text.articleHTag,
  "@media": {
    "screen and (max-width: 578px)": {
      fontSize: "0.9em",
    },
  },
});

globalStyle(`${markdownArticle} ol`, {
  "@media": {
    "screen and (max-width: 578px)": {
      padding: "0 0 0 15px",
    },
  },
});

globalStyle(`${markdownArticle} ul`, {
  "@media": {
    "screen and (max-width: 578px)": {
      padding: "0 0 0 15px",
    },
  },
});
