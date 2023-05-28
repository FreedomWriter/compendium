export type TreasureResponse = {
  data?: {
    category: string;
    common_locations: string[];
    description: string;
    drops: string[];
    id: number;
    image: string;
    name: string;
  };
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export type Treasure = {
  category: string;
  common_locations: string[];
  description: string;
  drops: string[];
  id: number;
  image: string;
  name: string;
};
