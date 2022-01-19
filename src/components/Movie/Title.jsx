import { Typography } from "@mui/material";

function MovieTitle({ title, overflow = false }) {
  const overflowValue = {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "322px",
  };

  return (
    <Typography variant="h6" mb={1} sx={overflow && overflowValue}>
      {title}
    </Typography>
  );
}

export default MovieTitle;
