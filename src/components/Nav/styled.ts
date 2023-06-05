import styled from "styled-components";
import { NAV_HEIGHT_LARGE, NAV_HEIGHT_UNTIL_MEDIUM, media } from "utils";

export const NavContainer = styled.nav<{ useMasterTheme: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;

  background-color: var(--background);
  ${media.medium` position: static;`}

  ${media.large`
    position: static;
  `};
`;

export const TabNavContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  padding-top: 16px;
  display: flex;
  gap: 24px;
  height: ${NAV_HEIGHT_UNTIL_MEDIUM};
  ${media.large`
    height: ${NAV_HEIGHT_LARGE};
  `}
`;
