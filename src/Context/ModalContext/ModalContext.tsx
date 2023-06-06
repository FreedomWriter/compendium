import React, { createContext, useState } from "react";
import { ModalContextType } from "types";

// Create the ModalContext
export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

// Create a ModalProvider component
const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalVisible(true);
    // Set focus on the modal when it opens
    setTimeout(() => {
      const modalElement = document.getElementById("modal");
      if (modalElement) {
        modalElement.focus();
      }
    }, 100);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ModalContext.Provider value={{ isModalVisible, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
