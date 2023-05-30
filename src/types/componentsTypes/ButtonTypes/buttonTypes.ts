import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  isDarkMode?: boolean;
  isActive?: boolean;
  hideButtons?: boolean;
  icon?: string;
};
