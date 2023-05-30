import { useQuery } from "@tanstack/react-query";
import { getMaterials } from "api";
import { MaterialsResponse } from "types";

export const useGetMaterials = () => {
  const {
    data: content,
    isLoading,
    isError,
    isSuccess,
  }: MaterialsResponse = useQuery(["getMaterials"], getMaterials);

  return { content, isLoading, isError, isSuccess };
};
