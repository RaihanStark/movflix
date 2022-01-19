import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";

import { API_ENDPOINTS } from "../constraints";
import { getAPIURL } from "../utils";
import MovieItem from "../components/Movie/Item/Item";

function WatchList() {
  const [listData, setListData] = useState([]);
  const URL_FETCH = getAPIURL(API_ENDPOINTS["Top rated movies"]);

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;

    axios.get(URL_FETCH).then((res) => {
      if (isSubscribed) setListData(res.data.results);
    });

    return () => (isSubscribed = false);
  }, [URL_FETCH]);

  return (
    <div>
      <Typography mx={3} mt={4} mb={3} variant="h5">
        My Watch List
      </Typography>
      <Box
        mx={3}
        sx={{
          gap: "1.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {listData.map((item) => {
          return (
            <MovieItem
              key={item.id}
              detailId={item.id}
              title={item.original_title || item.name}
              imgPath={item.backdrop_path || item.poster_path}
              ratingValue={item.vote_average / 2}
              itemStyleType="vertical"
              description={item.overview}
              detailType="movie"
            />
          );
        })}
      </Box>
    </div>
  );
}

export default WatchList;
