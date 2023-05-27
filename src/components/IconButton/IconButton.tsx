import React from "react";
import styled from "styled-components";
import { ButtonProps } from "types";

import { COLORS, media } from "utils";

const Button = styled.button`
  padding: 8px;
  border: transparent;
  background-color: transparent;
  outline-color: transparent;
  cursor: pointer;
  color: ${COLORS.primary};

  border: 1px solid ${COLORS.secondary};
  background-color: ${COLORS.primary};
  border-radius: 50%;

  /* ${media.medium`
    padding:12px 20px;
  `}

  ${media.large`
    padding:16px 32px
  `} */

  &:focus {
    outline-offset: 4px;
    outline-color: ${COLORS.primary};
  }
  &:hover {
    filter: brightness(80%);
  }
`;

const IconButton = ({ children, onClick }: ButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};
export { IconButton };
