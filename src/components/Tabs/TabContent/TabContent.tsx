import React from "react";

import { Section } from "./styled";
import { TabContentProps } from "types";

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
