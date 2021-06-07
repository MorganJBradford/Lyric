import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Single from "./Single";
import '../App.css';
import HandleApiCall from "./HandleApiCall";
import { Component } from "react";

function SongList(props) {
  const { trackList, setSearchMethod, setQueryType, setSearch, setCurrentList, setLyrics, counter, setCounter, error, prevState, lyrics } = useContext(AppContext);

  const handleClick = (id, index) => {
    setQueryType("track_id");
    setSearch(id);
    setSearchMethod("track.lyrics.get");
    setCounter(counter + 1);
    renderTracks();
    console.log(lyrics);
  }

  const renderTracks = () => {
    return <HandleApiCall />
  }

  useEffect(() => {
    if(lyrics === null) {
      setCurrentList('singleList');
    } else {
      setCurrentList("lyrics")
    }
  }, [lyrics])

  

  if (trackList !== null) {
    return (
      <>
        <Row className="list-alignment justify-content-md-center">
          <Col sm={12}>
            <h3 className="name-alignment tracks">Tracks</h3>
            {trackList.map((single, index) =>
            <div className="tracks cursor mb-1" onClick={() => (handleClick(trackList[index].track.track_id))}>
              <Single 
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