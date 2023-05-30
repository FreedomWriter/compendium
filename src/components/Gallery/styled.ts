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
  TAB_HEIGHT,
  media,
} from "utils";

export const Grid = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  margin: 0 auto;
  grid-template-rows: ${GALLERY_ROWS_SMALL};
  grid-template-columns: repeat(${GALLERY_COLS_SMALL}, 1fr);
  align-items: center;
  justify-items: center;
  grid-row-gap: ${GALLERY_ROW_GAP_SMALL}px;
  grid-column-gap: ${GALLERY_COL_GAP_SMALL}px;

  ${media.medium`
    grid-template-rows: repeat(${GALLERY_ROWS_MEDIUM}, 1fr);
    grid-template-columns: repeat(${GALLERY_COLS_MEDIUM}, 1fr);
    grid-row-gap: ${GALLERY_ROW_GAP_MEDIUM}px;
    grid-column-gap: ${GALLERY_COL_GAP_MEDIUM}px;
  `}

  ${media.large`
    grid-template-rows: repeat(${GALLERY_ROWS_LARGE}, 1fr);
    grid-template-columns: repeat(${GALLERY_COLS_LARGE}, 1fr);
 
  `}
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0 40px 0;
  height: ${TAB_HEIGHT};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 16px 0;
  font-size: 32px;
`;
