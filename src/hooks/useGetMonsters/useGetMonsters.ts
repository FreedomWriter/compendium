import { useQuery } from "@tanstack/react-query";
import { getMonsters } from "api";
import { MonstersResponse } from "types";

export const useGetMonsters = () => {
  const {
    data: content,
    isLoading,
    isError,
    isSuccess,
  }: MonstersResponse = useQuery(["getMonsters"], getMonsters);

  return { content, isLoading, isError, isSuccess };
};
