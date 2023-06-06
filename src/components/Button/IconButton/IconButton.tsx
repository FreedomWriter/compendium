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
  label,
}: ButtonProps) => {
  return (
    <IconButtonContainer>
      <Button
        isActive={isActive}
        isDefaultPlayMode={COLORS.isDefaultPlayMode}
        onClick={onClick}
        hideButtons={hideButtons}
        label={label}
      >
        {children ? (
          children
        ) : (
          <div>
            <img src={`/images/${icon}`} alt={label}></img>
          </div>
        )}
        <VisuallyHidden>{label}</VisuallyHidden>
      </Button>
      {useIndicator && !!isActive && <ActiveItemIndicator />}
    </IconButtonContainer>
  );
};
export { IconButton };
