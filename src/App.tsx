import React from "react";
import { useTheme } from "hooks";
import { GlobalStyles } from "utils";
import { TabManager } from "components";

const Image = ({ icon }: { icon: string }) => {
  return (
    <div style={{ height: "18px", width: "18px" }}>
      <img src={`/images/${icon.toLowerCase()}.png`} alt={icon}></img>
    </div>
  );
};

const tabsConfig = [
  {
    label: "Creatures",
    content: <p>Creatures</p>,
    icon: <Image icon="Creatures" />,
  },
  {
    label: "Equipment",
    content: <p>Equipment</p>,
    icon: <Image icon="Equipment" />,
  },
  {
    label: "Materials",
    content: <p>Materials</p>,
    icon: <Image icon="Materials" />,
  },
  {
    label: "Monsters",
    content: <p>Monsters</p>,
    icon: <Image icon="Monsters" />,
  },
  {
    label: "Treasure",
    content: <p>Treasure</p>,
    icon: <Image icon="Treasure" />,
  },
];

function App() {
  const [theme] = useTheme();
  return (
    <main>
      <GlobalStyles theme={theme} />
      <TabManager tabsConfig={tabsConfig} />
      <div>Compendium</div>
      <div style={{ color: theme.primary }}>primary</div>
      <div style={{ color: theme.secondary }}>secondary</div>
      <div style={{ color: theme.error }}>My word!</div>
      <div style={{ color: theme.success }}>My word!</div>
    </main>
  );
}

export default App;
