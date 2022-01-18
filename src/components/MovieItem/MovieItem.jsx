import { Box, Typography, Button, Rating } from "@mui/material";
import React from "react";

function MovieItem({ title, imgPath }) {
  return (
    <Box
      sx={{
        position: "relative",
        marginLeft: "1.5rem",
        transition: "all 500ms",
        ":hover": {
          transform: "scale(1.07)",
          "@media (min-width: 898.98px)": {
            cursor: "pointer",
            ".info-detail": {
              display: "block",
            },
          },
        },
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${imgPath}`}
        alt={title}
        width="350"
        height="197"
        draggable="false"
        style={{
          display: "block",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          backgroundColor: "#00000082",
          padding: "0.5rem 0.75rem",
          display: "none",
          "@media (max-width: 898.98px)": {
            display: "block",
          },
        }}
        className="info-detail"
      >
        <Typography
          variant="h6"
          mb={1}
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "322px",
          }}
        >
          {title}
        </Typography>

        <Rating
          name="no-value"
          value={5}
          sx={{
            marginBottom: "1rem",
          }}
        />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button variant="contained" sx={{ marginRight: "1rem" }}>
            View details
          </Button>
          <Button variant="contained">Add to watch list</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MovieItem;
