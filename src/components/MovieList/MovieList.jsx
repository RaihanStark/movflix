import { Box, Typography, Skeleton } from "@mui/material";
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
    });
  }, []);

  const placeHolderRender = [...Array(20)].map((e, i) => {
    return (
      <Skeleton
        sx={{ marginLeft: "1.5rem" }}
        key={i}
        variant="rectangular"
        width={350}
        height={197}
      />
    );
  });

  return (
    <Box mt={4}>
      <Typography ml={3} variant="h5">
        {titleList}
      </Typography>

      <Scrollbar style={{ width: "100%", height: 240 }}>
        <Box
          sx={{
            display: "flex",
            width: "fit-content",
          }}
          pb={1}
          pt={2}
        >
          {movieList.length === 0
            ? placeHolderRender
            : movieList.map((movie) => {
                return (
                  <MovieItem
                    key={movie.id}
                    title={movie.original_title || movie.name}
                    imgPath={movie.backdrop_path || movie.poster_path}
                    ratingValue={movie.vote_average / 2}
                  />
                );
              })}
        </Box>
      </Scrollbar>
    </Box>
  );
}

export default MovieList;
