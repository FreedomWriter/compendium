import React from "react";
import { useFetchContent, usePlayMode } from "hooks";
import { GlobalStyles } from "utils";
import { Gallery, Loading, Nav } from "components";

import { CreatureFilter, PlayMode } from "types";

function App() {
  const [playMode, setPlayMode] = React.useState<PlayMode>("default");
  const [selectedTab, setSelectedTab] = React.useState("creatures");
  const [playModeTheme, togglePlayMode] = usePlayMode(playMode, selectedTab);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [creatureFilter, setCreatureFilter] =
    React.useState<CreatureFilter>("all");

  const { content, isError, isLoading } = useFetchContent({
    type: selectedTab,
    playMode,
    creatureFilter,
  });

  const handleTabClick = React.useCallback(
    (index: number, selectedTabLabel: string) => {
      setSelectedIndex(index);
      togglePlayMode(false);
      setSelectedTab(selectedTabLabel);
    },
    [togglePlayMode]
  );

  const handleTogglePlayMode = React.useCallback(
    (newPlayMode: PlayMode) => {
      setPlayMode(newPlayMode);
      if (selectedTab === "monsters") {
        const isDefaultMode: boolean = newPlayMode === "default" ? false : true;

        togglePlayMode(isDefaultMode);
      }
    },
    [selectedTab, togglePlayMode]
  );

  const handleToggleCreatureMode = React.useCallback(
    (option: CreatureFilter) => setCreatureFilter(option),
    []
  );

  if (isError) {
    return <h1>OH NOOOOO</h1>;
  }

  return (
    <main>
      <GlobalStyles theme={playModeTheme} />
      <Nav
        selectedIndex={selectedIndex}
        handleClick={handleTabClick}
        togglePlayMode={togglePlayMode}
        handleToggleCreatureMode={handleToggleCreatureMode}
        handleTogglePlayMode={handleTogglePlayMode}
        playMode={playMode}
        creatureFilter={creatureFilter}
        content={content}
        isContentLoading={isLoading}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Gallery
          key={content[0]?.category + creatureFilter + playMode}
          content={content}
        />
      )}
    </main>
  );
}

export default App;
