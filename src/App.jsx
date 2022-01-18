import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import WatchList from "./pages/WatchList/WatchList";

import { themeOptions } from "./theme";
function App() {
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
