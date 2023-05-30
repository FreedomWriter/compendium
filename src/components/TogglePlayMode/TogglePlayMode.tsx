import React from "react";
import { DarkModeConfigProps, PlayMode, TogglePlayModeProps } from "types";

import { Field, Toggle } from "components";
import { Container } from "./styled";

const playModeToggleConfig = ({
  playMode,
  handleTogglePlayMode,
}: DarkModeConfigProps): Field[] => [
  {
    id: "default",
    label: "Default",
    value: "default",
    isChecked: playMode === "default",
    name: "theme",
    handleClick: () => handleTogglePlayMode("default"),
  },
  {
    id: "masterMode",
    label: "Master",
    value: "master",
    isChecked: playMode === "master",
    name: "theme",
    handleClick: () => handleTogglePlayMode("master"),
  },
];

function TogglePlayMode({
  playMode,
  TogglePlayMode,
  showToggle,
}: TogglePlayModeProps) {
  const handleTogglePlayMode = (playMode: PlayMode) => TogglePlayMode(playMode);
  return (
    <Container showToggle={showToggle}>
      <Toggle
        legend="Toggle Play Mode"
        fields={playModeToggleConfig({ handleTogglePlayMode, playMode })}
      />
    </Container>
  );
}

export { TogglePlayMode };
