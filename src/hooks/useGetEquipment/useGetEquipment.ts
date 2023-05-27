import { useQuery } from "@tanstack/react-query";
import { getEquipment } from "api";
import { EquipmentResponse } from "types";

export const useGetEquipment = () => {
  const {
    data: equipment,
    isLoading,
    isError,
    isSuccess,
  }: EquipmentResponse = useQuery(["getEquipment"], getEquipment);

  return { equipment, isLoading, isError, isSuccess };
};
