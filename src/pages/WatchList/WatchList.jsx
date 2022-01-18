import React from "react";
import { Box, Typography } from "@mui/material";

import MovieItemVertical from "../../components/MovieItemVertical/MovieItemVertical";

function WatchList() {
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
        {[...Array(5)].map((item) => {
          return (
            <MovieItemVertical
              title="Seal 1"
              imgPath="/7q448EVOnuE3gVAx24krzO7SNXM.jpg"
              ratingValue={4}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default WatchList;
