import { CreatureFilter } from "hooks";

export type CreatureConfig = {
  currFilter: CreatureFilter;
  handleToggle: (currFilter: CreatureFilter) => void;
};
export type ToggleCreatureModeTypes = {
  handleToggle: (currFilter: CreatureFilter) => void;
  showToggle: boolean;
  currFilter: CreatureFilter;
};
