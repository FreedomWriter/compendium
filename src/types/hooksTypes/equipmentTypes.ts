export interface EquipmentResponse {
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
}
