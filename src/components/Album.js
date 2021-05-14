import React, { useContext } from 'react';
import { AppContext } from "../AppContext";

export default function Album(props) {
  const { albumList } = useContext(AppContext);
  if(albumList != null) {
    return (
      <>
        <div className="name-alignment">{props.names}</div>
      </>
    )
  }
  return(
    <h1>Hello</h1>
  )
}