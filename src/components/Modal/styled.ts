import styled from "styled-components";
import { COLORS, media } from "utils";

export const Container = styled.dialog<{ bgImg?: string }>`
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  height: 100%;
  width: 100%;
  z-index: 4;
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border: 16px solid ${COLORS.masterPrimary};
  border-style: inset;

  ${media.medium`
    place-content: end center;
  `};
`;

export const ModalWrapper = styled.div`
  z-index: 5;

  max-width: 600px;

  background-color: ${COLORS.masterBackground};
  color: ${COLORS.secondary};

  border: 4px solid ${COLORS.masterPrimary};
  border-radius: 16px;
  box-shadow: 0 0 16px 4px ${COLORS.primary};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-bottom: 0;

  div {
    div {
      button {
        color: ${COLORS.secondary};
        border-color: transparent;
        background-color: transparent;
      }
    }
  }
`;

export const Title = styled.h1`
  text-transform: capitalize;
  align-self: flex-end;
`;
export const Category = styled.h2`
  text-transform: capitalize;
  align-self: flex-end;
  margin-bottom: 16px;
  padding: 16px;
  padding-bottom: 0;
  border-bottom: 1px solid ${COLORS.primary};
`;

export const InfoContainer = styled.div`
  padding: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SVGWrapper = styled.div`
  svg {
    width: 100%;
    height: 100%;
    .stroke {
      stroke: ${COLORS.secondary};
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.masterPrimary};
  opacity: 0.5;
`;
