import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { themeOptions } from "./theme";
function App() {
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <Home />
    </ThemeProvider>
  );
}

export default App;
