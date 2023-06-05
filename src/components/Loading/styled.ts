import styled, { css, keyframes } from "styled-components";
import {
  COLORS,
  NAV_HEIGHT_LARGE,
  NAV_HEIGHT_UNTIL_MEDIUM,
  media,
} from "utils";

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.8) rotate(0deg);
  }
  100% {
    transform: scale(0.8) rotate(360deg);
  }
`;
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
  /* height: 50%;
  width: 50%; */
  max-height: 304px;
  max-width: 304px;
  position: absolute;
  top: ${NAV_HEIGHT_UNTIL_MEDIUM / 2}px;
  bottom: 0;
  margin: auto;
  ${media.large`
  max-height: 60%;
  max-width: 60%;
    
    top: ${NAV_HEIGHT_LARGE / 2}px;
  `}
  ${(props) =>
    !props.prefersReducedMotion &&
    css`
      animation: ${pulseAnimation} 2s infinite;
    `}
`;
