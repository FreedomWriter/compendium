import React from "react";

import { Content, GalleryProps } from "types";
import { GalleryButton, Tile } from "components";

import { ButtonContainer, Section, Grid } from "./styled";
import { getNumOfItemsToDisplay } from "./helpers";

const Gallery: React.FunctionComponent<GalleryProps> = ({ content }) => {
  const [numOfItemsToDisplay, setNumOfItemsToDisplay] = React.useState<number>(
    getNumOfItemsToDisplay(content.length)
  );
  const [indexes, setIndexes] = React.useState({
    start: 0,
    end: numOfItemsToDisplay,
  });
  const [currentlyViewing, setCurrentlyViewing] = React.useState(
    content.slice(indexes.start, indexes.end)
  );

  const handleNext = () => {
    if (indexes.end + numOfItemsToDisplay >= content.length) return;
    const updatedIndexes = {
      start: indexes.end,
      end: indexes.end + numOfItemsToDisplay,
    };

    setIndexes(updatedIndexes);
    setCurrentlyViewing(
      content.slice(
        updatedIndexes.end,
        updatedIndexes.end + numOfItemsToDisplay
      )
    );
  };

  const handlePrev = () => {
    if (indexes.start === 0) return;
    const updatedIndexes = {
      start: indexes.start - numOfItemsToDisplay,
      end: indexes.end - numOfItemsToDisplay,
    };

    setIndexes(updatedIndexes);
    setCurrentlyViewing(
      content.slice(updatedIndexes.start, updatedIndexes.end)
    );
  };

  React.useEffect(() => {
    setIndexes({
      start: 0,
      end: numOfItemsToDisplay,
    });
    setCurrentlyViewing(content.slice(0, numOfItemsToDisplay));
  }, [content, numOfItemsToDisplay]);

  React.useEffect(() => {
    const handleResize = () => {
      setNumOfItemsToDisplay(getNumOfItemsToDisplay(content.length));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [content.length]);

  return (
    <Section>
      <ButtonContainer>
        <GalleryButton hideButtons={indexes.start === 0} onClick={handlePrev}>
          ←
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
          hideButtons={indexes.end + numOfItemsToDisplay >= content.length - 1}
          onClick={handleNext}
        >
          →
        </GalleryButton>
      </ButtonContainer>
    </Section>
  );
};

export { Gallery };
