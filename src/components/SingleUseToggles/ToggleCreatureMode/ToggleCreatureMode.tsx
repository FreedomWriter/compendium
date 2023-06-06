import React from "react";

import { Field, Toggle } from "components";
import { Container } from "../styled";
import { CreatureFilter } from "types";

export type CreatureConfig = {
  currFilter: CreatureFilter;
  handleToggle: (currFilter: CreatureFilter) => void;
};
export type ToggleCreatureModeTypes = {
  handleToggle: (currFilter: CreatureFilter) => void;
  showToggle: boolean;
  currFilter: CreatureFilter;
};

const creatureToggleConfig = ({
  handleToggle,
  currFilter,
}: CreatureConfig): Field[] => [
  {
    id: "all",
    label: "All",
    value: "all",
    isChecked: currFilter === "all",
    name: "creature-type",
    handleClick: () => handleToggle("all"),
  },
  {
    id: "edible",
    label: "Edible",
    value: "edible",
    isChecked: currFilter === "edible",
    name: "creature-type",
    handleClick: () => handleToggle("edible"),
  },
  {
    id: "inedible",
    label: "Inedible",
    value: "inedible",
    isChecked: currFilter === "inedible",
    name: "creature-type",
    handleClick: () => handleToggle("inedible"),
  },
];

const ToggleCreatureMode: React.FC<ToggleCreatureModeTypes> = ({
  handleToggle,
  showToggle,
  currFilter,
}) => {
  return (
    <Container showToggle={showToggle}>
      <Toggle
        legend="Toggle Creature Type"
        fields={creatureToggleConfig({ handleToggle, currFilter })}
      />
    </Container>
  );
};

export { ToggleCreatureMode };
