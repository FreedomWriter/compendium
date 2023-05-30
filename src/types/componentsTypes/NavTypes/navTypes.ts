export type NavProps = {
  handleClick: (index: number, selectedTabLabel: string) => void;
  selectedIndex: number;
  toggleTheme: (isDarkMode: boolean) => void;
};
