export type EquipmentResponse = {
  data?: {
    attack: number;
    category: string;
    common_locations: string[];
    defense: number;
    description: string;
    id: number;
    image: string;
    name: string;
  };
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};
export type Equipment = {
  attack: number;
  category: string;
  common_locations: string[];
  defense: number;
  description: string;
  id: number;
  image: string;
  name: string;
};
