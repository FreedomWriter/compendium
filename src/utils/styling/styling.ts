import { css } from "styled-components";
import { ColorScheme } from "types";

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
  isDarkMode:
    !!window.matchMedia("(prefers-color-scheme: dark)").matches || false,
};

const sizes = {
  large: 990,
  medium: 800,
  small: 500,
};

type MediaQueryFunction = (
  ...args: Parameters<typeof css>
) => ReturnType<typeof css>;

export const media: Record<string, MediaQueryFunction> = Object.keys(
  sizes
).reduce<Record<string, MediaQueryFunction>>((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label as keyof typeof sizes]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
