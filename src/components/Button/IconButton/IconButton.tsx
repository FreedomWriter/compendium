import React from "react";

import { usePlayMode } from "hooks";

import { IconButtonContainer, Button, ActiveItemIndicator } from "./styled";
import { ButtonProps } from "types";
import { VisuallyHidden } from "components";

const IconButton = ({
  onClick,
  isActive,
  hideButtons,
  icon,
  children,
  useIndicator,
}: ButtonProps) => {
  const [theme] = usePlayMode();

  return (
    <IconButtonContainer>
      <Button
        isActive={isActive}
        isDefaultPlayMode={theme.isDefaultPlayMode}
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
      {useIndicator && <ActiveItemIndicator isActive={!!isActive} />}
    </IconButtonContainer>
  );
};
export { IconButton };
