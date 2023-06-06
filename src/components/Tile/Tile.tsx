import React from "react";
import { Article, ImageContainer, Title, Image } from "./styled";

type TileProps = {
  item: any;
  variant?: "modal";
};

const Tile: React.FunctionComponent<TileProps> = ({ item, variant }) => {
  const { image, name, id } = item;

  return (
    <>
      <Article id={id} variant={variant}>
        <ImageContainer>
          <Image src={image} alt={name} />
        </ImageContainer>
        <Title>{name}</Title>
      </Article>
    </>
  );
};

export { Tile };
