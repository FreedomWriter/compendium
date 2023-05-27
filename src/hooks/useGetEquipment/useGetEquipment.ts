import { getEquipment } from "api";
import { useQuery } from "@tanstack/react-query";

interface EquipmentResponse {
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

export const useGetEquipment = () => {
  const {
    data: equipment,
    isLoading,
    isError,
    isSuccess,
  }: EquipmentResponse = useQuery(["getEquipment"], getEquipment);

  return { equipment, isLoading, isError, isSuccess };
};
