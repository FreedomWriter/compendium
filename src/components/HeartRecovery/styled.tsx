import styled from "styled-components";
import { COLORS } from "utils";

export const StyledSVGWrapper = styled.svg`
  width: 100%;
  height: 100%;
  .stroke {
    stroke: ${COLORS.secondary};
    fill: ${COLORS.secondary};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const LocalContainer = styled.div`
  width: 24px;
  height: 24px;
`;
export const StyledSVG = () => {
  return (
    <LocalContainer>
      <StyledSVGWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </StyledSVGWrapper>
    </LocalContainer>
  );
};

export const Container = styled.div`
  display: flex;
  width: fit-content;
  justify-content: flex-start;
  gap: 8px;
`;
