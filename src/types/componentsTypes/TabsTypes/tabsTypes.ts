export type TabsProps = {
  tabsConfig: TabConfig[];
  defaultIndex?: number;
  toggleTheme: (newValue: boolean) => void;
};

export type TabContentProps = {
  isHidden: boolean;
  children: React.ReactNode;
};

export type TabConfig = {
  label: string;

  icon: JSX.Element;
};

export type Tab =
  | "creatures"
  | "equipment"
  | "materials"
  | "monsters"
  | "treasure";
