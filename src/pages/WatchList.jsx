import { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";

import { API_ENDPOINTS } from "../constraints";
import { getAPIURL } from "../utils";
import MovieItem from "../components/Movie/Item/Item";
import { WatchListContext } from "../context";

function WatchList() {
  const [watchList, setWatchList] = useContext(WatchListContext);

  const renderWatchList = () => {
    if (watchList.length > 0) {
      return watchList.map((item) => {
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
            inList={true}
          />
        );
      });
    } else {
      return <h3>There's no watch list!</h3>;
    }
  };

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
        {renderWatchList()}
      </Box>
    </div>
  );
}

export default WatchList;
