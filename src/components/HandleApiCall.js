import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";

function HandleApiCall() {
  const { setAlbumList, setArtistList, queryType, search, searchMethod, setTrackList, lyrics, setLyrics, setCurrentList} = useContext(AppContext);
  useEffect(() => {
      axios({
        url: `https://api.musixmatch.com/ws/1.1/${searchMethod}?format=jsonp&callback=callback&${queryType}=${search}&apikey=${process.env.REACT_APP_MUSIX_API_KEY}`,
        adapter: jsonpAdapter
      }).then(res => {
        // setApiCall(true);
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
        } else if (searchMethod === "track.lyrics.get") {
          console.log(res.data.message)
          const { lyrics_body } = res.data.message.body.lyrics;
          setLyrics(lyrics_body);
        }
        // setApiCall(False);
      }).catch(err => {
          console.log(err)
          setCurrentList("error");
        });
  }, [search]);
  
  return (
    <>
    </>
  );
}

export default HandleApiCall;