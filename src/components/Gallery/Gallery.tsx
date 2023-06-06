import React from "react";

import { Content, GalleryProps } from "types";
import { GalleryButton, Modal, Tile } from "components";

import { ButtonContainer, Section, Container, TileContainer } from "./styled";
import { getNumOfItemsToDisplay } from "./helpers";
import { NAV_HEIGHT, TOGGLE_HEIGHT } from "utils";
import { useModal } from "hooks";

const Gallery: React.FunctionComponent<GalleryProps> = ({
  content,
  isToggleVisible,
}) => {
  const firstVisibleElementRef = React.useRef<HTMLElement | null>(null);
  const scrollableContainerRef = React.useRef<HTMLDivElement>(null);

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

  const handleAutoScrollOnMobileResize = React.useCallback(() => {
    const container = scrollableContainerRef.current;

    const prevFirstVisibleElement = firstVisibleElementRef.current;
    if (
      !container ||
      numOfItemsToDisplay !== content.length ||
      !prevFirstVisibleElement
    ) {
      return;
    }
    // when window is resized to mobile, scroll the element last viewed to the top of the viewport
    window.scrollBy({
      top:
        Math.ceil(prevFirstVisibleElement.getBoundingClientRect().top) -
        (isToggleVisible ? NAV_HEIGHT + TOGGLE_HEIGHT : NAV_HEIGHT),
      behavior: "smooth",
    });
  }, [content.length, isToggleVisible, numOfItemsToDisplay]);

  const isElementVisible = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const handleSetIndexesOnScroll = React.useCallback(() => {
    const container = scrollableContainerRef.current;
    // we are only able to scroll on mobile, when we are showing all items
    if (!container || getNumOfItemsToDisplay(content.length) !== content.length)
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const firstVisibleElement = Array.from(container.children).filter(
              (child) => {
                return child instanceof HTMLElement && isElementVisible(child);
              }
            )[0];

            if (firstVisibleElement) {
              const firstVisibleElementIndex = content.findIndex(
                (item) => item.name === firstVisibleElement.id
              );

              // update the start index so that we start with the first visible element, in the event that the window is resized, this is safe because mobile view doesn't care about indexes, it renders all of the content

              // we want to make sure that we're setting our indexes to account for the two elements that are possibly hidden by the nav bar on mobile view
              setIndexes({
                start: firstVisibleElementIndex,
                end: numOfItemsToDisplay,
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0 }
    );

    const childNodes = container.childNodes;
    childNodes.forEach((child) => {
      if (child instanceof HTMLElement) {
        observer.observe(child);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [content, numOfItemsToDisplay]);

  const handleResizeViewport = React.useCallback(() => {
    // when resizing to mobile, the user should keep their place, instead of being sent to the beginning of the list. They should also see all content in a given category

    const updatedNumOfItemsToDisplay = getNumOfItemsToDisplay(content.length);
    setNumOfItemsToDisplay(updatedNumOfItemsToDisplay);

    // only do work if the resize means we are at a different breakpoint and should show a different number of items
    if (numOfItemsToDisplay !== updatedNumOfItemsToDisplay) {
      //if the updatedNumOfItemsToDisplay === content.length, we are showing mobile and will have a scroll instead of a "paginated" view - this is slightly over engineered and could have been accomplished by manipulating the indexes, or forgone all together,  however I wanted to demonstrate an understanding of how I might handle a case where scroll position needed to be taken into consideration
      if (updatedNumOfItemsToDisplay === content.length) {
        // store a ref to the firstVisible item, to be used to set scroll position on mobile
        firstVisibleElementRef.current = document.getElementById(
          currentlyViewing[0].name
        );
        setCurrentlyViewing(content);
        return;
      }
      const updatedIndexes = {
        start: indexes.start,
        end: indexes.start + updatedNumOfItemsToDisplay,
      };

      setIndexes(updatedIndexes);
      setCurrentlyViewing(
        content.slice(updatedIndexes.start, updatedIndexes.end)
      );
    }
  }, [content, currentlyViewing, indexes.start, numOfItemsToDisplay]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleSetIndexesOnScroll);

    return () => {
      window.removeEventListener("scroll", handleSetIndexesOnScroll);
    };
  }, [handleSetIndexesOnScroll]);

  React.useEffect(() => {
    const resizeFunctions = () => {
      handleResizeViewport();
      handleAutoScrollOnMobileResize();
    };
    window.addEventListener("resize", resizeFunctions);

    return () => {
      window.removeEventListener("resize", resizeFunctions);
    };
  }, [handleAutoScrollOnMobileResize, handleResizeViewport]);

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

        <Container ref={scrollableContainerRef}>
          {currentlyViewing.map((item: Content) => (
            <TileContainer
              onClick={() => handleTileClick(item)}
              key={item.id}
              id={item.name}
            >
              <Tile item={item} />
            </TileContainer>
          ))}
        </Container>

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
