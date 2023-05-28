import React from "react";
import {
  useGetCreatures,
  useGetEquipment,
  useGetMaterials,
  useGetMonsters,
  useGetTreasure,
} from "hooks";

import { AllContent, TabConfig } from "types";

const Icon = ({ icon }: { icon: string }) => {
  return (
    <div style={{ height: "18px", width: "18px" }}>
      <img src={`/images/${icon.toLowerCase()}.png`} alt={icon}></img>
    </div>
  );
};

export type UseContent = {
  tabConfig: TabConfig[];
  isLoading: boolean;
  isError: boolean;
};

const useContent = (): UseContent => {
  const [tabConfig, setTabConfig] = React.useState<TabConfig[] | []>([]);
  const creaturesData = useGetCreatures("all");
  const equipmentData = useGetEquipment();
  const materialsData = useGetMaterials();
  const monstersData = useGetMonsters();
  const treasureData = useGetTreasure();
  const isLoading = [
    creaturesData,
    equipmentData,
    materialsData,
    monstersData,
    treasureData,
  ].some((item) => item.isLoading);

  const isError = [
    creaturesData,
    equipmentData,
    materialsData,
    monstersData,
    treasureData,
  ].some((item) => item.isError);

  React.useEffect(() => {
    if (!isLoading && !isError && tabConfig.length === 0) {
      const mergedData = (
        [
          creaturesData.creatures,
          equipmentData.equipment,
          materialsData.materials,
          monstersData.monsters,
          treasureData.treasure,
        ].filter(Boolean) as AllContent
      ).map((content) => ({
        label: content[0].category,
        content,
        icon: <Icon icon={content[0].category || "default"} />,
      }));
      setTabConfig(mergedData);
    }
  }, [
    creaturesData.creatures,
    equipmentData.equipment,
    isError,
    isLoading,
    materialsData.materials,
    monstersData.monsters,
    tabConfig.length,
    treasureData.treasure,
  ]);

  return {
    tabConfig,
    isLoading,
    isError,
  };
};

export { useContent };
