import styled from "styled-components";
import { media } from "utils";

export const Container = styled.div`
  display: none;

  ${media.medium`
  display: block;
`}
`;
