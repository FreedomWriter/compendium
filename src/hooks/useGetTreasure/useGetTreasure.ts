import { useQuery } from "@tanstack/react-query";
import { getTreasure } from "api";
import { TreasureResponse } from "types";

export const useGetTreasure = () => {
  const {
    data: treasure,
    isLoading,
    isError,
    isSuccess,
  }: TreasureResponse = useQuery(["getTreasure"], getTreasure);

  return { treasure, isLoading, isError, isSuccess };
};
