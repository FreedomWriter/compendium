import React from "react";

import { useTheme } from "hooks";

import { IconButtonContainer, Button, ActiveItemIndicator } from "./styled";
import { ButtonProps } from "types";

const IconButton = ({
  children,
  onClick,
  isActive,
  hideButtons,
}: ButtonProps) => {
  const [theme] = useTheme();

  return (
    <IconButtonContainer>
      <Button
        isActive={isActive}
        isDarkMode={theme.isDarkMode}
        onClick={onClick}
        hideButtons={hideButtons}
      >
        {children}
      </Button>
      <ActiveItemIndicator
        style={{
          visibility: isActive ? "visible" : "hidden",
        }}
      />
    </IconButtonContainer>
  );
};
export { IconButton };
