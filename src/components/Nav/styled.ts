import styled from "styled-components";
import { NAV_HEIGHT } from "utils";

export const NavContainer = styled.nav`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const TabNavContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  padding-top: 16px;
  display: flex;
  gap: 24px;
  height: ${NAV_HEIGHT};
`;
