import {
  Creature,
  Equipment,
  Material,
  Monster,
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
