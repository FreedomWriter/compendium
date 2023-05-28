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

export type UseThemeResponse = [CustomTheme, (manual?: boolean) => void];

const useTheme = (): UseThemeResponse => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState<CustomTheme>({
    ...lightTheme,
    isDarkMode,
  });

  const toggleTheme = React.useCallback((manual?: boolean) => {
    if (manual !== undefined) {
      return setIsDarkMode(manual);
    }
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  useEffect(() => {
    const selectedTheme = isDarkMode ? darkTheme : lightTheme;
    setTheme({ ...selectedTheme, isDarkMode });
  }, [isDarkMode]);

  return [theme, toggleTheme];
};

export { useTheme };
