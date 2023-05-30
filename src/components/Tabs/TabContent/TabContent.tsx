import React from "react";

import { Gallery } from "components/Gallery";
import { Content, PlayMode } from "types";
import { CreatureFilter, useFetchContent } from "hooks";
import { TogglePlayMode } from "components/TogglePlayMode";
import { ToggleCreatureMode } from "components/ToggleCreatureMode";

export type TabContentProps = {
  selectedTab: string;
  toggleTheme: (isDefaultMode: boolean) => void;
};

const TabContent = ({ selectedTab, toggleTheme }: TabContentProps) => {
  const [playMode, setPlayMode] = React.useState<PlayMode>("default");
  const [creatureFilter, setCreatureFilter] =
    React.useState<CreatureFilter>("all");

  const { content, isError, isLoading } = useFetchContent({
    type: selectedTab,
    playMode,
    creatureFilter,
  });

  if (isError) {
    return <h1>OH NOOOOO</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleTogglePlayMode = (playMode: PlayMode) => {
    setPlayMode(playMode);
    const isDefaultMode: boolean = playMode === "default" ? false : true;

    toggleTheme(isDefaultMode);
  };

  const handleToggleCreatureMode = (option: CreatureFilter) =>
    setCreatureFilter(option);

  return (
    <>
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

      <Gallery
        category={content[0].category}
        content={content as Content[]}
        playMode={playMode}
      />
    </>
  );
};

export { TabContent };
