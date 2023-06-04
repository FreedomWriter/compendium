import React from "react";
import { useFetchContent, useTheme } from "hooks";
import { GlobalStyles } from "utils";
import { Gallery, Loading, Nav, TogglePlayMode } from "components";
import { ToggleCreatureMode } from "components/ToggleCreatureMode";
import { PlayMode, CreatureFilter } from "types";

function App() {
  const [theme, toggleTheme] = useTheme();
  const [selectedTab, setSelectedTab] = React.useState("creatures");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [playMode, setPlayMode] = React.useState<PlayMode>("default");
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
      toggleTheme(false);
      setSelectedTab(selectedTabLabel);
    },
    [toggleTheme]
  );

  const handleTogglePlayMode = React.useCallback(
    (newPlayMode: PlayMode) => {
      setPlayMode(newPlayMode);
      if (selectedTab === "monsters") {
        const isDefaultMode: boolean = newPlayMode === "default" ? false : true;

        toggleTheme(isDefaultMode);
      }
    },
    [selectedTab, toggleTheme]
  );

  const handleToggleCreatureMode = React.useCallback(
    (option: CreatureFilter) => setCreatureFilter(option),
    []
  );

  if (isError) {
    return <h1>OH NOOOOO</h1>;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <GlobalStyles theme={theme} />
      <Nav
        selectedIndex={selectedIndex}
        handleClick={handleTabClick}
        toggleTheme={toggleTheme}
      />
      <ToggleCreatureMode
        showToggle={content[0].category === "creatures"}
        handleToggle={handleToggleCreatureMode}
        currFilter={creatureFilter}
      />

      <TogglePlayMode
        showToggle={content[0].category === "monsters"}
        playMode={playMode}
        togglePlayMode={handleTogglePlayMode}
      />
      <Gallery content={content} />
    </main>
  );
}

export default App;
