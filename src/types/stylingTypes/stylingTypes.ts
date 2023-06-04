import { DefaultTheme } from "styled-components";

export type ColorScheme = {
  background: string;
  font: string;
  primary: string;
  secondary: string;
  error: string;
  success: string;
  masterBackground: string;
  masterFont: string;
  masterPrimary: string;
  default: string;
  isDefaultPlayMode: boolean;
};

export interface CustomTheme extends DefaultTheme, ColorScheme {}
