import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WatchListContext, AppContext } from "../../context";

function MovieActions({ detailObject, detailId, detailType, inList = false }) {
  const [watchList, setWatchList] = useContext(WatchListContext);
  const [appState, setAppState] = useContext(AppContext);

  const onClickListHandler = (id) => {
    setWatchList(watchList.concat(detailObject));
    setAppState({
      ...appState,
      alert: {
        ...appState.alert,
        show: true,
        message: `${
          detailObject.original_title || detailObject.name
        } added to watch list!`,
      },
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        "button.Mui-disabled": {
          backgroundColor: "#ce020d87",
        },
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
      <Button
        variant="contained"
        disableRipple
        onClick={() => onClickListHandler(detailId)}
      >
        {inList ? "Remove from list" : "Add to watch list"}
      </Button>
    </Box>
  );
}

export default MovieActions;
