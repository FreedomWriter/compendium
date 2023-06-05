import React from "react";

import { CATEGORIES } from "./helpers";
import { NavProps, Tab } from "types";

import { IconButton } from "components";

import { NavContainer, TabNavContainer } from "./styled";

const Nav = ({ selectedIndex, handleClick }: NavProps) => {
  const handleTabClick = React.useCallback(
    (index: number, currTab: Tab) => {
      handleClick(index, currTab);
    },
    [handleClick]
  );

  return (
    <>
      <NavContainer>
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
      </NavContainer>
    </>
  );
};

export { Nav };
