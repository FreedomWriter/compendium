import React from "react";
import { TabsProps } from "types";

import { VisuallyHidden, IconButton, TabContent } from "components";
// import {  } from "../TabContent";
import { NavContainer, TabNavContainer } from "./styled";

export const TabManager = ({ tabsConfig, defaultIndex = 0 }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);
  const selectedContent = tabsConfig[selectedIndex].label.toLowerCase();
  console.log({ selectedContent });
  console.count();

  const handleClick = (index: number) => setSelectedIndex(index);
  return (
    <>
      <NavContainer>
        <TabNavContainer>
          {tabsConfig.map((tab, index) => (
            <li key={`tab-${index}`}>
              <IconButton onClick={() => handleClick(index)}>
                {tab.icon}
                <VisuallyHidden>{tab.label}</VisuallyHidden>
              </IconButton>
            </li>
          ))}
        </TabNavContainer>
      </NavContainer>
      <div>
        {tabsConfig.map((tab, index) => (
          <TabContent
            key={`tabpanel-${index}`}
            index={index}
            isHidden={selectedIndex !== index}
          >
            {tab.content}
          </TabContent>
        ))}
      </div>
    </>
  );
};
