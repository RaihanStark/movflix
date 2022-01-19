import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { WatchListContext, AppContext } from "../../context";

function MovieActions({ detailObject, detailId, detailType, inList = false }) {
  const [inListState, setInListState] = useState(inList);
  const [watchList, setWatchList] = useContext(WatchListContext);
  const [appState, setAppState] = useContext(AppContext);

  const addItemToList = (id) => {
    // Check Duplication
    const isDuplicate = watchList.filter((item) => item.id === id);
    if (isDuplicate.length) {
      return setAppState({
        ...appState,
        alert: {
          ...appState.alert,
          type: "error",
          show: true,
          message: `${
            detailObject.original_title || detailObject.name
          } already on watch list!`,
        },
      });
    }

    setWatchList(watchList.concat(detailObject));
    setAppState({
      ...appState,
      alert: {
        ...appState.alert,
        type: "success",
        show: true,
        message: `${
          detailObject.original_title || detailObject.name
        } added to watch list!`,
      },
    });
  };

  const removeItemFromList = (id) => {
    // Check Duplication
    const isFound = watchList.filter((item) => item.id === id);
    if (isFound.length) {
      const name = isFound[0].original_title || isFound[0].name;
      setWatchList(watchList.filter((item) => item.id !== id));
      setAppState({
        ...appState,
        alert: {
          ...appState.alert,
          type: "success",
          show: true,
          message: `${name} removed from watch list!`,
        },
      });
      return;
    }

    setAppState({
      ...appState,
      alert: {
        ...appState.alert,
        type: "error",
        show: true,
        message: `${
          detailObject.original_title || detailObject.name
        } already removed watch list!`,
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
        to={`/${detailType}/${detailId}`}
        variant="contained"
        sx={{ marginRight: "1rem" }}
      >
        View details
      </Button>
      <Button
        variant="contained"
        disableRipple
        onClick={() => {
          inList ? removeItemFromList(detailId) : addItemToList(detailId);
        }}
      >
        {inList ? "Remove from list" : "Add to watch list"}
      </Button>
    </Box>
  );
}

export default MovieActions;
