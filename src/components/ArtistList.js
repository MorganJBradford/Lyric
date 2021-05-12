import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Artist from "./Artist";

function ArtistList(props) {
  const { artistList } = useContext(AppContext);
  if (artistList !== null) {

    
    
    return (
      <>
        {artistList.map((artist, index) =>
          <Artist 
          names={artistList[index].artist.artist_name}
          key={artistList[index].artist.artist_id}/>
        )}
      </>
    );
  } else {
    return (
      <>
      </>
    );
  }
}

export default ArtistList;