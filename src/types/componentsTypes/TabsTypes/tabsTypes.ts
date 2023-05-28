import { Creature, Equipment, Material, Monster, Treasure } from "types";

export interface TabsProps {
  tabsConfig: TabConfig[];
  defaultIndex?: number;
}

export interface TabContentProps {
  isHidden: boolean;
  children: React.ReactNode;
}

export type TabConfig = {
  label: string;
  content: Creature[] | Equipment[] | Material[] | Monster[] | Treasure[];
  icon: JSX.Element;
};
