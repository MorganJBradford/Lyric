import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Row from 'react-bootstrap/Row';
import Artist from "./Artist";
import '../App.css';
import HandleApiCall from "./HandleApiCall";

function ArtistList(props) {
  const { artistList, setSearchMethod, setQueryType, setSearch } = useContext(AppContext);

  const handleClick = (id, index) => {
    setQueryType("artist_id");
    setSearch(id);
    if (index === 0) {
      setSearchMethod("artist.albums.get");
    } else {
      setSearchMethod("track.search");
    }
    renderAlbums();
  }

  const renderAlbums = () => {
    return <HandleApiCall />
  }


  if (artistList !== null) {
    return (
      <>
        <Row>
          <h3 className="name-alignment artist">Artists:</h3>
          {artistList.map((artist, index) =>
          <div className="artist" onClick={() => handleClick(artistList[index].artist.artist_id, index)}>
            <Artist 
            names={artistList[index].artist.artist_name}
            key={index}/>
          </div>
          )}
        </Row>
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