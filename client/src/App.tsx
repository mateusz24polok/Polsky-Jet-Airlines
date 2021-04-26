import React from "react";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { AppLayout } from "@layouts/AppLayout";
import { theme } from "@resources/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <AppLayout />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
