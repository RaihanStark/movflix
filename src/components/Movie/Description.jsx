import { Typography } from "@mui/material";

function MovieDescription({ value }) {
  return (
    <Typography
      variant="p"
      sx={{
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {value}
    </Typography>
  );
}

export default MovieDescription;
