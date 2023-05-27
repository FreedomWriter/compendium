import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
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
  }
}
