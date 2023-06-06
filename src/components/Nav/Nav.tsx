import React from "react";

import { CATEGORIES } from "./helpers";
import { Content, CreatureFilter, FetchingType, PlayMode, Tab } from "types";

import { IconButton, TogglePlayMode, ToggleCreatureMode } from "components";

import { NavContainer, TabNavContainer } from "./styled";
export interface NavProps {
  handleClick: (index: number, selectedTabLabel: FetchingType) => void;
  selectedIndex: number;
  togglePlayMode: (isDefaultPlayMode: boolean) => void;
  content: Content[];
  handleToggleCreatureMode: (option: CreatureFilter) => void;
  handleTogglePlayMode: (newPlayMode: PlayMode) => void;
  playMode: PlayMode;
  creatureFilter: CreatureFilter;
  isContentLoading: boolean;
  isToggleVisible: boolean;
}
const Nav: React.FC<NavProps> = ({
  selectedIndex,
  handleClick,
  content,
  handleToggleCreatureMode,
  handleTogglePlayMode,
  playMode,
  creatureFilter,
  isContentLoading,
  isToggleVisible,
}) => {
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
      isToggleVisible={isToggleVisible}
    >
      <TabNavContainer isToggleVisible={isToggleVisible}>
        {CATEGORIES.map((cat, index) => {
          return (
            <li key={`tab-${index}`}>
              <IconButton
                isActive={selectedIndex === index}
                onClick={() => handleTabClick(index, cat)}
                icon={`${cat}.png`}
                useIndicator
                label={cat}
              />
            </li>
          );
        })}
      </TabNavContainer>
      <>
        {!isContentLoading && (
          <>
            {content[0].category === "creatures" && (
              <ToggleCreatureMode
                showToggle={content[0].category === "creatures"}
                handleToggle={handleToggleCreatureMode}
                currFilter={creatureFilter}
              />
            )}
            {content[0].category === "monsters" && (
              <TogglePlayMode
                showToggle={content[0].category === "monsters"}
                playMode={playMode}
                togglePlayMode={handleTogglePlayMode}
              />
            )}
          </>
        )}
      </>
    </NavContainer>
  );
};

export { Nav };
