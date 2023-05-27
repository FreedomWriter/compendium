import { useQuery } from "@tanstack/react-query";
import { getMonsters } from "api";
import { MonstersResponse } from "types";

export const useGetMonsters = () => {
  const {
    data: monsters,
    isLoading,
    isError,
    isSuccess,
  }: MonstersResponse = useQuery(["getMonsters"], getMonsters);

  return { monsters, isLoading, isError, isSuccess };
};
