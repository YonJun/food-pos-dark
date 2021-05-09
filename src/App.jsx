import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Router from "./router";
import THEME from "./theme";
import { GlobalStyles } from "twin.macro";

const theme = createMuiTheme({
  props: {
    MuiButton: {
      size: "small",
    },
    MuiFilledInput: {
      margin: "dense",
    },
    MuiFormControl: {
      margin: "dense",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: "dense",
    },
    MuiFab: {
      size: "small",
    },
    MuiTable: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      variant: "outlined",
    },
    MuiToolbar: {
      variant: "dense",
    },
  },
  overrides: {
    MuiTab: {
      root: {
        padding: 0,
      },
      wrapper: {
        alignItems: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
  palette: {
    primary: {
      main: THEME.primary.main,
      dark: THEME.primary.dark,
      light: THEME.primary.light,
      contrastText: THEME.primary.text,
    },
    secondary: {
      main: THEME.secondary.main,
      dark: THEME.secondary.dark,
      light: THEME.secondary.light,
      contrastText: THEME.secondary.text,
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router />
    </ThemeProvider>
  );
}

export default App;
