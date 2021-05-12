import React from "react";
import Header from "./Header";
import Home from './Home';
import SongList from './SongList';
import ArtistList from './ArtistList';
import AlbumList from './AlbumList';
import Lyrics from './Lyrics';
import Footer from "./Footer";



class MainContent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      splashVisible: true,
      artistListVisible: false,
      songListVisible: false,
      lyricsVisible: false,
      albumListVisible: false,
    }
  }


  render() {
    let currentlyVisibleState = null;

    if(this.state.artistListVisible != false) {
      currentlyVisibleState = <ArtistList/>
    } else if (this.state.albumListVisible != false) {
      currentlyVisibleState = <AlbumList/>
    } else if(this.state.songListVisible != false) {
      currentlyVisibleState = <SongList/>
    } else if(this.state.lyricsVisible != false){
      currentlyVisibleState = <Lyrics/>
    } else {
      currentlyVisibleState = <Home handleSearchSubmit={this.handleSearchSubmit}/>
    }
    return (
      <div className="bgImage">
        <Header/>
        {currentlyVisibleState}
        <Footer/>
      </div>
    )
  }
}



export default MainContent;