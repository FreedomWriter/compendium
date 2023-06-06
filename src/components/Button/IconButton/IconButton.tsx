import React from "react";

import { IconButtonContainer, Button, ActiveItemIndicator } from "./styled";
import { VisuallyHidden } from "components";
import { COLORS } from "utils";

export interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  isDefaultPlayMode?: boolean;
  isActive?: boolean;
  hideButtons?: boolean;
  icon?: string;
  useIndicator?: boolean;
  label?: string;
}

const IconButton: React.FC<ButtonProps> = ({
  onClick,
  isActive,
  hideButtons,
  icon,
  children,
  useIndicator,
  label,
}) => {
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
