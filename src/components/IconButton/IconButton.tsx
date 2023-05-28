import React from "react";
import { ButtonProps } from "types";
import { useTheme } from "hooks";

import { IconButtonContainer, Button, ActiveItemIndicator } from "./styled";

const IconButton = ({ children, onClick, isActive }: ButtonProps) => {
  const [theme] = useTheme();

  return (
    <IconButtonContainer>
      <Button
        isActive={isActive}
        isDarkMode={theme.isDarkMode}
        onClick={onClick}
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
