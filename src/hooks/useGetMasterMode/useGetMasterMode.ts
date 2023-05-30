import { useQuery } from "@tanstack/react-query";
import { getMasterMode } from "api";

import { MonstersResponse } from "types";

export const useGetMasterMode = () => {
  const {
    data: content,
    isLoading,
    isError,
    isSuccess,
  }: MonstersResponse = useQuery(["getMasterMode"], getMasterMode);

  return { content, isLoading, isError, isSuccess };
};
