import { CustomTheme } from "types";

export type UseThemeResponse = [CustomTheme, (mode?: boolean) => void];

export type PlayMode = "default" | "master";

export type ToggleModeProps = {
  toggleMode: (playMode: PlayMode) => void;
  playMode: PlayMode;
};

export type DarkModeConfigProps = {
  handleToggleMode: (playMode: PlayMode) => void;
  playMode: PlayMode;
};
