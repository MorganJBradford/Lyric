import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Album from "./Album";
import '../App.css';
import HandleApiCall from "./HandleApiCall";

function AlbumList(props) {
  const { albumList, setSearchMethod, setQueryType, setSearch, setCurrentList, setTrackList, counter, setCounter, trackList, singleList } = useContext(AppContext);

  const handleClick = (id) => {
    setQueryType("album_id");
    setSearch(id);
    setSearchMethod("album.tracks.get");
    setCounter(counter + 1);
    renderAlbums();
  }

  const renderAlbums = () => {
    return <HandleApiCall />
  }
  useEffect(() => {
    if (trackList === null) {
      setCurrentList('albumList')
      
    } else {
      setCurrentList('trackList')
    }
  }, [trackList]);

  if (albumList !== null) {
    return (
      <>
        <Row className="list-alignment justify-content-md-center">
          <Col sm={12}>
            <h3 className="name-alignment albums">Albums:</h3>
              {albumList.map((album, index) =>
              <div className="albums cursor mb-1" onClick={() => handleClick(albumList[index].album.album_id)}>
                <Album 
                names={albumList[index].album.album_name}
                key={index}/>
              </div>
            )}
          </Col>
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