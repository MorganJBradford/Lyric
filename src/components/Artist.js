import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function Artist(props) {
  const { artistList } = useContext(AppContext);
  if (artistList !== null) {
    return (
      <>
        <div>{props.names}</div>
      </>
    );
  }
    return (
      <>
      </>
    );
}

export default Artist;