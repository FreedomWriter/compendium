import React from "react";
import { useFetchContent } from "hooks";
import { Gallery, Loading, Nav } from "components";

import { CreatureFilter, FetchingType, PlayMode } from "types";

interface HomePageProps {
  selectedTab: FetchingType;
  setSelectedTab: (value: FetchingType) => void;
  playMode: PlayMode;
  setPlayMode: (value: PlayMode) => void;
  togglePlayMode: (value: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  setPlayMode,
  selectedTab,
  setSelectedTab,
  playMode,
  togglePlayMode,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [creatureFilter, setCreatureFilter] =
    React.useState<CreatureFilter>("all");

  const { content, isError, isLoading } = useFetchContent({
    type: selectedTab,
    playMode,
    creatureFilter,
  });
  const [isToggleVisible, setIsToggleVisible] = React.useState(true); // passed to Nav to help control nav height on mobile

  const handleTabClick = React.useCallback(
    (index: number, selectedTabLabel: FetchingType) => {
      setSelectedIndex(index);
      togglePlayMode(false);
      setSelectedTab(selectedTabLabel);
      setIsToggleVisible(
        selectedTabLabel === "creatures" || selectedTabLabel === "monsters"
      );
    },
    [setSelectedTab, togglePlayMode]
  );

  const handleTogglePlayMode = React.useCallback(
    (newPlayMode: PlayMode) => {
      setPlayMode(newPlayMode);
      if (selectedTab === "monsters") {
        const isDefaultMode: boolean = newPlayMode === "default" ? false : true;

        togglePlayMode(isDefaultMode);
      }
    },
    [selectedTab, setPlayMode, togglePlayMode]
  );

  const handleToggleCreatureMode = React.useCallback(
    (option: CreatureFilter) => setCreatureFilter(option),
    []
  );

  if (isError) {
    return <h1>OH NOOOOO</h1>;
  }
  return (
    <>
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
        isToggleVisible={isToggleVisible}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Gallery
          key={content[0]?.category + creatureFilter + playMode}
          content={content}
          isToggleVisible={isToggleVisible}
        />
      )}
    </>
  );
};

export { HomePage };
