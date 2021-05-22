import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Row from 'react-bootstrap/Row';
import Song from "./Track";
import '../App.css';
import HandleApiCall from "./HandleApiCall";

function SongList(props) {
  const { trackList, setSearchMethod, setQueryType, setSearch } = useContext(AppContext);

  const handleClick = (id, index) => {
    console.log(id);
    setQueryType("track_id");
    setSearch(id);
    setSearchMethod("track.lyrics.get");
    renderTracks();
  }

  const renderTracks = () => {
    return <HandleApiCall />
  }


  if (trackList !== null) {
    return (
      <>
        <Row className="list-alignment">
          <h3 className="name-alignment tracks">Tracks</h3>
          {trackList.map((song, index) =>
          <div className="tracks" onClick={() => handleClick(trackList[index].track.track_id)}>
            <Song 
            names={trackList[index].track.track_name}
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

export default SongList;

// onClick={() => handleClick(trackList[index].album.album_id, index)}