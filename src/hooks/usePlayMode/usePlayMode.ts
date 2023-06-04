import React, { useEffect, useState } from "react";

import { COLORS } from "utils";
import { CustomTheme } from "types";

const defaultPlayMode: CustomTheme = {
  ...COLORS,
  default: COLORS.background,
};

const masterPlayMode: CustomTheme = {
  ...COLORS,
  primary: COLORS.masterPrimary,
  background: COLORS.masterBackground,
  font: COLORS.masterFont,
  default: COLORS.masterBackground,
};

export type UsePlayMode = [CustomTheme, (manual?: boolean) => void];

const usePlayMode = (): UsePlayMode => {
  const [isDefaultPlayMode, setIsDefaultPlayMode] = useState(false);
  const [playMode, setPlayMode] = useState<CustomTheme>({
    ...defaultPlayMode,
    isDefaultPlayMode,
  });

  const togglePlayMode = React.useCallback((manual?: boolean) => {
    if (manual !== undefined) {
      return setIsDefaultPlayMode(manual);
    }
    setIsDefaultPlayMode((prevMode) => !prevMode);
  }, []);

  useEffect(() => {
    const selectedPlayMode = isDefaultPlayMode
      ? masterPlayMode
      : defaultPlayMode;
    setPlayMode({ ...selectedPlayMode, isDefaultPlayMode });
  }, [isDefaultPlayMode]);

  return [playMode, togglePlayMode];
};

export { usePlayMode };
