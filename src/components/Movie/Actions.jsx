import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function MovieActions({ detailId, detailType, inList = false }) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Button
        component={Link}
        to={`/detail/${detailType}/${detailId}`}
        variant="contained"
        sx={{ marginRight: "1rem" }}
      >
        View details
      </Button>
      <Button variant="contained">
        {inList ? "Remove from list" : "Add to watch list"}
      </Button>
    </Box>
  );
}

export default MovieActions;
