import React from "react";
import { IconButton } from "components";
import { Container } from "./styled";

export interface GalleryButtonProps {
  hideButtons: boolean;
  onClick: () => void;
  icon?: string;
  label?: string;
}

const GalleryButton: React.FC<GalleryButtonProps> = ({
  hideButtons,
  onClick,
  icon,
  label,
}) => {
  return (
    <Container>
      <IconButton
        label={label}
        icon={icon}
        hideButtons={hideButtons}
        onClick={onClick}
      ></IconButton>
    </Container>
  );
};
export { GalleryButton };
