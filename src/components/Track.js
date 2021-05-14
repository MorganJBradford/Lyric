import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import '../App.css'

function Song(props) {
  const { trackList } = useContext(AppContext);
  if (trackList !== null) {
    return (
      <>
        <div className="name-alignment">{props.names}</div>
      </>
    );
  }
    return (
      <>
      </>
    );
}

export default Song;