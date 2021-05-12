import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./../AppContext";


  const ArtistApiCall = () => {
    const [artistList, setArtistList] = useContext(AppContext);
    const [isLoading, setLoading] = useState(true);
    
      useEffect(async () => {
        const response = await fetch(`https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=Kendrick%20Lamar&apikey=${process.env.REACT_APP_MUSIX_API_KEY}`);
        console.log(response)
        const data = await response.json();
        console.log(data);
        const list = data.message.body.artist_list[0].artist_name;
        setArtistList(list);
        setLoading(false);
      }, []);
    
  return (
    <>
      {isLoading ? <div>...Loading</div> : <div>{artistList}</div>}
    </>
  );
}


export default ArtistApiCall;