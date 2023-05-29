import React from "react";
import { Tile } from "components/Tile";
import { FunctionComponent } from "react";
import { Content } from "types";
import { ButtonContainer, Container, Grid } from "./styled";
import { GalleryButton } from "components";

interface GalleryProps {
  [x: string]: any;
  content: Content[];
  isHidden: boolean;
}

const Gallery: FunctionComponent<GalleryProps> = ({ content, isHidden }) => {
  let itemsToDisplay = 12; // 12 for tablet, 15 for desktop, content.length - 1 for mobile
  const [indexes, setIndexes] = React.useState({
    start: 0,
    end: itemsToDisplay,
  });
  const [currentlyViewing, setCurrentlyViewing] = React.useState(
    content.slice(indexes.start, indexes.end)
  );

  const handleNext = () => {
    if (indexes.end + itemsToDisplay >= content.length) return;
    const updatedIndexes = {
      start: indexes.end,
      end: indexes.end + itemsToDisplay,
    };

    setIndexes(updatedIndexes);
    setCurrentlyViewing(
      content.slice(updatedIndexes.end, updatedIndexes.end + itemsToDisplay)
    );
  };

  const handlePrev = () => {
    if (indexes.start === 0) return;
    const updatedIndexes = {
      start: indexes.start - itemsToDisplay,
      end: indexes.end - itemsToDisplay,
    };

    setIndexes(updatedIndexes);
    setCurrentlyViewing(
      content.slice(updatedIndexes.start, updatedIndexes.end)
    );
  };

  return (
    <Container isHidden={isHidden}>
      <ButtonContainer>
        <GalleryButton hideButtons={indexes.start === 0} onClick={handlePrev}>
          prev
        </GalleryButton>
      </ButtonContainer>
      <Grid>
        {currentlyViewing.map((item: Content) => (
          <React.Fragment key={item.id}>
            <Tile imgSrc={item.image} name={item.name} />
          </React.Fragment>
        ))}
      </Grid>
      <ButtonContainer>
        <GalleryButton
          hideButtons={indexes.end + itemsToDisplay >= content.length - 1}
          onClick={handleNext}
        >
          next
        </GalleryButton>
      </ButtonContainer>
    </Container>
  );
};

export { Gallery };
