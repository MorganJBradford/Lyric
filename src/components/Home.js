import React, { useContext, useEffect } from 'react';
import {ReactComponent as Background} from "./Test.svg";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { AppContext } from "../AppContext";
import HandleApiCall from "./HandleApiCall";
import ArtistList from "./ArtistList";
import AlbumList from "./AlbumList";
import TrackList from './TrackList';
import Lyrics from './Lyrics';
import './../App.css';
import Card from 'react-bootstrap/Card';
import SingleList from "./SingleList";


function Home() {
  const { search, setSearch, animationState, setAnimationState, setSearchMethod, setQueryType, currentList, setCurrentList, backBtn, setBackBtn, prevState, setPrevState} = useContext(AppContext);
  let currentlyVisibleState = null;
  const handleSearch = e => {
    e.preventDefault();
    setSearchMethod("artist.search");
    setQueryType("q_artist");
    let artist = e.target.search.value.replace(" ", "%20");
    setSearch(artist);
    setCurrentList("artistList");
    renderArtists();
  }

  const renderArtists = () => {
    if(search === null) {
      return <></>
    } else {
      return <HandleApiCall/>
    }
  }


  if (currentList === "artistList") {
    setPrevState('home');
    currentlyVisibleState = <ArtistList/>;
  } else if(currentList === "albumList") {
    setPrevState('artistList')
    currentlyVisibleState = <AlbumList/>;
  } else if (currentList === "singleList") {
    setPrevState("artistList");
    currentlyVisibleState = <SingleList/>
  } else if(currentList === "trackList") {
    setPrevState('albumList')
    currentlyVisibleState = <TrackList/>;
  } else if(currentList === "lyrics") {
      if(prevState === 'artistList') {
        setPrevState('singleList');
      } else if(prevState === 'albumList') {
        setPrevState('trackList')
      }
    currentlyVisibleState = <Lyrics/>;
  } else if (currentList === "error") {
    if(prevState === 'artistList') {
      setPrevState('singleList');
    } else if(prevState === 'albumList') {
      setPrevState('trackList')
    }
    currentlyVisibleState = <h1>No lyrics g</h1>
  }
  return(
    <>
      <Background />
      <Container className="container-position">
        <Row>
        
          <Card>
            <Card.Text>
              {currentlyVisibleState}
              <Button onClick={() => setCurrentList(prevState)}>Test</Button>
            </Card.Text>
          </Card>
        </Row>
        <Row>
          <Col lg={12}>
            <Form className="form-style" id={animationState ? 'move' : ''} onSubmit={handleSearch}>
              <Form.Group controlId="formBasicSearch">
                <Form.Control size="lg" type="text" placeholder="Search..." name="search" className="input-color"></Form.Control>
                <Form.Text className="form-text">
                  Search by Artist
                </Form.Text>
              </Form.Group>                                
              <Button size="lg" type="submit" id="button-color" className={animationState ? 'fade' : ''} onClick={() => setAnimationState(true)}>                                                            
                Enter
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          {renderArtists()}  
        </Row>
      </Container>
    </>
  );
}


export default Home;