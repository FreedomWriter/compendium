import React from "react";
import { Input, Label } from "components";
import { Container, FieldSet } from "./styled";

export type Field = {
  id: string;
  label: string;
  value: string;
  isChecked: boolean;
  name: string;
  handleClick: () => void;
};

export type ToggleProps = {
  legend: string;

  fields: Field[];
};

const Toggle = ({ legend, fields }: ToggleProps) => {
  return (
    <FieldSet>
      <legend>{legend}</legend>
      {fields.map((field) => {
        return (
          <Container key={field.id}>
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input
              type="radio"
              id={field.id}
              name={field.name}
              value={field.value}
              defaultChecked={field.isChecked}
              onClick={field.handleClick}
            />
          </Container>
        );
      })}
    </FieldSet>
  );
};
export { Toggle };
