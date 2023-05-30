import React from "react";

import { useTheme } from "hooks";

import { IconButtonContainer, Button, ActiveItemIndicator } from "./styled";
import { ButtonProps } from "types";
import { VisuallyHidden } from "components";

const IconButton = ({ onClick, isActive, hideButtons, icon }: ButtonProps) => {
  const [theme] = useTheme();
  console.log({ icon });
  return (
    <IconButtonContainer>
      <Button
        isActive={isActive}
        isDarkMode={theme.isDarkMode}
        onClick={onClick}
        hideButtons={hideButtons}
      >
        <div style={{ height: "18px", width: "18px" }}>
          <img src={`/images/${icon}.png`} alt={icon}></img>
        </div>
        <VisuallyHidden>{icon}</VisuallyHidden>
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
