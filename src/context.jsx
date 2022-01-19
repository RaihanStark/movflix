import React, { createContext, useState } from "react";

export const WatchListContext = createContext();
export const AppContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [appState, setAppState] = useState({
    alert: {
      type: "success",
      show: false,
      error: false,
      message: "",
    },
  });
  return (
    <AppContext.Provider value={[appState, setAppState]}>
      <WatchListContext.Provider value={[watchList, setWatchList]}>
        {children}
      </WatchListContext.Provider>
    </AppContext.Provider>
  );
};
