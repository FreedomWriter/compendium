import React, { useEffect, useState } from "react";

import { COLORS } from "utils";
import { CustomTheme } from "types";

const lightTheme: CustomTheme = {
  ...COLORS,
  default: COLORS.background,
};

const darkTheme: CustomTheme = {
  ...COLORS,
  primary: COLORS.darkPrimary,
  background: COLORS.darkBackground,
  font: COLORS.darkFont,
  default: COLORS.darkBackground,
};

const useTheme = (): [CustomTheme, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState<CustomTheme>({
    ...lightTheme,
    isDarkMode,
  });

  const toggleTheme = React.useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  useEffect(() => {
    const prefersDarkMode =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    const selectedTheme = isDarkMode ? darkTheme : lightTheme;
    setTheme({ ...selectedTheme, isDarkMode });
  }, [isDarkMode]);

  return [theme, toggleTheme];
};

export { useTheme };
