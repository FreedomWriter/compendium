import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    font: string;
    primary: string;
    secondary: string;
    error: string;
    success: string;
    masterBackground: string;
    masterFont: string;
    default: string;
    isDefaultPlayMode: boolean;
  }
}
