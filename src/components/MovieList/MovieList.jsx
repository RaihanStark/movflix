import { Box, Typography, Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";

import MovieItem from "../MovieItem/MovieItem";
import { API_ENDPOINTS, API_URL } from "../../constraints";

function MovieList({ titleList, sx }) {
  const [movieList, setMovieList] = useState([]);
  const URL_FETCH = `${API_URL}${API_ENDPOINTS[titleList]}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&page=1`;

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;

    axios.get(URL_FETCH).then((res) => {
      if (isSubscribed) setMovieList(res.data.results);
    });

    return () => (isSubscribed = false);
  }, []);

  const placeHolderRender = [...Array(20)].map((e, i) => {
    return <Skeleton key={i} variant="rectangular" width={350} height={197} />;
  });

  return (
    <Box mt={4} sx={sx}>
      <Typography ml={3} variant="h5">
        {titleList}
      </Typography>

      <Scrollbar style={{ width: "100%", height: 240 }}>
        <Box
          sx={{
            display: "flex",
            width: "fit-content",
            columnGap: "1.5rem",
            paddingLeft: "1.5rem",
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
                    movieId={movie.id}
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
