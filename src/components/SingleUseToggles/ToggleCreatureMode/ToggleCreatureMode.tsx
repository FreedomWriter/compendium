import React from "react";

import { Field, Toggle } from "components";
import { Container } from "../styled";

import { CreatureConfig, ToggleCreatureModeTypes } from "types";

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

function ToggleCreatureMode({
  handleToggle,
  showToggle,
  currFilter,
}: ToggleCreatureModeTypes) {
  return (
    <Container showToggle={showToggle}>
      <Toggle
        legend="Toggle Creature Type"
        fields={creatureToggleConfig({ handleToggle, currFilter })}
      />
    </Container>
  );
}

export { ToggleCreatureMode };
