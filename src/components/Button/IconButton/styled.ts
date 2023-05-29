import styled, { css } from "styled-components";
import { ButtonProps } from "types";

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
    color: ${COLORS.background};
    background-image: url("/images/background.svg");
    border-radius: 50%;
    border-color: ${COLORS.primary};
    filter: brightness(90%);
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

  ${(props) =>
    props.hideButtons &&
    css`
      visibility: hidden;
    `}
`;

const IconButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ActiveItemIndicator = styled.div`
  height: 5px;
  width: 32px;
  background-color: ${(props) => COLORS.secondary};
  border: 1px solid ${(props) => COLORS.secondary};

  filter: ${(props) =>
    props.theme.isDarkMode ? "brightness(65%)" : "brightness(80%)"};
`;

export { IconButtonContainer, Button, ActiveItemIndicator };
