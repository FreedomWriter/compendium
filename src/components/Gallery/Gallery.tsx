import React from "react";

import { Content, GalleryProps } from "types";
import { GalleryButton, Tile } from "components";

import { ButtonContainer, Section, Grid, TileContainer } from "./styled";
import { getNumOfItemsToDisplay } from "./helpers";

const Gallery: React.FunctionComponent<GalleryProps> = ({ content }) => {
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

  const handleNext = () => {
    if (indexes.start + numOfItemsToDisplay >= content.length) return;
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

  const tileRef = React.useRef<HTMLElement | null>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      const updatedNumOfItemsToDisplay = getNumOfItemsToDisplay(content.length);
      setNumOfItemsToDisplay(updatedNumOfItemsToDisplay);
      const prevIndexes = indexes;
      const updatedIndexes = {
        start: prevIndexes.start,
        end: prevIndexes.start + updatedNumOfItemsToDisplay,
      };

      if (numOfItemsToDisplay !== updatedNumOfItemsToDisplay) {
        if (updatedNumOfItemsToDisplay === content.length) {
          const topEl = document.getElementById(currentlyViewing[0].name);

          if (topEl) {
            tileRef.current = document.getElementById(currentlyViewing[0].name);
            setCurrentlyViewing(content);
            return;
          }
        }
        setIndexes(updatedIndexes);
        setCurrentlyViewing(
          content.slice(updatedIndexes.start, updatedIndexes.end)
        );
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [content, content.length, currentlyViewing, indexes, numOfItemsToDisplay]);

  React.useEffect(() => {
    const container = gridRef.current;

    const handleScroll = () => {
      if (
        !container ||
        getNumOfItemsToDisplay(content.length) !== content.length
      )
        return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const visibleElements = Array.from(container.children).filter(
                (child) => {
                  tileRef.current = child as HTMLElement;
                  return (
                    child instanceof HTMLElement && isElementVisible(child)
                  );
                }
              );

              if (visibleElements.length > 0) {
                const firstVisibleElement = visibleElements[0];

                const firstVisibleElementIndex = content.findIndex(
                  (item) => item.name === firstVisibleElement.id
                );
                setIndexes({
                  start: firstVisibleElementIndex,
                  end: firstVisibleElementIndex + 12,
                });
              }

              observer.disconnect();
            }
          });
        },
        { threshold: 0 }
      );

      const isElementVisible = (element: HTMLElement): boolean => {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      };

      const childNodes = container.childNodes;
      childNodes.forEach((child) => {
        if (child instanceof HTMLElement) {
          observer.observe(child);
        }
      });

      return () => {
        observer.disconnect();
      };
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [content, currentlyViewing, indexes.start]);

  React.useEffect(() => {
    const container = gridRef.current;
    const currTile = tileRef.current;
    if (!container || numOfItemsToDisplay !== content.length || !currTile) {
      return;
    }

    const handleAutoScrollOnMobile = () => {
      if (currTile && container) {
        window.scrollBy({
          top: Math.ceil(currTile.getBoundingClientRect().top - 16),
          behavior: "smooth",
        });
      }
    };
    window.addEventListener("resize", handleAutoScrollOnMobile);

    return () => {
      tileRef.current = null;
      window.removeEventListener("resize", handleAutoScrollOnMobile);
    };
  }, [content.length, numOfItemsToDisplay]);

  return (
    <Section>
      <ButtonContainer>
        <GalleryButton hideButtons={indexes.start === 0} onClick={handlePrev}>
          ←
        </GalleryButton>
      </ButtonContainer>
      <Grid ref={gridRef}>
        {currentlyViewing.map((item: Content) => (
          <TileContainer key={item.id} id={item.name}>
            <Tile id={item.name} imgSrc={item.image} name={item.name} />
          </TileContainer>
        ))}
      </Grid>
      <ButtonContainer>
        <GalleryButton
          hideButtons={
            indexes.start + numOfItemsToDisplay >= content.length - 1
          }
          onClick={handleNext}
        >
          →
        </GalleryButton>
      </ButtonContainer>
    </Section>
  );
};

export { Gallery };
