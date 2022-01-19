import { Box } from "@mui/material";
import MaterialRating from "@mui/material/Rating";

function Rating({ ratingValue }) {
  return (
    <Box
      sx={{
        margin: "0.75rem 0",
        display: "flex",
        flexGrow: "1",
      }}
    >
      <MaterialRating name="no-value" value={ratingValue} precision={0.5} />
      {ratingValue}
    </Box>
  );
}

export default Rating;
