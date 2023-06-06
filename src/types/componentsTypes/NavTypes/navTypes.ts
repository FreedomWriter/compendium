import { Content, CreatureFilter, PlayMode } from "types";

export type NavProps = {
  handleClick: (index: number, selectedTabLabel: string) => void;
  selectedIndex: number;
  togglePlayMode: (isDefaultPlayMode: boolean) => void;
  content: Content[];
  handleToggleCreatureMode: (option: CreatureFilter) => void;
  handleTogglePlayMode: (newPlayMode: PlayMode) => void;
  playMode: PlayMode;
  creatureFilter: CreatureFilter;
  isContentLoading: boolean;
  isToggleVisible: boolean;
};
