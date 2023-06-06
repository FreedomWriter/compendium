import styled, { css } from "styled-components";
import { NAV_HEIGHT, TOGGLE_HEIGHT, media } from "utils";

export const NavContainer = styled.nav<{
  useMasterTheme: boolean;
  isToggleVisible: boolean;
}>`
  position: fixed;
  width: 100%;
  z-index: 3
    /* set to 3 so it renders above the scrollable content and the mask */;

  ${(props) =>
    props.isToggleVisible
      ? css`
          height: ${NAV_HEIGHT + TOGGLE_HEIGHT}px;
        `
      : css`
          height: ${NAV_HEIGHT}px;
        `};

  background-color: var(--background);

  ${media.medium`
    position: relative;
    height: ${NAV_HEIGHT + TOGGLE_HEIGHT}px;
    border: 1px solid transparent;
  `};

  ${media.large`
    height: ${NAV_HEIGHT}px;
  `};
`;

export const TabNavContainer = styled.ul<{ isToggleVisible: boolean }>`
  padding: 0;
  list-style-type: none;

  position: absolute;
  top: 48px;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;

  ${media.large`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;
