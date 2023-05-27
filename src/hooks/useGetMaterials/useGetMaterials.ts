import { useQuery } from "@tanstack/react-query";
import { getMaterials } from "api";
import { MaterialsResponse } from "types";

export const useGetMaterials = () => {
  const {
    data: materials,
    isLoading,
    isError,
    isSuccess,
  }: MaterialsResponse = useQuery(["getMaterials"], getMaterials);

  return { materials, isLoading, isError, isSuccess };
};
