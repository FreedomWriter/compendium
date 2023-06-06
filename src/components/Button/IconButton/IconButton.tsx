import React from "react";

import { IconButtonContainer, Button, ActiveItemIndicator } from "./styled";
import { ButtonProps } from "types";
import { VisuallyHidden } from "components";
import { COLORS } from "utils";

const IconButton = ({
  onClick,
  isActive,
  hideButtons,
  icon,
  children,
  useIndicator,
}: ButtonProps) => {
  return (
    <IconButtonContainer>
      <Button
        isActive={isActive}
        isDefaultPlayMode={COLORS.isDefaultPlayMode}
        onClick={onClick}
        hideButtons={hideButtons}
      >
        {children ? (
          children
        ) : (
          <div>
            <img src={`/images/${icon}.png`} alt={icon}></img>
          </div>
        )}
        <VisuallyHidden>{icon}</VisuallyHidden>
      </Button>
      {useIndicator && !!isActive && <ActiveItemIndicator />}
    </IconButtonContainer>
  );
};
export { IconButton };
