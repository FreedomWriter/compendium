import React from "react";
import { useContent, useTheme } from "hooks";
import { GlobalStyles } from "utils";
import { TabManager } from "components";

function App() {
  const [theme] = useTheme();
  const { tabConfig, isLoading, isError } = useContent();

  return (
    <main>
      <GlobalStyles theme={theme} />
      {isError && <h1>OH NOOOOO</h1>}
      {isLoading && <h1>Loading...</h1>}
      {tabConfig.length > 0 && <TabManager tabsConfig={tabConfig} />}
    </main>
  );
}

export default App;
