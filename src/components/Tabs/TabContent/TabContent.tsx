import React from "react";
import { TabContentProps } from "types";

import { Section } from "./styled";

const TabContent = ({ isHidden, index, children }: TabContentProps) => {
  return <Section hidden={isHidden}>{children}</Section>;
};

export { TabContent };
