import React, { useEffect, useState } from "react";

import { COLORS } from "utils";
import { CustomTheme, FetchingType, PlayMode } from "types";

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

const usePlayMode = (
  playMode: PlayMode,
  selectedTab: FetchingType
): UsePlayMode => {
  const [isDefaultPlayMode, setIsDefaultPlayMode] = useState(
    !!COLORS.isDefaultPlayMode
  );
  const [playModeTheme, setPlayModeTheme] = useState<CustomTheme>({
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
    const selectedPlayMode =
      playMode === "master" && selectedTab === "monsters"
        ? masterPlayMode
        : defaultPlayMode;
    setPlayModeTheme({ ...selectedPlayMode, isDefaultPlayMode });
  }, [isDefaultPlayMode, playMode, selectedTab]);

  const memoizedPlayModeTheme = React.useMemo(
    () => playModeTheme,
    [playModeTheme]
  );

  return [memoizedPlayModeTheme, togglePlayMode];
};

export { usePlayMode };
