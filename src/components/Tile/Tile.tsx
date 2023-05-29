import React from "react";
import { Article, ImageContainer, Title, Image } from "./styled";

interface TileProps {
  imgSrc: string;
  name: string;
}

const Tile: React.FunctionComponent<TileProps> = ({ imgSrc, name }) => {
  return (
    <Article>
      <ImageContainer>
        <Image src={imgSrc} alt={name} />
      </ImageContainer>
      <Title>{name}</Title>
    </Article>
  );
};

export { Tile };
