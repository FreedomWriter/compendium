import React from "react";

import { Gallery } from "components/Gallery";
import { Content, PlayMode } from "types";
import { useFetchContent } from "hooks";
import { TogglePlayMode } from "components/TogglePlayMode";

export type TabContentProps = {
  selectedTab: string;
  toggleTheme: (isDefaultMode: boolean) => void;
};

const TabContent = ({ selectedTab, toggleTheme }: TabContentProps) => {
  const [playMode, setPlayMode] = React.useState<PlayMode>("default");

  const { content, isError, isLoading } = useFetchContent({
    type: selectedTab,
    playMode,
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
    console.log({ isDefaultMode });
    toggleTheme(isDefaultMode);
  };

  return (
    <>
      <TogglePlayMode
        showToggle={content[0].category === "creatures"}
        playMode={playMode}
        TogglePlayMode={handleTogglePlayMode}
      />

      <TogglePlayMode
        showToggle={content[0].category === "monsters"}
        playMode={playMode}
        TogglePlayMode={handleTogglePlayMode}
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
