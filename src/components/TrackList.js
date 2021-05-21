import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Row from 'react-bootstrap/Row';
import Song from "./Track";
import '../App.css';
import HandleApiCall from "./HandleApiCall";

function SongList(props) {
  const { trackList, setSearchMethod, setQueryType, setSearch } = useContext(AppContext);

  const handleClick = (id, index) => {
    console.log("lol");
    // setQueryType("artist_id");
    // setSearch(id);
    // if (index === 0) {
    //   setSearchMethod("artist.albums.get");
    // } else {
    //   setSearchMethod("track.search");
    // }
    // renderAlbums();
  }

  const renderLyrics = () => {
    return <HandleApiCall />
  }


  if (trackList !== null) {
    return (
      <>
        <Row className="list-alignment">
          <h3 className="name-alignment tracks">Tracks</h3>
          {trackList.map((song, index) =>
          <div className="tracks">
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
      {/* <Row className="list-alignment">
        <h3 className="name-alignment tracks">Track</h3>
        <div className="tracks">
          <Song 
            names={trackList[0].track.track_name}
          />
        </div>
      </Row> */}
      </>
    );
  }
}

export default SongList;

// onClick={() => handleClick(trackList[index].album.album_id, index)}