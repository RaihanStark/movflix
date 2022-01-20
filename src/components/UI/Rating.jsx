import { Box } from "@mui/material";
import { useContext } from "react";
import MaterialRating from "@mui/material/Rating";

import { AppContext } from "../../context";

function Rating({ ratingValue, disableValueDisplay = false }) {
  const [appState, setAppState] = useContext(AppContext);

  const ratingHandler = (e) => {
    const selectedValue = e.target.defaultValue;
    setAppState({
      ...appState,
      alert: {
        ...appState.alert,
        type: "success",
        show: true,
        message: `You rated ${selectedValue} stars!`,
      },
    });
  };
  return (
    <Box
      sx={{
        margin: "0.75rem 0",
        display: "flex",
        flexGrow: "1",
      }}
    >
      <MaterialRating
        onChange={ratingHandler}
        value={ratingValue}
        precision={1}
      />
      {!disableValueDisplay ? (
        <span style={{ marginLeft: "0.5rem" }}>{ratingValue}</span>
      ) : null}
    </Box>
  );
}

export default Rating;
