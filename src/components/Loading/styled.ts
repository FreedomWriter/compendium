import styled, { keyframes } from "styled-components";
import { TAB_HEIGHT } from "utils";

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
  height: ${TAB_HEIGHT};
`;

export const Image = styled.img<{ prefersReducedMotion: boolean }>`
  height: 50%;
  width: 50%;
  animation: ${pulseAnimation} 2s infinite;
`;
