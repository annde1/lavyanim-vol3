import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "gatsby";
import sateliteImage from "../../static/satelite.png";
import "../styles/global.css";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container fluid>
        <img src={sateliteImage} style={{ height: "3rem" }}></img>
        <Navbar.Brand href="#" className="me-auto">
          בן אלעזר לווינים
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll dir="rtl">
            <Nav.Link href="#action1" as={Link} to="/">
              בית
            </Nav.Link>
            <Nav.Link href="#action2" as={Link} to="/about">
              אודות
            </Nav.Link>
            <NavDropdown title="מוצרים" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" as={Link} to="/products/diseqc">
                DiSEqC
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" as={Link} to="/products/lnb">
                LNB
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" as={Link} to="/products/dvb">
                ממירים
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6" as={Link} to="/products/misc">
                ציוד נלווה
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7" as={Link} to="/products/mounts">
                צלחות ורגליים
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
