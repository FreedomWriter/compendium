import React from "react";
import { Article, ImageContainer, Title, Image } from "./styled";
import { Creature, Equipment, Material, Monster, Treasure } from "types";

interface TileProps {
  item: Creature | Equipment | Material | Monster | Treasure;
  variant?: "modal";
}

const Tile: React.FC<TileProps> = ({ item, variant }) => {
  const { image, name } = item;

  return (
    <>
      <Article variant={variant}>
        <ImageContainer>
          <Image src={image} alt={name} />
        </ImageContainer>
        <Title>{name}</Title>
      </Article>
    </>
  );
};

export { Tile };
