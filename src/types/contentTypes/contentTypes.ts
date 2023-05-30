import { CreatureFilter } from "hooks";
import {
  Creature,
  Equipment,
  Material,
  Monster,
  PlayMode,
  TabConfig,
  Treasure,
} from "types";

export type AllContent = [
  Creature[],
  Equipment[],
  Material[],
  Monster[],
  Treasure[]
];

export type Content = Creature | Equipment | Material | Monster | Treasure;

export type UseContent = {
  tabConfig: TabConfig[];
};

export type FetchContentProps = {
  type: string;
  playMode?: PlayMode;
  creatureFilter?: CreatureFilter;
};
export type GalleryProps = {
  content: Content[];
  category?: string;
  playMode?: string;
};
