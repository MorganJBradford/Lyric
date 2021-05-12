import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [artistList, setArtistList] = useState(null);
  const [search, setSearch] = useState(null);

  return (
    <AppContext.Provider value={{
        artistList,
        setArtistList,
        search,
        setSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
}