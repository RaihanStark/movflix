import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

import { themeOptions } from "./theme";
function App() {
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <MovieList titleList="Now playing movies" />
      <MovieList titleList="Top rated movies" />
      <MovieList titleList="Upcoming movies" />
      <MovieList titleList="Popular movies" />
      {/* <MovieList titleList="Popular TV shows" />
      <MovieList titleList="Top rated TV shows" />
      <MovieList titleList="On the air TV shows" />
      <MovieList titleList="Airing today TV shows" />
      <MovieList titleList="Popular people" /> */}
    </ThemeProvider>
  );
}

export default App;
