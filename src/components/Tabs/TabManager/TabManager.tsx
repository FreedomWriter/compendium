import React from "react";
import { TabsProps } from "types";

import { VisuallyHidden, IconButton, TabContent } from "components";

import { NavContainer, TabNavContainer } from "./styled";

const TabManager = ({ tabsConfig, defaultIndex = 0 }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);

  const handleClick = React.useCallback(
    (index: number) => setSelectedIndex(index),
    []
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
        {tabsConfig.map((tab, index) => {
          return (
            <TabContent
              key={`tabpanel-${index}`}
              isHidden={selectedIndex !== index}
            >
              <Container key={index} content={tab?.content} />
            </TabContent>
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
