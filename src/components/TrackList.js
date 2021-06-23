import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Song from "./Track";
import '../App.css';
import HandleApiCall from "./HandleApiCall";

function SongList(props) {
  const { trackList, setSearchMethod, setQueryType, setSearch, setCurrentList, setLyrics, counter, setCounter, lyrics } = useContext(AppContext);

  const handleClick = (id, index) => {
    setQueryType("track_id");
    setSearch(id);
    setSearchMethod("track.lyrics.get");
    
    setCounter(counter + 1);
    renderTracks();
  }
  
  useEffect(() => {
    if(lyrics === null) {
      setCurrentList('trackList');
    } else {
      setCurrentList("lyrics")
    }
  }, [lyrics])

  const renderTracks = () => {
    return <HandleApiCall />
  }

  if (trackList !== null) {
    return (
      <>
        <Row className="list-alignment justify-content-md-center">
          <Col sm={12}>
            <h3 className="name-alignment tracks">Tracks</h3>
            {trackList.map((song, index) =>
            <div className="tracks cursor mb-1" onClick={() => (handleClick(trackList[index].track.track_id))}>
              <Song 
              names={trackList[index].track.track_name}
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

export default SongList;

// onClick={() => handleClick(trackList[index].album.album_id, index)}