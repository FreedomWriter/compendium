import React from "react";
import { IconButton } from "components";

export type GalleryButtonProps = {
  hideButtons: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const GalleryButton = ({
  hideButtons,
  onClick,
  children,
}: GalleryButtonProps) => {
  return (
    <IconButton hideButtons={hideButtons} onClick={onClick}>
      {children}
    </IconButton>
  );
};
export { GalleryButton };
