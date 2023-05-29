import styled from "styled-components";
import { NAV_HEIGHT } from "utils";

export const NavContainer = styled.nav``;

export const TabNavContainer = styled.ul`
  list-style-type: none;
  padding: 16px;
  display: flex;
  justify-content: center;
  gap: 24px;
  height: ${NAV_HEIGHT};
`;
