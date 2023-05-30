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

  icon: JSX.Element;
}
