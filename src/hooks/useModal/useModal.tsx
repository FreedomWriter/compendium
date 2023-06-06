import { ModalContext } from "Context";
import React from "react";
import { ModalContextType } from "types";

const useModal = (): ModalContextType => {
  const modalContext = React.useContext(ModalContext);

  if (!modalContext) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return modalContext;
};

export { useModal };
