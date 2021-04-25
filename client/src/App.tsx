import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../res/theme";
import { MainLayout } from "./layouts/MainLayout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
