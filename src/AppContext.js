import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [artistList, setArtistList] = useState();

  return (
    <AppContext.Provider value={[artistList, setArtistList]}>
      {props.children}
    </AppContext.Provider>
  );
}