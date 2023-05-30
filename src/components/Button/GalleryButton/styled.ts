import styled from "styled-components";
import { media } from "utils";

export const Container = styled.div`
  display: none;

  ${media.medium`
  display: block;
  font-weight: bold;
  font-size: 24px;
  width: 100%;
  height: 100%;
`}
`;
