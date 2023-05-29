import { useQuery } from "@tanstack/react-query";
import { getMasterMode } from "api";

import { MonstersResponse } from "types";

export const useGetMasterMode = () => {
  const {
    data: masterModeMonsters,
    isLoading,
    isError,
    isSuccess,
  }: MonstersResponse = useQuery(["getMasterMode"], getMasterMode);
  console.log({ masterModeMonsters });
  return { masterModeMonsters, isLoading, isError, isSuccess };
};
