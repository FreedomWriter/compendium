import styled from "styled-components";
import { NAV_BUTTONS_HEIGHT, fadeAnimationKeyframe, media } from "utils";

export const Container = styled.div<{ showToggle?: boolean }>`
  position: static;
  transform: none;
  margin: ${NAV_BUTTONS_HEIGHT + 48}px auto 0;
  width: fit-content;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  animation: ${fadeAnimationKeyframe} 0.5s ease-in-out forwards;

  ${media.large`
    position: absolute;
    margin: 0;
    top: calc(50% - 8px); // account for the active item indicator
    right: 12.5%;
    transform: translateY(-50%);
  `};
`;
