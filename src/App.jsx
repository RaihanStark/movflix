import { Routes, Route } from "react-router-dom";

import Navbar from "./components/UI/Navbar";

import { AppContext } from "./context";
import PagesHome from "./pages/Home";
import PagesWatchList from "./pages/WatchList";
import PagesDetail from "./pages/Detail";
import { useContext } from "react";
import { Alert, Snackbar } from "@mui/material";

function App() {
  const [appState, setAppState] = useContext(AppContext);
  return (
    <>
      <Navbar />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={appState.alert.show}
        autoHideDuration={1500}
        onClose={() =>
          setAppState({
            ...appState,
            alert: { ...appState.alert, show: false },
          })
        }
      >
        <Alert severity={appState.alert.type} sx={{ width: "100%" }}>
          <b>{appState.alert.message}</b>
        </Alert>
      </Snackbar>

      <Routes>
        <Route path="/" element={<PagesHome />} />
        <Route path="/watch-list" element={<PagesWatchList />} />
        <Route path="/movie" element={<PagesDetail />}>
          <Route path=":detailId" element={<PagesDetail />} />
        </Route>
        <Route path="/tv" element={<PagesDetail />}>
          <Route path=":detailId" element={<PagesDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
