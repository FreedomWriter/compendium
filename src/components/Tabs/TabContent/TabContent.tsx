import React from "react";
import { TabContentProps } from "types";

import { Section } from "./styled";

const TabContent = ({ isHidden, children }: TabContentProps) => {
  return (
    <Section
      style={{
        display: isHidden ? "none" : "block",
      }}
    >
      {children}
    </Section>
  );
};

export { TabContent };
