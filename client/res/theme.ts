import { createMuiTheme } from "@material-ui/core/styles";

// declare module "@material-ui/styles" {
//   interface DefaultTheme extends MyTheme {}
// }

// declare module "@material-ui/core/styles/createMuiTheme" {
//   interface ThemeOptions extends MyTheme {}
// }

// export interface MyTheme extends Theme {
//   palette: {
//     primary: {
//       main: string;
//     };
//   };
// }

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    brandPallete: {
      brandBlack: string;
      brandOrange: string;
      brandWhite: string;
    };
  }
  interface PaletteOptions {
    brandPallete: {
      brandBlack: string;
      brandOrange: string;
      brandWhite: string;
    };
  }
}

export const theme = createMuiTheme({
  palette: {
    brandPallete: {
      brandBlack: "#040809",
      brandOrange: "#e26023",
      brandWhite: "#eaf4f3",
    },
  },
});
