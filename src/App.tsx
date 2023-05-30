import React from "react";
import { useTheme } from "hooks";
import { GlobalStyles } from "utils";
import { Nav, TabContent } from "components";

function App() {
  const [theme, toggleTheme] = useTheme();

  const [selectedTab, setSelectedTab] = React.useState("creatures");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleTabClick = React.useCallback(
    (index: number, selectedTabLabel: string) => {
      setSelectedIndex(index);
      toggleTheme(false);
      setSelectedTab(selectedTabLabel);
    },
    [toggleTheme]
  );

  return (
    <main>
      <GlobalStyles theme={theme} />
      <Nav
        selectedIndex={selectedIndex}
        handleClick={handleTabClick}
        toggleTheme={toggleTheme}
      />
      <TabContent selectedTab={selectedTab} toggleTheme={toggleTheme} />
    </main>
  );
}

export default App;
