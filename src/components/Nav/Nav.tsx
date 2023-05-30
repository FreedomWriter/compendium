import React from "react";

import { IconButton } from "components";

import { NavContainer, TabNavContainer } from "./styled";

import { CATEGORIES } from "./helpers";

export type NavProps = {
  handleClick: (index: number, selectedTabLabel: string) => void;
  selectedIndex: number;
  toggleTheme: (isDarkMode: boolean) => void;
};

const Nav = ({ selectedIndex, handleClick }: NavProps) => {
  const handleTabClick = (index: number, currTab: string) => {
    handleClick(index, currTab);
  };

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
              />
            </li>
          ))}
        </TabNavContainer>
      </NavContainer>
    </>
  );
};

export { Nav };
