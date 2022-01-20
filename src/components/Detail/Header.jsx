import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const DetailHeader = ({ itemData }) => {
  const renderReleaseDate = () => {
    if (itemData.release_date) return itemData.release_date.split("-")[0];
    if (itemData.first_air_date) return itemData.first_air_date.split("-")[0];
  };

  const renderitemLength = () => {
    if (itemData.runtime) return `${itemData.runtime}min`;
    if (itemData.number_of_episodes)
      return `${itemData.number_of_episodes} episodes`;
  };
  return (
    itemData && (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 500 }}>
            {itemData.original_title || itemData.name}
          </Typography>
          <Typography
            variant="h6"
            mt={2}
            sx={{
              fontWeight: 400,
              color: "#727272",
              letterSpacing: "2px",
            }}
          >
            {renderReleaseDate()} | {renderitemLength()} |{" "}
            {itemData.original_language}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
          }}
        >
          <Typography variant="h3">{itemData.vote_average} </Typography>
          <StarIcon
            sx={{
              color: "#F1C40F",
              fontSize: "2.25rem",
            }}
          />
        </Box>
      </Box>
    )
  );
};

export default DetailHeader;
