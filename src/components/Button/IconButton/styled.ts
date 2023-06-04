import styled, { css } from "styled-components";
import { ButtonProps } from "types";

import { COLORS } from "utils";

const Button = styled.button<ButtonProps>`
  padding: 8px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid
    ${(props) =>
      props.isDefaultPlayMode ? COLORS.masterPrimary : COLORS.primary};
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? COLORS.secondary : COLORS.secondary};
  outline-color: transparent;
  cursor: pointer;
  color: ${(props) => (props.isActive ? COLORS.secondary : COLORS.primary)};
  background-image: ${(props) =>
    props.isActive ? 'url("/images/background.svg")' : undefined};

  ${(props) =>
    props.isActive &&
    css`
      background-image: url("/images/background.svg");
      filter: brightness(105%);
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
    filter: brightness(105%);
  }
  ${(props) =>
    props.theme.isDefaultPlayMode &&
    css`
      background-image: url("/images/background.svg");
      background-color: ${COLORS.secondary};
      border-color: ${COLORS.primary};
      background-image: url("/images/background.svg");
      filter: brightness(0%);

      &:hover {
        background-color: ${COLORS.primary};
        background-image: url("/images/background.svg");
        border-radius: 50%;
        border-color: ${COLORS.secondary};
      }
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

const ActiveItemIndicator = styled.div<{ isActive: boolean }>`
  height: 8px;
  width: 40px;
  background-color: ${COLORS.secondary};
  border: 1px solid ${COLORS.primary};
  border-radius: 4px;
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};

  filter: ${(props) =>
    props.theme.isDefaultPlayMode ? "brightness(65%)" : "brightness(80%)"};
`;

export { IconButtonContainer, Button, ActiveItemIndicator };
