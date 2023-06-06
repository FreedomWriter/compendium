import React from "react";
import { Container, StyledSVG } from "./styled";

export interface HeartRecoveryProps {
  count: number;
}

const HeartRecovery: React.FC<HeartRecoveryProps> = ({ count }) => {
  const heartsArr = new Array(count).fill(null);

  return (
    <Container>
      <p>Hearts Recovered: </p>
      {heartsArr?.map((_, index) => (
        <StyledSVG key={index} />
      ))}
    </Container>
  );
};

export { HeartRecovery };
