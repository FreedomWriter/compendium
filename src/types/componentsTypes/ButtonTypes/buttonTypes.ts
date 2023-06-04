import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  isDefaultPlayMode?: boolean;
  isActive?: boolean;
  hideButtons?: boolean;
  icon?: string;
  useIndicator?: boolean;
};
