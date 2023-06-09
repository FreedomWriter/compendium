export const getTreasureMock = () => ({
  treasure: [
    {
      category: "treasure",
      common_locations: ["Greater Hyrule"],
      description:
        "This deposit contains a good deal of precious ore and the occasional rare mineral, like ruby and sapphire. Break it open to see what it has to offer!",
      drops: ["ruby", "sapphire", "diamond", "amber", "topaz", "flint"],
      id: 388,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/rare_ore_deposit/image",
      name: "rare ore deposit",
    },
    {
      category: "treasure",
      common_locations: ["Greater Hyrule"],
      description:
        "This deposit contains a good deal of ore. Breaking the rock will yield rock salt, flint, and other minerals of varying value.",
      drops: [
        "ruby",
        "diamond",
        "amber",
        "sapphire",
        "topaz",
        "opal",
        "rock salt",
        "flint",
      ],
      id: 387,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/ore_deposit/image",
      name: "ore deposit",
    },
    {
      category: "treasure",
      common_locations: ["Greater Hyrule"],
      description:
        "Fortunes untold (potentially) await the lucky adventurer who finds one of these. Chests can often be found within shrines or at enemy camps, but there may be some crafty folks who think they're safer underground.",
      drops: ["treasures"],
      id: 386,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/treasure_chest/image",
      name: "treasure chest",
    },
    {
      category: "treasure",
      common_locations: ["Greater Hyrule"],
      description:
        "This deposit contains quite a bit of luminous stone. Crack it open to get at the easily process rocks within.",
      drops: ["luminous", "flint"],
      id: 389,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/luminous_ore_deposit/image",
      name: "luminous ore deposit",
    },
  ],
  isLoading: false,
  isError: false,
  isSuccess: true,
});
