import React from "react";
import styled from "styled-components";

const LabelElement = styled.label`
  width: 100%;
`;

export interface LabelProps {
  children: React.ReactNode | string;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return <LabelElement htmlFor={htmlFor}>{children}</LabelElement>;
};

export { Label };
