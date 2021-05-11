import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
  return (
    <>
    <Container>
      <Navbar collapseOnSelect expand='md' fixed='top' bg="dark" className="navbar-dark navbar">
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav' className="navbar">
          <Nav>
            {/* If state is something show username */}
            <Nav.Link className="navbar">Sign up</Nav.Link>
            <Nav.Link className="navbar">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
      
    </>
  )
}

Header.propTypes = {

}

export default Header;