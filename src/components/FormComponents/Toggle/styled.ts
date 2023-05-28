import styled from "styled-components";
import { COLORS } from "utils";

export const FieldSet = styled.fieldset`
  display: flex;
  border: 1px solid ${COLORS.secondary};
  border-radius: 8px;
  gap: 16px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
