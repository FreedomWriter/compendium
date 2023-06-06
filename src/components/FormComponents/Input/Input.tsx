import { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import { COLORS } from "utils";

export interface InputProps {
  type: HTMLInputTypeAttribute;
  id: string;
  name: string;
  value?: any;
  defaultChecked: boolean;
  onClick?: () => void;
}

const InputBase = styled.input<InputProps>`
  display: block;
  width: 100%;
  border: 1px solid ${COLORS.primary};
  font-size: ${16 / 16}rem;
  border-radius: ${4 / 16}rem;
  padding: ${8 / 16}rem;
  margin: 0;
  color: ${COLORS.primary};

  input:active,
  :visited,
  :focus {
    outline: transparent;
  }

  input:placeholder {
    color: ${COLORS.primary};
    font-size: ${16 / 16}rem;
  }
`;

export const Input = (props: InputProps) => {
  return <InputBase {...props} />;
};
