import { createMuiTheme } from "@material-ui/core/styles";
import React from "react";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    projectIndigo: React.CSSProperties["color"];
    brandBlack: React.CSSProperties["color"];
    brandOrange: React.CSSProperties["color"];
    brandWhite: React.CSSProperties["color"];
    searchEngineBackground: React.CSSProperties["color"];
    socialMediaIconsAzure: React.CSSProperties["color"];
    footerBlue: React.CSSProperties["color"];
    footerGray: React.CSSProperties["color"];
    mainGray: React.CSSProperties["color"];
  }
  interface PaletteOptions {
    projectIndigo?: React.CSSProperties["color"];
    brandBlack?: React.CSSProperties["color"];
    brandOrange?: React.CSSProperties["color"];
    brandWhite?: React.CSSProperties["color"];
    searchEngineBackground?: React.CSSProperties["color"];
    socialMediaIconsAzure?: React.CSSProperties["color"];
    footerBlue?: React.CSSProperties["color"];
    footerGray?: React.CSSProperties["color"];
    mainGray?: React.CSSProperties["color"];
  }
}

export const theme = createMuiTheme({
  palette: {
    projectIndigo: "#3f51b5",
    brandBlack: "#040809",
    brandOrange: "#e26023",
    brandWhite: "#eaf4f3",
    searchEngineBackground: "rgba(180, 180, 180, 0.75)",
    socialMediaIconsAzure: "#7fb9de",
    footerBlue: "#005489",
    footerGray: "#5a6163",
    mainGray: "#696969",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1920,
    },
  },
});
