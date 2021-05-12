import React, { useContext } from 'react';
import {ReactComponent as Background} from "./Test.svg";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import { AppContext } from "../AppContext";
import ArtistApiCall from "./ArtistApiCall";

function Home() {
  const { search, setSearch } = useContext(AppContext);

  const handleSearch = e => {
    e.preventDefault();
    let artist = e.target.search.value.replace(" ", "%20");
    setSearch(artist);
    renderArtists();
  }

  const renderArtists = () => {
    if(search === null) {
      return <></>
    } else {
      return <ArtistApiCall />
    }
  }

  return(
    <>
      <Background />
      <Container className="container-position">
        <Row>
          <Col lg={6}>
            <Form className="form-style" onSubmit={handleSearch}>
              <Form.Group controlId="formBasicSearch">
                <Form.Control size="lg" type="text" placeholder="Search..." name="search" className="input-color"></Form.Control>
                <Form.Text className="form-text">
                  Search by Artist
                </Form.Text>
              </Form.Group>                                
              <Button size="lg" type="submit" className="button-color">                                                            
                Search!
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

Home.propTypes = {
  handleSearchSubmit: PropTypes.func
}

export default Home;