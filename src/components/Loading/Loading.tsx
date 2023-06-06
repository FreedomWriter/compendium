import React from "react";
import { Container, Image } from "./styled";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <Container>
      {prefersReducedMotion && <p>Loading...</p>}
      <Image
        src={"/images/loader.svg"}
        alt="loading"
        prefersReducedMotion={prefersReducedMotion}
      />
    </Container>
  );
};

export { Loading };
