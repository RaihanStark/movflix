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
        <Route path="/detail/" element={<PagesDetail />}>
          <Route path=":detailId" element={<PagesDetail type="movie" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
