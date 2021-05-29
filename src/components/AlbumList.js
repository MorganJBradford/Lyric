import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Row from 'react-bootstrap/Row';
import Album from "./Album";
import '../App.css';
import HandleApiCall from "./HandleApiCall";

function AlbumList(props) {
  const { albumList, setSearchMethod, setQueryType, setSearch, setCurrentList, setTrackList, counter, setCounter } = useContext(AppContext);

  const handleClick = (id) => {
    setQueryType("album_id");
    setSearch(id);
    setSearchMethod("album.tracks.get");
    setCurrentList("trackList");
    setCounter(counter + 1);
    renderAlbums();
  }

  const renderAlbums = () => {
    return <HandleApiCall />
  }

  setTrackList(null);

  if (albumList !== null) {
    return (
      <>
        <Row className="list-alignment">
        <h3 className="name-alignment albums">Albums:</h3>
          {albumList.map((album, index) =>
          <div className="albums" onClick={() => handleClick(albumList[index].album.album_id)}>
            <Album 
            names={albumList[index].album.album_name}
            key={index}/>
          </div>
          )}
        </Row>
      </>
    );
  } else {
    return (
      <>
        <p className="loading">Loading...</p>
      </>
    );
  }
}

export default AlbumList;