import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";

function HandleApiCall() {
  const { setAlbumList, setArtistList, queryType, search, searchMethod, setTrack, setTrackList} = useContext(AppContext);
  useEffect(() => {
      axios({
        url: `https://api.musixmatch.com/ws/1.1/${searchMethod}?format=jsonp&callback=callback&${queryType}=${search}&apikey=${process.env.REACT_APP_MUSIX_API_KEY}`,
        adapter: jsonpAdapter
      }).then(res => {
        if (searchMethod === "artist.search") {
          const {artist_list} = res.data.message.body;
          setArtistList(artist_list);
        } else if (searchMethod === "artist.albums.get") {
          const { album_list } = res.data.message.body;
          const filteredList = album_list.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj.album["album_name"]).indexOf(obj.album["album_name"]) === pos;
          });
          setAlbumList(filteredList);
        } else if (searchMethod === "track.search") {
          const { track_list } = res.data.message.body;
          setTrackList(track_list);
        } else if (searchMethod === "album.tracks.get") {
          const { track_list } = res.data.message.body;
          setTrackList(track_list);
        }
      }).catch(err => {
          console.log(err)
        });
  }, [search]);

  return (
    <>
    </>
  );
}

export default HandleApiCall;

// const uniqueStringSet = (string) => {
//   const uniqueSet = {...new Set(string)};
//   return (uniqueSet === string.length);
// }

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