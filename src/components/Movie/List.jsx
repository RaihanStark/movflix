import { Box, Typography, Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";

import MovieItem from "./Item/Item";
import { API_ENDPOINTS, SKELETON_PLACEHOLDER_SIZE } from "../../constraints";
import { getAPIURL } from "../../utils";

function MovieList({ titleList, sx }) {
  const [movieList, setMovieList] = useState([]);
  const URL_FETCH = getAPIURL(API_ENDPOINTS[titleList]);

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;

    axios.get(URL_FETCH).then((res) => {
      if (isSubscribed) setMovieList(res.data.results);
    });

    return () => (isSubscribed = false);
  }, [URL_FETCH]);

  const placeHolderRender = [...Array(SKELETON_PLACEHOLDER_SIZE)].map(
    (e, i) => {
      return (
        <Skeleton key={i} variant="rectangular" width={350} height={197} />
      );
    }
  );

  const renderMovieList = () => {
    if (movieList.length === 0) {
      return placeHolderRender;
    } else {
      return movieList.map((movie) => {
        return (
          <MovieItem
            key={movie.id}
            detailObject={movie}
            detailId={movie.id}
            title={movie.original_title || movie.name}
            imgPath={movie.backdrop_path || movie.poster_path}
            ratingValue={movie.vote_average / 2}
            itemStyleType="horizontal"
          />
        );
      });
    }
  };

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
          {renderMovieList()}
        </Box>
      </Scrollbar>
    </Box>
  );
}

export default MovieList;
