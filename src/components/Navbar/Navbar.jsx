

  // src/components/Header.jsx
//import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">INICIO</Nav.Link>
            <Nav.Link href="#action2">PRODUCTO DE TEMPORADA </Nav.Link>
            <NavDropdown title="PRODUCTOS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Frutas & Verduras</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Granos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          
            <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2"
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit">Submit</Button>
                  </Col>
                </Row>
              </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;