import styled, { css } from "styled-components";
import { media } from "utils";

export const Container = styled.div<{ showToggle?: boolean }>`
  display: none;
  justify-content: center;
  padding-bottom: 16px;

  ${media.large`
    position: absolute;
    padding-right: 5%;
    padding-top: 24px;
    top: 0;
    left: 100%;
    transform: translateX(-100%);
  `}

  ${(props) =>
    props.showToggle &&
    css`
      display: flex;
    `}
`;
