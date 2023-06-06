import { getCreatures } from "api";
import { useQuery } from "@tanstack/react-query";
import { Creature, PlayMode } from "types";

// this api separates creatures into two arrays[ food: [{...creatureData}, non_food]], we want to be able to return an entire list of creatures. We will also want to be able to sort by edible and non edible creatures and since the api doesn't offer query params, the work has been done here
export const useGetCreatures = (
  option?: "all" | "edible" | "inedible" | PlayMode
) => {
  const derivedOption = option || "all";
  const {
    data: { food: edibleCreatures, non_food: inedibleCreatures } = {
      food: [],
      non_food: [],
    },
    isLoading,
    isError,
    isSuccess,
  } = useQuery(["getAllCreatures", { derivedOption }], getCreatures);

  const CREATURE_MAP = {
    all: [...edibleCreatures, ...inedibleCreatures] as Creature[],
    edible: edibleCreatures as Creature[],
    inedible: inedibleCreatures as Creature[],
  };

  return {
    category:
      CREATURE_MAP[derivedOption as keyof typeof CREATURE_MAP][0]?.category,
    content: CREATURE_MAP[derivedOption as keyof typeof CREATURE_MAP],
    isLoading,
    isError,
    isSuccess,
  };
};
