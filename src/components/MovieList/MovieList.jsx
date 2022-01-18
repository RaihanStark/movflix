import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";

import MovieItem from "../MovieItem/MovieItem";
import { API_ENDPOINTS } from "../../constraints";

function MovieList({ titleList }) {
  const [movieList, setMovieList] = useState([]);
  const URL_FETCH = `https://api.themoviedb.org/3/${API_ENDPOINTS[titleList]}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&page=1`;

  useEffect(() => {
    axios.get(URL_FETCH).then((res) => {
      setMovieList(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  return (
    <Box mt={2}>
      <Typography ml={3} variant="h5">
        {titleList}
      </Typography>

      <Scrollbar style={{ width: "100%", height: 250 }}>
        <Box
          sx={{
            display: "flex",
            columnGap: ".5rem",
          }}
          pb={1}
          pt={2}
        >
          {movieList &&
            movieList.map((movie) => {
              return (
                <MovieItem
                  key={movie.id}
                  title={movie.original_title}
                  imgPath={movie.backdrop_path}
                />
              );
            })}
        </Box>
      </Scrollbar>
    </Box>
  );
}

export default MovieList;
