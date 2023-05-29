import React from "react";
import { PlayMode, TabsProps } from "types";

import {
  VisuallyHidden,
  IconButton,
  ToggleMode,
  MasterModeMonsters,
  Gallery,
} from "components";

import { NavContainer, TabNavContainer } from "./styled";

const TabManager = ({
  tabsConfig,
  defaultIndex = 0,
  toggleTheme,
}: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);
  const [selectedTab, setSelectedTab] = React.useState(
    tabsConfig[selectedIndex].label
  );
  const [playMode, setPlayMode] = React.useState<PlayMode>("default");

  const handleToggleMode = (playMode: PlayMode) => {
    setPlayMode(playMode);
    const isDarkMode: boolean = playMode === "default" ? false : true;
    toggleTheme(isDarkMode);
  };

  const handleClick = React.useCallback(
    (index: number) => {
      setSelectedIndex(index);
      setPlayMode("default");
      toggleTheme(false);
      setSelectedTab(tabsConfig[index].label);
    },
    [tabsConfig, toggleTheme]
  );

  return (
    <>
      <NavContainer>
        <TabNavContainer>
          {tabsConfig.map((tab, index) => (
            <li key={`tab-${index}`}>
              <IconButton
                isActive={selectedIndex === index}
                onClick={() => handleClick(index)}
              >
                {tab.icon}
                <VisuallyHidden>{tab.label}</VisuallyHidden>
              </IconButton>
            </li>
          ))}
        </TabNavContainer>
      </NavContainer>
      <div>
        {selectedTab === "monsters" && (
          <ToggleMode playMode={playMode} toggleMode={handleToggleMode} />
        )}
        {tabsConfig.map((tab, index) => {
          return (
            <React.Fragment key={`tabpanel-${index}`}>
              {playMode === "master" ? (
                <MasterModeMonsters
                  isHidden={selectedTab !== tab.label}
                  toggleTheme={toggleTheme}
                />
              ) : (
                <Gallery
                  isHidden={selectedTab !== tab.label}
                  key={index}
                  content={tab.content}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export { TabManager };
