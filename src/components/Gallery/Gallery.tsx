import React from "react";

import { Content } from "types";
import { GalleryButton, Modal, Tile } from "components";

import { ButtonContainer, Section, TileContainer } from "./styled";
import { getNumOfItemsToDisplay } from "./helpers";

import { useModal } from "hooks";
import { DynamicListContainer } from "./DynamicListContainer";

export interface GalleryProps {
  content: Content[];
  isToggleVisible: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ content, isToggleVisible }) => {
  const [numOfItemsToDisplay, setNumOfItemsToDisplay] = React.useState<number>(
    getNumOfItemsToDisplay(content.length)
  );
  const [indexes, setIndexes] = React.useState({
    start: 0,
    end: numOfItemsToDisplay,
  });
  const [currentlyViewing, setCurrentlyViewing] = React.useState(() =>
    content.slice(indexes.start, indexes.end)
  );

  const [modalContent, setModalContent] = React.useState<any>(null);

  const { isModalVisible, openModal, closeModal } = useModal();

  const handleNext = () => {
    // there is no next set - do nothing and hide next button
    if (indexes.start + numOfItemsToDisplay >= content.length) return;
    // more to render, update indexes, and currentlyViewing array
    const updatedIndexes = {
      start: indexes.end,
      end: indexes.end + numOfItemsToDisplay,
    };

    setIndexes(updatedIndexes);
    setCurrentlyViewing(
      content.slice(updatedIndexes.start, updatedIndexes.end)
    );
  };

  const handlePrev = () => {
    if (indexes.start === 0) return;

    const updatedIndexes = {
      start: indexes.start - numOfItemsToDisplay,
      end: indexes.end - numOfItemsToDisplay,
    };

    // guard against trying to set indexes.start to a negative number, start at zero instead
    if (updatedIndexes.start < numOfItemsToDisplay) {
      setIndexes({ start: 0, end: numOfItemsToDisplay });
      setCurrentlyViewing(content.slice(0, numOfItemsToDisplay));
      return;
    }

    setIndexes(updatedIndexes);
    setCurrentlyViewing(
      content.slice(updatedIndexes.start, updatedIndexes.end)
    );
  };

  const handleTileClick = (item: any) => {
    setModalContent(item);
    openModal();
  };

  return (
    <>
      <Section isToggleVisible={!!isToggleVisible}>
        <ButtonContainer>
          <GalleryButton
            icon="skip-back.svg"
            hideButtons={indexes.start === 0}
            onClick={handlePrev}
            label="previous"
          />
        </ButtonContainer>

        <DynamicListContainer
          content={content}
          isToggleVisible={isToggleVisible}
          numOfItemsToDisplay={numOfItemsToDisplay}
          setIndexes={setIndexes}
          setNumOfItemsToDisplay={setNumOfItemsToDisplay}
          indexes={indexes}
          setCurrentlyViewing={setCurrentlyViewing}
          currentlyViewing={currentlyViewing}
        >
          {currentlyViewing.map((item: Content) => (
            <TileContainer
              onClick={() => handleTileClick(item)}
              key={item.id}
              id={item.name}
            >
              <Tile item={item} />
            </TileContainer>
          ))}
        </DynamicListContainer>

        <ButtonContainer>
          <GalleryButton
            hideButtons={
              indexes.start + numOfItemsToDisplay >= content.length - 1
            }
            onClick={handleNext}
            icon="skip-forward.svg"
            label="next"
          />
        </ButtonContainer>
      </Section>
      {isModalVisible && (
        <Modal
          content={modalContent}
          handleClose={closeModal}
          isModalVisible={isModalVisible}
        />
      )}
    </>
  );
};

export { Gallery };
