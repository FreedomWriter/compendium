import React from "react";
import { PlayMode, TabsProps } from "types";

import {
  VisuallyHidden,
  IconButton,
  TabContent,
  ToggleMode,
  MasterModeMonsters,
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
            <>
              {playMode === "master" ? (
                <MasterModeMonsters toggleTheme={toggleTheme} />
              ) : (
                <TabContent
                  key={`tabpanel-${index}`}
                  isHidden={selectedTab !== tab.label}
                >
                  <Container key={index} content={tab?.content} />
                </TabContent>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

function Container(contentData: any) {
  return (
    <>
      {contentData.content.map((item: any) => (
        <div key={item.id}>
          <div
            style={{
              display: "flex",
              width: "150px",
              height: "150px",
            }}
          >
            {item.category}
          </div>
        </div>
      ))}
    </>
  );
}

export { TabManager };
