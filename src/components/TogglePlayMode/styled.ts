import styled, { css } from "styled-components";
import { media } from "utils";

export const Container = styled.div<{ showToggle?: boolean }>`
  display: none;
  justify-content: center;
  padding-bottom: 16px;

  ${media.large`
    padding-right: 7%;
    padding-top: 24px;
    position: absolute;
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
