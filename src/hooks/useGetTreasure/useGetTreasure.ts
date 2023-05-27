import { getTreasure } from "api";
import { useQuery } from "@tanstack/react-query";

interface TreasureResponse {
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

export const useGetTreasure = () => {
  const {
    data: treasure,
    isLoading,
    isError,
    isSuccess,
  }: TreasureResponse = useQuery(["getTreasure"], getTreasure);

  return { treasure, isLoading, isError, isSuccess };
};
