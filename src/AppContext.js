import React, { useState } from "react";


export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [albumList, setAlbumList] = useState(null);
  const [animationState, setAnimationState] = useState(false);
  const [artistList, setArtistList] = useState(null);
  const [queryType, setQueryType] = useState(null);
  const [search, setSearch] = useState(null);
  const [searchMethod, setSearchMethod] = useState(null);
  const [trackList, setTrackList] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [currentList, setCurrentList] = useState("home");
  const [backBtn, setBackBtn] = useState([]);
  const [prevState, setPrevState] = useState(null);
  const [counter, setCounter] = useState(0)


  return (
    <AppContext.Provider value=
    {{
        albumList,
        setAlbumList,  
        animationState,
        setAnimationState,
        artistList,
        setArtistList,
        backBtn,
        setBackBtn,
        queryType,
        setQueryType,
        search,
        setSearch,
        searchMethod,
        setSearchMethod,
        trackList,
        setTrackList,
        lyrics,
        setLyrics,
        currentList,
        setCurrentList,
        prevState,
        setPrevState,
        counter,
        setCounter
      }}
    >
      {children}
    </AppContext.Provider>
  );
}