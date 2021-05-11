import React from 'react';
import {ReactComponent as Background} from "./Test.svg";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';

function Home() {
  return(
    <>
      <Background />
      <Container className="container-position">
        <Form className="form-style">
          <Form.Group controlId="formBasicSearch">
            <Form.Control size="lg" type="text" placeholder="Search..." className="input-color"></Form.Control>
            <Form.Text className="form-text">
              Search by artist, song or album
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default Home;