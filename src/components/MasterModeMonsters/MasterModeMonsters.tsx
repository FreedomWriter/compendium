import React from "react";
import { Gallery } from "components/Gallery";

import { useGetMasterMode } from "hooks/useGetMasterMode";

import { Monster } from "types";

const MasterModeMonsters = ({
  toggleTheme,
  isHidden,
}: {
  toggleTheme: (isDarkMode: boolean) => void;
  isHidden: boolean;
}) => {
  const { content, isError, isLoading } = useGetMasterMode();

  if (isError) {
    return <h1>OH NOOOOO</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <Gallery isHidden={isHidden} content={content as Monster[]} />;
};
export { MasterModeMonsters };
