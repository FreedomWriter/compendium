import { useQuery } from "@tanstack/react-query";
import { getMonsters } from "api";

interface MonstersResponse {
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
}

export const useGetMonsters = () => {
  const {
    data: monsters,
    isLoading,
    isError,
    isSuccess,
  }: MonstersResponse = useQuery(["getMonsters"], getMonsters);

  return { monsters, isLoading, isError, isSuccess };
};
