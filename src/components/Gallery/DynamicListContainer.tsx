import React from "react";
import { Container } from "./styled";
import { Content } from "types";
import { getNumOfItemsToDisplay } from "./helpers";
import { NAV_HEIGHT, TOGGLE_HEIGHT } from "utils";

interface DynamicListContainerProps {
  children: React.ReactNode;
  content: Content[];
  isToggleVisible: boolean;
  numOfItemsToDisplay: number;
  setIndexes: (value: { start: number; end: number }) => void;
  setNumOfItemsToDisplay: (value: number) => void;
  indexes: { start: number; end: number };
  setCurrentlyViewing: (value: Content[]) => void;
  currentlyViewing: Content[];
}

const DynamicListContainer: React.FC<DynamicListContainerProps> = ({
  children,
  content,
  isToggleVisible,
  numOfItemsToDisplay,
  setIndexes,
  setNumOfItemsToDisplay,
  indexes,
  setCurrentlyViewing,
  currentlyViewing,
}) => {
  const firstVisibleElementRef = React.useRef<HTMLElement | null>(null);
  const scrollableContainerRef = React.useRef<HTMLDivElement>(null);

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
  }, [content, numOfItemsToDisplay, setIndexes]);

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
  }, [
    content,
    currentlyViewing,
    indexes.start,
    numOfItemsToDisplay,
    setCurrentlyViewing,
    setIndexes,
    setNumOfItemsToDisplay,
  ]);

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

  return <Container ref={scrollableContainerRef}>{children}</Container>;
};

export { DynamicListContainer };
