import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Row from 'react-bootstrap/Row';
import Artist from "./Artist";
import '../App.css';
import HandleApiCall from "./HandleApiCall";

function ArtistList(props) {
  const { artistList, setSearchMethod, setQueryType, setSearch, setCurrentList } = useContext(AppContext);

  const handleClick = (id, index) => {
    setSearch(id);
    if (index === 0) {
      setQueryType("artist_id");
      setSearchMethod("artist.albums.get");
      setCurrentList("albumList");
    } else {
      setQueryType("f_artist_id");
      setSearchMethod("track.search");
      setCurrentList("singleList");
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