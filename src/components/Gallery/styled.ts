import styled, { css } from "styled-components";
import {
  GALLERY_COLS_LARGE,
  GALLERY_COLS_MEDIUM,
  GALLERY_COLS_SMALL,
  GALLERY_COLS_XL,
  GALLERY_COL_GAP_LARGE,
  GALLERY_COL_GAP_MEDIUM,
  GALLERY_COL_GAP_SMALL,
  GALLERY_COL_GAP_XL,
  GALLERY_ROWS_LARGE,
  GALLERY_ROWS_MEDIUM,
  GALLERY_ROWS_SMALL,
  GALLERY_ROWS_XL,
  GALLERY_ROW_GAP_LARGE,
  GALLERY_ROW_GAP_MEDIUM,
  GALLERY_ROW_GAP_SMALL,
  GALLERY_ROW_GAP_XL,
  NAV_HEIGHT,
  TOGGLE_HEIGHT,
  media,
} from "utils";

export const Container = styled.div`
  height: 100%;
  padding: 40px 0;
  margin: 16px auto;
  position: relative;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: ${GALLERY_ROWS_SMALL};
  grid-template-columns: repeat(${GALLERY_COLS_SMALL}, 1fr);

  grid-row-gap: ${GALLERY_ROW_GAP_SMALL}px;
  grid-column-gap: ${GALLERY_COL_GAP_SMALL}px;
  overflow-x: auto;

  ${media.medium`
    overflow: visible;
    padding-top: 0;
    grid-template-rows: repeat(${GALLERY_ROWS_MEDIUM}, 1fr);
    grid-template-columns: repeat(${GALLERY_COLS_MEDIUM}, 1fr);
    grid-row-gap: ${GALLERY_ROW_GAP_MEDIUM}px;
    grid-column-gap: ${GALLERY_COL_GAP_MEDIUM}px;
  `}

  ${media.large`
    grid-template-rows: repeat(${GALLERY_ROWS_LARGE}, 1fr);
    grid-row-gap: ${GALLERY_ROW_GAP_LARGE}px;
    grid-column-gap: ${GALLERY_COL_GAP_LARGE}px;
    grid-template-columns: repeat(${GALLERY_COLS_LARGE}, 1fr);
    margin: 0 auto;
    
  `}
    ${media.xl`
    grid-template-rows: repeat(${GALLERY_ROWS_XL}, 1fr);
    grid-row-gap: ${GALLERY_ROW_GAP_XL}px;
    grid-column-gap: ${GALLERY_COL_GAP_XL}px;
    grid-template-columns: repeat(${GALLERY_COLS_XL}, 1fr);
  `}
`;

export const Section = styled.section<{ isToggleVisible: boolean }>`
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: auto;
  grid-template-columns: repeat(1, 1fr);
  position: absolute;
  width: 100%;

  ${(props) =>
    props.isToggleVisible
      ? css`
          top: ${NAV_HEIGHT + TOGGLE_HEIGHT}px;
        `
      : css`
          top: ${NAV_HEIGHT}px;
        `};

  ${media.medium`
    position: static;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    padding: ${NAV_HEIGHT / 4}px 0;

  `}
  ${media.large`
    padding: ${NAV_HEIGHT / 3}px 0;
  `}
`;

export const ButtonContainer = styled.div`
  display: none;
  ${media.medium`
    display: flex;
    justify-content: center;
    
  `}
`;
export const TileContainer = styled.div`
  padding-bottom: 28px; // Tile title height + 4px for border
`;
