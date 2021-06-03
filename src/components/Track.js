import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import '../App.css'

function Song(props) {
  const { trackList, setModalShow } = useContext(AppContext);
  if (trackList !== null) {
    return (
      <>
        <div className="name-alignment" onClick={() => setModalShow(true)}>{props.names}</div>
      </>
    );
  }
    return (
      <>
      </>
    );
}

export default Song;