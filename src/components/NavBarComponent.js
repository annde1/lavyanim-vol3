import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "gatsby";
import sateliteImage from "../../static/satelite.png";
import "../styles/global.css";

const NavBarComponent = () => {
  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#2f3030", height: "5rem" }}
        sticky="top"
      >
        <Container fluid>
          <img
            src={sateliteImage}
            style={{ height: "4rem" }}
            alt="Satellite Logo"
          />
          <Navbar.Brand
            href="#"
            className="me-auto"
            style={{ color: "white", fontSize: "1.5rem" }}
          >
            בן אלעזר לווינים
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ color: "white" }}
          />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ backgroundColor: "#2f3030" }}
          >
            <Nav className="ms-auto" navbarScroll dir="rtl">
              <Nav.Link
                href="#action1"
                as={Link}
                to="/"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                בית
              </Nav.Link>
              <Nav.Link
                href="#action2"
                as={Link}
                to="/about"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                אודות
              </Nav.Link>
              <NavDropdown
                title={<span className="products">מוצרים</span>}
                id="navbarScrollingDropdown"
                style={{ color: "white", fontSize: "1.5rem", width: "100%" }}
                className="products"
              >
                <NavDropdown.Item
                  href="#action3"
                  as={Link}
                  to="/products/diseqc"
                  style={{
                    backgroundColor: "#2f3030",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  DiSEqC
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action4"
                  as={Link}
                  to="/products/lnb"
                  style={{
                    backgroundColor: "#2f3030",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  LNB
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action5"
                  as={Link}
                  to="/products/dvb"
                  style={{
                    backgroundColor: "#2f3030",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  ממירים
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action6"
                  as={Link}
                  to="/products/misc"
                  style={{
                    backgroundColor: "#2f3030",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  ציוד נלווה
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action7"
                  as={Link}
                  to="/products/mounts"
                  style={{
                    backgroundColor: "#2f3030",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  צלחות ורגליים
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
