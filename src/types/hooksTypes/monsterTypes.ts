export type Monster = {
  category: string;
  common_locations: string[];
  description: string;
  drops: string[];
  id: number;
  image: string;
  name: string;
};

export type MonstersResponse = {
  data?: Monster[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};
