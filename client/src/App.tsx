import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../res/theme";
import { AppLayout } from "./layouts/AppLayout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
