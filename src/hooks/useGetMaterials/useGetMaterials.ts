import { getMaterials } from "api";
import { useQuery } from "@tanstack/react-query";

interface MaterialsResponse {
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
}

export const useGetMaterials = () => {
  const {
    data: materials,
    isLoading,
    isError,
    isSuccess,
  }: MaterialsResponse = useQuery(["getMaterials"], getMaterials);

  return { materials, isLoading, isError, isSuccess };
};
