import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "types";
import { useTheme } from "hooks";

import { COLORS } from "utils";

const Button = styled.button<ButtonProps>`
  padding: 8px;
  border: 2px solid
    ${(props) => (props.isDarkMode ? COLORS.darkPrimary : COLORS.primary)};
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? COLORS.secondary : "transparent"};
  outline-color: transparent;
  cursor: pointer;
  color: ${(props) => (props.isActive ? COLORS.secondary : COLORS.primary)};
  background-image: ${(props) =>
    props.isActive ? 'url("/images/background.svg")' : undefined};

  ${(props) =>
    props.isActive &&
    css`
      background-image: url("/images/background.svg");
    `}

  &:focus {
    outline-offset: 4px;
    outline-color: ${COLORS.primary};
  }

  &:hover {
    background-color: ${COLORS.secondary};
    background-image: url("/images/background.svg");
    border-radius: 50%;
    border-color: ${COLORS.primary};
    filter: brightness(80%);
  }
  ${(props) =>
    props.isDarkMode &&
    css`
      background-image: url("/images/background.svg");
      background-color: ${COLORS.darkPrimary};
      border-color: ${COLORS.secondary};
      background-image: url("/images/background.svg");
      filter: brightness(65%);

      &:hover {
        background-color: ${COLORS.primary};
        background-image: url("/images/background.svg");
        border-radius: 50%;
        border-color: ${COLORS.secondary};
        filter: brightness(100%);
      }
      ${props.isActive &&
      css`
        filter: brightness(100%);
      `}
    `}
`;

const IconButton = ({ children, onClick, isActive }: ButtonProps) => {
  const [theme] = useTheme();
  console.log(theme.isDarkMode);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Button
        isActive={isActive}
        isDarkMode={theme.isDarkMode}
        onClick={onClick}
      >
        {children}
      </Button>
      <div
        style={{
          height: "5px",
          width: "32px",
          backgroundColor: theme.secondary,
          border: `1px solid ${theme.secondary}`,
          visibility: isActive ? "visible" : "hidden",
          filter: theme.isDarkMode ? "brightness(65%)" : "brightness(80%)",
        }}
      ></div>
    </div>
  );
};
export { IconButton };
