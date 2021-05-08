import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Router from "./router";
import THEME from "./theme";

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      // size: "small",
      variant: "outlined",
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
      <Router />
    </ThemeProvider>
  );
}

export default App;
