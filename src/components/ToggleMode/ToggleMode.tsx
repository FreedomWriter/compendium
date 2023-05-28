import React from "react";
import { DarkModeConfigProps, PlayMode, ToggleModeProps } from "types";

import { Field, Toggle } from "components";
import { Container } from "./styled";

const playModeToggleConfig = ({
  playMode,
  handleToggleMode,
}: DarkModeConfigProps): Field[] => [
  {
    id: "default",
    label: "Default",
    value: "default",
    isChecked: playMode === "default",
    name: "theme",
    handleClick: () => handleToggleMode("default"),
  },
  {
    id: "masterMode",
    label: "Master",
    value: "master",
    isChecked: playMode === "master",
    name: "theme",
    handleClick: () => handleToggleMode("master"),
  },
];

function ToggleMode({ playMode, toggleMode }: ToggleModeProps) {
  const handleToggleMode = (playMode: PlayMode) => toggleMode(playMode);
  return (
    <Container>
      <Toggle
        legend="Toggle Play Mode"
        fields={playModeToggleConfig({ handleToggleMode, playMode })}
      />
    </Container>
  );
}

export { ToggleMode };
