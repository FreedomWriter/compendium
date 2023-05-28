import React from "react";
import styled from "styled-components";
import { ButtonProps } from "types";
import { useTheme } from "hooks";

import { COLORS } from "utils";

const Button = styled.button`
  padding: 8px;
  border: transparent;
  background-color: transparent;
  outline-color: transparent;
  cursor: pointer;
  color: ${COLORS.primary};

  &:focus {
    outline-offset: 4px;
    outline-color: ${COLORS.primary};
  }
  &:hover {
    filter: brightness(80%);
  }
`;

const IconButton = ({ children, onClick }: ButtonProps) => {
  const [theme] = useTheme();
  const darkModeStyles = !!theme?.isDarkMode
    ? {
        border: `1px solid ${COLORS.secondary}`,
        backgroundColor: `${COLORS.primary}`,
        borderRadius: "50%",
      }
    : { before: "" };
  return (
    <Button style={darkModeStyles} onClick={onClick}>
      {children}
    </Button>
  );
};
export { IconButton };
