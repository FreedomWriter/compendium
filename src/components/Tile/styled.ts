import styled from "styled-components";
import { COLORS, media } from "utils";

export const Article = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 148px;
  height: 148px;

  ${media.medium`
    width: 164px;
    height: 164px;
  `}
  ${media.large`
    width: 172px;
    height: 172px;
  `}
`;

export const ImageContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  border-radius: 16px;
  border: 2px solid ${COLORS.secondary};

  ${media.medium`
  
  border: 4px solid ${COLORS.secondary};
  `}
`;

export const Title = styled.div`
  text-align: center;
  padding: 4px;
  background-color: ${COLORS.primary};
  border-radius: 16px;
  filter: brightness(60%);
  color: ${COLORS.background};
  width: 124px;
  height: 56px;
  position: absolute;
  bottom: -28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${COLORS.secondary};

  ${media.medium`
    border: 4px solid ${COLORS.secondary};
  `}
`;
