import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: { "@media": "screen and (max-width: 578px)" },
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: {},
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],
  properties: {
    position: ["sticky", "fixed"],
    display: ["none", "flex"],
    transform: ["translateX(0)", "translateX(-100%)"],
    flexDirection: ["row", "column"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end"],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    marginTop: vars.spaceVh,
    paddingRight: vars.space,
    width: ["100vw", "fit-content"],
    height: ["100vh"],
    borderRadius: vars.borderRadius,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    textAlign: ["center"],
    fontWeight: ["bold", "normal"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["alignItems", "justifyContent"],
    typeSize: ["fontSize", "lineHeight"],
  },
});

const colorModeProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: vars.color,
    background: vars.color,
    backgroundColor: vars.color,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorModeProperties
);
