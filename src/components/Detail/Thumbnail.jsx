import { Box } from "@mui/material";
import React from "react";

function DetailThumbnail({ itemData }) {
  return (
    <Box
      component="img"
      sx={{
        width: "auto",
        height: "auto",
        "@media (min-width:789.89px) and (max-width:1068.89px)": {
          width: "250px",
          height: "375px",
        },
      }}
      src={`https://image.tmdb.org/t/p/w500${itemData.poster_path}`}
    />
  );
}

export default DetailThumbnail;
