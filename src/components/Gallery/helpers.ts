import { BREAKPOINTS } from "utils";

export const getNumOfItemsToDisplay = (contentLength: number) => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= BREAKPOINTS.xl) {
    return 30;
  }
  if (windowWidth >= BREAKPOINTS.large) {
    return 15;
  }
  if (windowWidth >= BREAKPOINTS.medium) {
    return 12;
  }
  return contentLength;
};
