import React from "react";
import { Container, StyledSVG } from "./styled";

const HeartRecovery: React.FunctionComponent<{ count: number }> = ({
  count,
}) => {
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
