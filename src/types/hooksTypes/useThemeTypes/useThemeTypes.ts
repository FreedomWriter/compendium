import { CustomTheme } from "types";

export type UseThemeResponse = [CustomTheme, (mode?: boolean) => void];

export type PlayMode = "default" | "master";

export type TogglePlayModeProps = {
  togglePlayMode: (playMode: PlayMode) => void;
  playMode: PlayMode;
  showToggle?: boolean;
};

export type DarkModeConfigProps = {
  handleTogglePlayMode: (playMode: PlayMode) => void;
  playMode: PlayMode;
};
