export interface TabsConfig {
  label: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

export interface TabsProps {
  tabsConfig: TabsConfig[];
  defaultIndex?: number;
}

export interface TabContentProps {
  isHidden: boolean;
  index: number;
  children: React.ReactNode;
}
