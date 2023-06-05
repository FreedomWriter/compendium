import { css } from "styled-components";
import { ColorScheme } from "types";

export const NAV_HEIGHT = 124;
export const GALLERY_ROWS_SMALL = "auto";
export const GALLERY_COLS_SMALL = 2;
export const GALLERY_ROW_GAP_SMALL = 40;
export const GALLERY_COL_GAP_SMALL = 40;

export const GALLERY_ROW_GAP_MEDIUM = 32;
export const GALLERY_COL_GAP_MEDIUM = 32;
export const GALLERY_ROWS_MEDIUM = 4;
export const GALLERY_COLS_MEDIUM = 3;

export const GALLERY_ROWS_LARGE = 3;
export const GALLERY_COLS_LARGE = 5;
export const GALLERY_ROW_GAP_LARGE = 16;
export const GALLERY_COL_GAP_LARGE = 16;

export const GALLERY_ROWS_XL = 5;
export const GALLERY_COLS_XL = 6;
export const GALLERY_ROW_GAP_XL = 16;
export const GALLERY_COL_GAP_XL = 16;

export const COLORS: ColorScheme = {
  background: "hsl(210, 15%, 95%)",
  font: "hsl(355, 68%, 4%)",
  primary: "hsl(357,15%,30%)",
  secondary: "hsl(41,38%,50%)",
  error: "hsl(16,100%,46%)",
  success: "hsl(90,49%,50%)",
  masterBackground: "hsla(355, 68%, 4%, .92)",
  masterFont: "hsl(41,38%,56%)",
  masterPrimary: "hsl(357,15%,50%)",
  default: "hsl(210, 15%, 95%)",
  isDefaultPlayMode: false,
};

export const BREAKPOINTS = {
  small: 0,
  medium: 768,
  large: 1366,
  xl: 1920,
};

type MediaQueryFunction = (
  ...args: Parameters<typeof css>
) => ReturnType<typeof css>;

export const media: Record<string, MediaQueryFunction> = Object.keys(
  BREAKPOINTS
).reduce<Record<string, MediaQueryFunction>>((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label as keyof typeof BREAKPOINTS]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const TAB_HEIGHT = `calc(100vh - ${
  NAV_HEIGHT + 216
}px); // account for padding
  ${media.large`
  // toggles, which are only visible for certain pages,
  // move from under the tabs to next to them, account for that
    height: calc(100vh - ${NAV_HEIGHT + 112}px); // account for padding
  `}`;
