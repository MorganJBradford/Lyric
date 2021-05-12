import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";

function ArtistApiCall() {
  const { setArtistList, search} = useContext(AppContext);

  useEffect(() => {
      axios({
        url: `https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=${search}&apikey=${process.env.REACT_APP_MUSIX_API_KEY}`,
        adapter: jsonpAdapter
      }).then(res => {
          const {artist_list} = res.data.message.body;
          setArtistList(artist_list);
        })
        .catch(err => {
          console.log(err)
        });
  }, [search]);

  return (
    <>
    </>
  );
}


export default ArtistApiCall;


/*
setTimeout(() => {
  
}, 3000)

*/

/*

async function getArtist(search) {
  const url = https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=${search}&apikey=`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setArtistList(data);
  setLoading(false);
}

*/

// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
// import useAxios from "axios-hooks";