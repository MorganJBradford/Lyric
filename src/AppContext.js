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
  const [track, setTrack] = useState(null);


  return (
    <AppContext.Provider value=
    {{
        albumList,
        setAlbumList,  
        animationState,
        setAnimationState,
        artistList,
        setArtistList,
        queryType,
        setQueryType,
        search,
        setSearch,
        searchMethod,
        setSearchMethod,
        trackList,
        setTrackList,
        track,
        setTrack
      }}
    >
      {children}
    </AppContext.Provider>
  );
}