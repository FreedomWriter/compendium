import React from "react";
import {
  useGetCreatures,
  useGetEquipment,
  useGetMaterials,
  useGetMonsters,
  useGetTreasure,
} from "hooks";

import { useGetMasterMode } from "hooks/useGetMasterMode";
import { CreatureFilter, FetchingType, PlayMode } from "types";

export interface FetchContentProps {
  type: FetchingType;
  playMode?: PlayMode;
  creatureFilter?: CreatureFilter;
}

const useFetchContent = ({
  creatureFilter,
  playMode,
  type,
}: FetchContentProps) => {
  let selectedHookRef: React.MutableRefObject<any> = React.useRef();
  let hookArgsRef: React.MutableRefObject<any> = React.useRef();

  switch (type) {
    case "creatures":
      hookArgsRef.current = creatureFilter;
      selectedHookRef.current = useGetCreatures;
      break;
    case "equipment":
      selectedHookRef.current = useGetEquipment;
      break;
    case "materials":
      selectedHookRef.current = useGetMaterials;
      break;
    case "monsters":
      hookArgsRef.current = creatureFilter;
      if (playMode === "default") {
        selectedHookRef.current = useGetMonsters;
      } else {
        selectedHookRef.current = useGetMasterMode;
      }
      break;
    case "treasure":
      selectedHookRef.current = useGetTreasure;
      break;

    default:
      hookArgsRef.current = creatureFilter;
      selectedHookRef.current = useGetCreatures; // Fallback to a default hook
      break;
  }

  const data =
    selectedHookRef.current && selectedHookRef.current(hookArgsRef.current);

  return data;
};

export { useFetchContent };
