import styled from "styled-components";
import {
  GALLERY_COLS_LARGE,
  GALLERY_COLS_MEDIUM,
  GALLERY_COLS_SMALL,
  GALLERY_COL_GAP_MEDIUM,
  GALLERY_COL_GAP_SMALL,
  GALLERY_ROWS_LARGE,
  GALLERY_ROWS_MEDIUM,
  GALLERY_ROWS_SMALL,
  GALLERY_ROW_GAP_MEDIUM,
  GALLERY_ROW_GAP_SMALL,
  NAV_HEIGHT,
  media,
} from "utils";

export const Grid = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  margin: 16px auto;
  grid-template-rows: ${GALLERY_ROWS_SMALL};
  grid-template-columns: repeat(${GALLERY_COLS_SMALL}, 1fr);
  align-items: center;
  justify-items: center;
  grid-row-gap: ${GALLERY_ROW_GAP_SMALL}px;
  grid-column-gap: ${GALLERY_COL_GAP_SMALL}px;

  ${media.medium`
  display: grid;
    grid-template-rows: repeat(${GALLERY_ROWS_MEDIUM}, 1fr);
    grid-template-columns: repeat(${GALLERY_COLS_MEDIUM}, 1fr);
    grid-row-gap: ${GALLERY_ROW_GAP_MEDIUM}px;
    grid-column-gap: ${GALLERY_COL_GAP_MEDIUM}px;
  `}

  ${media.large`
    grid-template-rows: repeat(${GALLERY_ROWS_LARGE}, 1fr);
    grid-template-columns: repeat(${GALLERY_COLS_LARGE}, 1fr);
    margin: 0 auto;
  `}
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0 40px 0;
  height: calc(100vh - ${NAV_HEIGHT + 216}px); // account for padding

  ${media.large`
  // toggles, which are only visible for certain pages,
  // move from under the tabs to next to them, account for that
    height: calc(100vh - ${NAV_HEIGHT + 112}px); // account for padding
 
  `}
`;

export const ButtonContainer = styled.div`
  display: none;
  ${media.medium`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 16px ;
    font-size: 32px;
  `}
`;
