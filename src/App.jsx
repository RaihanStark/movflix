import { Routes, Route } from "react-router-dom";

import Navbar from "./components/UI/Navbar";

import PagesHome from "./pages/Home";
import PagesWatchList from "./pages/WatchList";
import PagesDetail from "./pages/Detail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<PagesHome />} />
        <Route path="/watch-list" element={<PagesWatchList />} />
        <Route path="/movies" element={<PagesDetail />}>
          <Route path=":detailId" element={<PagesDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
