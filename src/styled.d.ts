import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    font: string;
    primary: string;
    secondary: string;
    error: string;
    success: string;
    darkBackground: string;
    darkFont: string;
    default: string;
    isDarkMode: boolean;
    hideButtons?: boolean;
  }
}
