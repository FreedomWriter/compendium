import React from "react";

import { CATEGORIES } from "./helpers";
import { NavProps, Tab } from "types";

import { IconButton, TogglePlayMode, ToggleCreatureMode } from "components";

import { NavContainer, TabNavContainer } from "./styled";

const Nav = ({
  selectedIndex,
  handleClick,
  content,
  handleToggleCreatureMode,
  handleTogglePlayMode,
  playMode,
  creatureFilter,
  isContentLoading,
}: NavProps) => {
  const handleTabClick = React.useCallback(
    (index: number, currTab: Tab) => {
      handleClick(index, currTab);
    },
    [handleClick]
  );

  return (
    <NavContainer
      useMasterTheme={
        !isContentLoading &&
        playMode === "master" &&
        content[0].category === "monsters"
      }
    >
      <TabNavContainer>
        {CATEGORIES.map((cat, index) => (
          <li key={`tab-${index}`}>
            <IconButton
              isActive={selectedIndex === index}
              onClick={() => handleTabClick(index, cat)}
              icon={cat}
              useIndicator
            />
          </li>
        ))}
      </TabNavContainer>
      {!isContentLoading && (
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
        </>
      )}
    </NavContainer>
  );
};

export { Nav };
