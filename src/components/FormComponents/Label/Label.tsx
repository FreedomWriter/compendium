import React from "react";
import styled from "styled-components";

const LabelElement = styled.label`
  width: 100%;
`;

export type LabelProps = {
  children: React.ReactNode | string;
  htmlFor: string;
};

const Label = ({ children, htmlFor }: LabelProps) => {
  return <LabelElement htmlFor={htmlFor}>{children}</LabelElement>;
};

export { Label };
