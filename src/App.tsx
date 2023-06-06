import { usePlayMode } from "hooks";
import { HomePage } from "pages";
import React from "react";
import { FetchingType, PlayMode } from "types";
import { GlobalStyles } from "utils";

function App() {
  const [selectedTab, setSelectedTab] =
    React.useState<FetchingType>("creatures");
  const [playMode, setPlayMode] = React.useState<PlayMode>("default");
  const [playModeTheme, togglePlayMode] = usePlayMode(playMode, selectedTab);

  const memoizedSelectedTab = React.useMemo(() => selectedTab, [selectedTab]);
  const memoizedPlayMode = React.useMemo(() => playMode, [playMode]);
  const memoizedSetSelectedTab = React.useCallback(setSelectedTab, [
    setSelectedTab,
  ]);
  const memoizedSetPlayMode = React.useCallback(setPlayMode, [setPlayMode]);
  const memoizedTogglePlayMode = React.useCallback(togglePlayMode, [
    togglePlayMode,
  ]);

  return (
    <main>
      <GlobalStyles theme={playModeTheme} />
      <HomePage
        selectedTab={memoizedSelectedTab}
        playMode={memoizedPlayMode}
        setSelectedTab={memoizedSetSelectedTab}
        setPlayMode={memoizedSetPlayMode}
        togglePlayMode={memoizedTogglePlayMode}
      />
    </main>
  );
}

export default App;
