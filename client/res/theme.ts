import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    brandBlack: React.CSSProperties["color"];
    brandOrange: React.CSSProperties["color"];
    brandWhite: React.CSSProperties["color"];
    searchEngineBackground: React.CSSProperties["color"];
    socialMediaIconsAzure: React.CSSProperties["color"];
    footerBlue: React.CSSProperties["color"];
    footerGray: React.CSSProperties["color"];
  }
  interface PaletteOptions {
    brandBlack?: React.CSSProperties["color"];
    brandOrange?: React.CSSProperties["color"];
    brandWhite?: React.CSSProperties["color"];
    searchEngineBackground?: React.CSSProperties["color"];
    socialMediaIconsAzure?: React.CSSProperties["color"];
    footerBlue?: React.CSSProperties["color"];
    footerGray?: React.CSSProperties["color"];
  }
}

export const theme = createMuiTheme({
  palette: {
    brandBlack: "#040809",
    brandOrange: "#e26023",
    brandWhite: "#eaf4f3",
    searchEngineBackground: "rgba(222, 222, 222, 0.7)",
    socialMediaIconsAzure: "#7fb9de",
    footerBlue: "#005489",
    footerGray: "#5a6163",
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
