import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";

function HandleApiCall() {
  const { setAlbumList, setModalShow, setArtistList, queryType, search, searchMethod, setTrackList, setLyrics, setCurrentList, albumList, counter, setError, lyrics} = useContext(AppContext);
  useEffect(() => {
      setError(null);
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
        } else if (searchMethod === "track.search" || searchMethod === "album.tracks.get") {
          const { track_list } = res.data.message.body;
          if (track_list.length < 1) {
            setError('error');
          } else {
            setTrackList(track_list);
          }
        } else if (searchMethod === "track.lyrics.get") {
          const { lyrics_body } = res.data.message.body.lyrics;
          if (lyrics_body.length < 1) {
            setError('error');
          } else {
            setLyrics(lyrics_body);
          }
        }
      }).catch(err => {
          console.log(err);
          setError("error");
        });
  }, [counter]);
  
  return (
    <>
    </>
  );
}

export default HandleApiCall;