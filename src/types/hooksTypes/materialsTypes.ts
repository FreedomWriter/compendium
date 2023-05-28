export type MaterialsResponse = {
  data?: {
    category: string;
    common_locations: string[];
    cooking_effect: string;
    description: string;
    hearts_recovered: number;
    id: number;
    image: string;
    name: string;
  };
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export type Material = {
  category: string;
  common_locations: string[];
  cooking_effect: string;
  description: string;
  hearts_recovered: number;
  id: number;
  image: string;
  name: string;
};
