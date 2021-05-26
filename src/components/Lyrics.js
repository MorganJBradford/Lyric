import React, {useContext} from 'react';
import {AppContext} from '../AppContext';
export default function Lyrics() {
  const { lyrics } = useContext(AppContext);
  return (
    <h5>{lyrics}</h5>
  );
}