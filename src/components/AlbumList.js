import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Row from 'react-bootstrap/Row';
import Album from "./Album";
import '../App.css';
import HandleApiCall from "./HandleApiCall";

function AlbumList(props) {
  const { albumList, setSearchMethod, setQueryType, setSearch } = useContext(AppContext);

  const handleClick = (id) => {
    setQueryType("album_id");
    setSearch(id);
    setSearchMethod("album.tracks.get");
    renderAlbums();
  }

  const renderAlbums = () => {
    return <HandleApiCall />
  }


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
      </>
    );
  }
}

export default AlbumList;