import { CustomTheme } from "types";

export type UsePlayMode = [CustomTheme, (mode?: boolean) => void];

export type PlayMode = "default" | "master";

export type DarkModeConfigProps = {
  handleTogglePlayMode: (playMode: PlayMode) => void;
  playMode: PlayMode;
};

export type FetchingType =
  | "creatures"
  | "equipment"
  | "materials"
  | "monsters"
  | "treasure";
