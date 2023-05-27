import { getCreatures } from "api/getCreatures";
import { useQuery } from "@tanstack/react-query";

interface Creature {
  category: string;
  common_locations: string[];
  cooking_effect: string;
  description: string;
  hearts_recovered: number;
  id: number;
  image: string;
  name: string;
}
// this api separates creatures into two arrays[ food: [{...creatureData}, non_food]], we want to be able to return an entire list of creatures. We will also want to be able to sort by edible and non edible creatures and since the api doesn't offer query params, the work has been done here
export const useGetCreatures = (option: "all" | "edible" | " inedible") => {
  const {
    data: { food: edibleCreatures, non_food: inedibleCreatures } = {
      food: [],
      non_food: [],
    },
    isLoading,
    isError,
    isSuccess,
  } = useQuery(["getAllCreatures", option], getCreatures);

  const CREATURE_MAP = {
    all: [...edibleCreatures, ...inedibleCreatures] as Creature[],
    edible: edibleCreatures as Creature[],
    inedible: inedibleCreatures as Creature[],
  };

  return {
    creatures: CREATURE_MAP[option as keyof typeof CREATURE_MAP],
    isLoading,
    isError,
    isSuccess,
  };
};
