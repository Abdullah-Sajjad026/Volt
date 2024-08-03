import { getResponsiveThemeTokens } from "modules/shared/shared.utils";

export const fontSize = "14px";
export const lineHeight = "20px";

export const fontFamily = '"Inter", "sans-serif"';

const defaultHeadingProps = (palette) => ({
  fontFamily,
  lineHeight,
  fontWeight: 400,
  color: palette.text.heading,
});

/**
 * @param { import("@mui/material").PaletteOptions } palette
 * @returns { import("@mui/material/styles/createTypography").TypographyOptions }
 */
const typography = (palette) => {
  const headingProps = defaultHeadingProps(palette);

  return {
    fontSize: 14,
    lineHeight: 20,
    fontFamily,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      ...headingProps,
      ...getResponsiveThemeTokens("xs", {
        fontSize: "20px",
        lineHeight: "24px",
      }),
      ...getResponsiveThemeTokens("sm", {
        fontSize: "26px",
        lineHeight: "32px",
      }),
      ...getResponsiveThemeTokens("md", {
        fontSize: "30px",
        lineHeight: "36px",
      }),
    },
    h2: {
      ...headingProps,
      ...getResponsiveThemeTokens("xs", {
        fontSize: "18px",
        lineHeight: "22px",
      }),
      ...getResponsiveThemeTokens("sm", {
        fontSize: "22px",
        lineHeight: "26px",
      }),
    },
    h3: {
      ...headingProps,
      fontSize: "14px",
    },
    h4: {
      ...headingProps,
      fontSize: "18px",
    },
    caption: {
      fontFamily,
      fontWeight: 500,
      color: palette.text.primary,
      fontSize: "22px",
      lineHeight: "30px",
    },
    body1: {
      fontFamily,
      fontWeight: 400,
      color: palette.text.primary,
      fontSize: "16px",
      lineHeight: "24px",
    },
    subtitle1: {
      ...headingProps,
      fontSize,
    },
    subtitle2: {
      ...headingProps,
      fontSize: "12px",
      lineHeight: "16px",
    },
    legend: {
      fontFamily,
      fontWeight: 400,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: palette.text.primary,
      fontSize: "12px",
      lineHeight: "16px",
    },
  };
};

export default typography;
