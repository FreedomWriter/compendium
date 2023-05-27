import React from "react";
import { useTheme } from "hooks";
import { GlobalStyles } from "utils";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <GlobalStyles theme={theme} />
      <div>Compendium</div>
      <div style={{ color: theme.primary }}>primary</div>
      <div style={{ color: theme.secondary }}>secondary</div>
      <div style={{ color: theme.error }}>My word!</div>
      <div style={{ color: theme.success }}>My word!</div>
    </>
  );
}

export default App;
