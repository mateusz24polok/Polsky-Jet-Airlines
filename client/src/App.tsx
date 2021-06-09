import React from "react";
import { HashRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/core";
import { AppLayout } from "@layouts/AppLayout";
import { theme } from "@resources/theme";
import { store } from "@store/setupStore";

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <SnackbarProvider maxSnack={3}>
            <AppLayout />
          </SnackbarProvider>
        </HashRouter>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
