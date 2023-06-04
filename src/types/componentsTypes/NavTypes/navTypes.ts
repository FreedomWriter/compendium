export type NavProps = {
  handleClick: (index: number, selectedTabLabel: string) => void;
  selectedIndex: number;
  togglePlayMode: (isDefaultPlayMode: boolean) => void;
};
