import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import '../App.css'

function Artist(props) {
  const { artistList } = useContext(AppContext);
  if (artistList !== null) {
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

export default Artist;