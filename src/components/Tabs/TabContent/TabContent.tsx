import React from "react";

import { Gallery } from "components/Gallery";
import { CreatureFilter, Content, PlayMode } from "types";
import { useFetchContent } from "hooks";
import { TogglePlayMode } from "components/TogglePlayMode";
import { ToggleCreatureMode } from "components/ToggleCreatureMode";
import { Loading } from "components";
import { Section } from "./styled";

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

  React.useEffect(() => {
    if (selectedTab === "monsters") {
      const isDefaultMode: boolean = playMode === "default" ? false : true;

      toggleTheme(isDefaultMode);
    }
  }, [playMode, selectedTab, toggleTheme]);

  if (isError) {
    return <h1>OH NOOOOO</h1>;
  }
  if (isLoading) {
    return <Loading />;
  }
  const handleTogglePlayMode = (playMode: PlayMode) => {
    setPlayMode(playMode);
  };

  const handleToggleCreatureMode = (option: CreatureFilter) =>
    setCreatureFilter(option);

  return (
    <Section>
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
    </Section>
  );
};

export { TabContent };
