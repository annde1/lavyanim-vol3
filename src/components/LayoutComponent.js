import React from "react";
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";
import Container from "react-bootstrap/Container";
import "../styles/global.css";
const LayoutComponent = ({ children }) => {
  return (
    <>
      <NavBarComponent />
      <Container fluid style={{ margin: "0 auto", maxWidth: "70%" }}>
        {children}
      </Container>
      <FooterComponent />
    </>
  );
};
export default LayoutComponent;
