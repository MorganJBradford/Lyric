import React from 'react';
import {ReactComponent as Background} from "./Test.svg";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Artist from "./Artist";
import PropTypes from 'prop-types';

function Home(props) {
  return(
    <>
      <Background />
      <Container className="container-position" onSubmit={props.handleSearchSubmit}>
        <Form className="form-style">
          <Form.Group controlId="formBasicSearch">
            <Form.Control size="lg" type="text" placeholder="Search..." name="search" className="input-color"></Form.Control>
            <Form.Text className="form-text">
              Search by Artist
            </Form.Text>
          </Form.Group>
        </Form>
        <Artist />
      </Container>
    </>
  );
}

Home.propTypes = {
  handleSearchSubmit: PropTypes.func
}

export default Home;