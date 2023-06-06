import styled, { css } from "styled-components";
import { COLORS, NAV_HEIGHT, pulseAnimation } from "utils";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  p {
    text-align: center;
    font-size: 32px;
    color: ${COLORS.secondary};
  }
`;

export const Image = styled.img<{ prefersReducedMotion: boolean }>`
  height: 304px;
  width: 304px;
  position: absolute;
  top: ${NAV_HEIGHT}px;
  bottom: 0;
  margin: auto;

  ${(props) =>
    !props.prefersReducedMotion &&
    css`
      animation: ${pulseAnimation} 2s infinite;
    `}
`;
