import { Box } from "@mui/material";

import Rating from "../../UI/Rating";
import MovieTitle from "../Title";
import MovieActions from "../Actions";
import MovieDescription from "../Description";

function MovieItem({
  detailObject,
  detailId,
  title,
  imgPath,
  ratingValue,
  itemStyleType,
  description = "",
  detailType = "movie",
}) {
  const itemStyleTypes = {
    horizontal: {
      container: {
        position: "relative",
        transition: "all 500ms",
        width: "100%",
        ":hover": {
          transform: "scale(1.07)",
          "@media (min-width: 898.98px)": {
            cursor: "pointer",
            ".info-detail": {
              display: "block",
            },
          },
        },
      },
      thumbnail: {
        height: "197px",
        display: "block",
        objectFit: "cover",
      },
      detailInfo: {
        position: "absolute",
        bottom: "0",
        width: "100%",
        backgroundColor: "#00000082",
        padding: "0.5rem 0.75rem",
        display: "none",
        "@media (max-width: 898.98px)": {
          display: "block",
        },
      },
    },
    vertical: {
      container: {
        display: "flex",
        width: "100%",
        "@media (max-width: 819.89px)": {
          flexDirection: "column",
        },
      },
      thumbnail: {
        width: "350px",
        display: "block",
        objectFit: "cover",
        "@media (max-width: 819.89px)": {
          width: "100%",
          height: "fit-content",
        },
      },
      detailInfo: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#00000082",
        padding: "0.5rem 1rem",
        "@media (max-width: 819.89px)": {
          padding: "1rem",
        },
      },
    },
  };

  return (
    <Box sx={itemStyleTypes[itemStyleType].container}>
      <Box
        component="img"
        src={`https://image.tmdb.org/t/p/w500/${imgPath}`}
        alt={title}
        width="350"
        draggable="false"
        sx={itemStyleTypes[itemStyleType].thumbnail}
      />
      <Box
        sx={itemStyleTypes[itemStyleType].detailInfo}
        className="info-detail"
      >
        <MovieTitle title={title} overflow />
        {description && <MovieDescription value={description} />}
        <Rating ratingValue={ratingValue} />
        <MovieActions
          detailObject={detailObject}
          detailType={detailType}
          detailId={detailId}
          inList={false}
        />
      </Box>
    </Box>
  );
}

export default MovieItem;
