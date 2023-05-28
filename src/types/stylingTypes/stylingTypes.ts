import { DefaultTheme } from "styled-components";

export type ColorScheme = {
  background: string;
  font: string;
  primary: string;
  secondary: string;
  error: string;
  success: string;
  darkBackground: string;
  darkFont: string;
  darkPrimary: string;
  default: string;
  isDarkMode: boolean;
};

export interface CustomTheme extends DefaultTheme, ColorScheme {}
