import styled from "styled-components";
import { NAV_HEIGHT, TOGGLE_HEIGHT, media } from "utils";

export const NavContainer = styled.nav<{ useMasterTheme: boolean }>`
  position: fixed;
  width: 100%;
  height: ${NAV_HEIGHT + TOGGLE_HEIGHT}px;

  background-color: var(--background);

  border: 1px solid transparent;

  ${media.medium`
    position: relative;
  `};

  ${media.large`
    height: ${NAV_HEIGHT}px;
  `};
`;

export const TabNavContainer = styled.ul`
  padding: 0;
  list-style-type: none;

  position: absolute;
  top: 25%;
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
