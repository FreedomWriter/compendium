import { Creature, Equipment, Material, Monster, Treasure } from "types";

export type TabsProps = {
  tabsConfig: TabConfig[];
  defaultIndex?: number;
  toggleTheme: (newValue: boolean) => void;
};

export type TabContentProps = {
  isHidden: boolean;
  children: React.ReactNode;
};

export interface TabConfig {
  label: string;
  content: Creature[] | Equipment[] | Material[] | Monster[] | Treasure[];
  icon: JSX.Element;
}
