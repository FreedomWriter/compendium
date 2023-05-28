import { TabContent } from "components/Tabs";
import { useGetMasterMode } from "hooks/useGetMasterMode";
import React from "react";
import { Monster } from "types";

const MasterModeMonsters = ({
  toggleTheme,
}: {
  toggleTheme: (isDarkMode: boolean) => void;
}) => {
  const { masterModeMonsters, isError, isLoading } = useGetMasterMode();

  return (
    <div>
      {isError && <h1>OH NOOOOO</h1>}
      {isLoading && <h1>Loading...</h1>}
      {(masterModeMonsters as Monster[])?.map((monster, index) => {
        return (
          <TabContent key={`tabpanel-${index}`} isHidden={false}>
            <Container key={index} monster={monster} />
          </TabContent>
        );
      })}
    </div>
  );
};
export { MasterModeMonsters };

const Container = ({ monster }: { monster: Monster }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "150px",
          height: "150px",
        }}
      >
        {monster.name}
      </div>
    </>
  );
};
