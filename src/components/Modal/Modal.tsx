import React from "react";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import { HeartRecovery, IconButton } from "components";
import {
  ButtonContainer,
  Category,
  Container,
  InfoContainer,
  ModalWrapper,
  Overlay,
  SVGWrapper,
  Title,
  TitleContainer,
} from "./styled";

interface ModalProps {
  content: any;
  handleClose: () => void;
  isModalVisible: boolean;
}

const Modal: React.FC<ModalProps> = ({
  content,
  handleClose,
  isModalVisible,
}) => {
  const {
    name,
    category,
    common_locations,
    cooking_effect,
    description,
    hearts_recovered,
    image,
    attack,
    defense,
    drops,
  } = content;

  const titleRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const currentlyFocusedElem = document.activeElement as HTMLHeadingElement;
    if (!titleRef?.current) return;
    titleRef.current.focus();

    return () => {
      currentlyFocusedElem?.focus();
    };
  }, []);

  React.useEffect(() => {
    function handleKeyDown(event: { code: string }) {
      if (event.code === "Escape") {
        handleClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <FocusLock>
      <RemoveScroll>
        <Container bgImg={image}>
          {isModalVisible && (
            <ModalWrapper
              id="modal"
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-labelledby={name}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <TitleContainer>
                  <Title ref={titleRef} id="modal-title">
                    {name}
                  </Title>

                  <ButtonContainer>
                    <IconButton onClick={handleClose} label="Close Modal">
                      <SVGWrapper>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-x"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </SVGWrapper>
                    </IconButton>
                  </ButtonContainer>
                </TitleContainer>

                <Category>Category: {category}</Category>
                <InfoContainer>
                  {common_locations?.length > 0 && (
                    <p>
                      Commonly found in: <em> {common_locations.join(", ")}</em>
                    </p>
                  )}
                  {attack >= 0 && (
                    <p>
                      Attack: <em>{attack}</em>
                    </p>
                  )}
                  {defense >= 0 && (
                    <p>
                      Defense: <em>{defense}</em>
                    </p>
                  )}
                  {cooking_effect && (
                    <p>
                      Cooking effect: <em>{cooking_effect}</em>
                    </p>
                  )}

                  {hearts_recovered > 0 && (
                    <HeartRecovery count={hearts_recovered} />
                  )}
                  {drops?.length > 0 && (
                    <p>
                      Materials Dropped: <em> {drops.join(", ")}</em>
                    </p>
                  )}
                  <br />
                  <p>{description}</p>
                </InfoContainer>
              </div>
            </ModalWrapper>
          )}
          <Overlay />
        </Container>
      </RemoveScroll>
    </FocusLock>
  );
};
export { Modal };
