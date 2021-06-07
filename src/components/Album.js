import React, { useContext } from 'react';
import { AppContext } from "../AppContext";

export default function Album(props) {
  const { albumList, setModalShow } = useContext(AppContext);
  if(albumList != null) {
    return (
      <>
        <div className="name-alignment" onClick={() => setModalShow(true)}>{props.names}</div>
      </>
    )
  }
  return(
    <h1>Hello</h1>
  )
}