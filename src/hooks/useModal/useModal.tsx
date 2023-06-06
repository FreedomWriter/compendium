import { ModalContext, ModalContextType } from "Context";
import React from "react";

const useModal = (): ModalContextType => {
  const modalContext = React.useContext(ModalContext);

  if (!modalContext) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return modalContext;
};

export { useModal };
