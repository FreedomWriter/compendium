import React from "react";
import { IconButton } from "components";
import { Container } from "./styled";

export type GalleryButtonProps = {
  hideButtons: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: string;
};

const GalleryButton = ({
  hideButtons,
  onClick,
  children,
  icon,
}: GalleryButtonProps) => {
  return (
    <Container>
      <IconButton icon={icon} hideButtons={hideButtons} onClick={onClick}>
        {children}
      </IconButton>
    </Container>
  );
};
export { GalleryButton };
