import { css } from "styled-components";
import { ColorScheme } from "types";

export const NAV_HEIGHT = 124;
export const GALLERY_ROWS_SMALL = "auto";
export const GALLERY_COLS_SMALL = 2;
export const GALLERY_ROW_GAP_SMALL = 48;
export const GALLERY_COL_GAP_SMALL = 16;

export const GALLERY_ROW_GAP_MEDIUM = 40;
export const GALLERY_COL_GAP_MEDIUM = 40;
export const GALLERY_ROWS_MEDIUM = 3;
export const GALLERY_COLS_MEDIUM = 4;

export const GALLERY_ROWS_LARGE = 3;
export const GALLERY_COLS_LARGE = 5;

export const COLORS: ColorScheme = {
  background: "hsl(210, 15%, 95%)",
  font: "hsl(355, 68%, 4%)",
  primary: "hsl(357,15%,30%)",
  secondary: "hsl(41,38%,50%)",
  error: "hsl(16,100%,46%)",
  success: "hsl(90,49%,50%)",
  darkBackground: "hsla(355, 68%, 4%, .92)",
  darkFont: "hsl(41,38%,56%)",
  darkPrimary: "hsl(357,15%,50%)",
  default: "hsl(210, 15%, 95%)",
  isDarkMode: false,
};

const sizes = {
  large: 990,
  medium: 500,
  small: 500,
};

type MediaQueryFunction = (
  ...args: Parameters<typeof css>
) => ReturnType<typeof css>;

export const media: Record<string, MediaQueryFunction> = Object.keys(
  sizes
).reduce<Record<string, MediaQueryFunction>>((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label as keyof typeof sizes]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
