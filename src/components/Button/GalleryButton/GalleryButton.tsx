import React from "react";
import { IconButton } from "components";
import { Container } from "./styled";

export type GalleryButtonProps = {
  hideButtons: boolean;
  onClick: () => void;
  icon?: string;
  label?: string;
};

const GalleryButton = ({
  hideButtons,
  onClick,
  icon,
  label,
}: GalleryButtonProps) => {
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
