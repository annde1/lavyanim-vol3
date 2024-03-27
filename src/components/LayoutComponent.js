import React, { useState } from "react";
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";
import Container from "react-bootstrap/Container";
import Alert from "@mui/material/Alert";
import "../styles/global.css";
import { useMediaQuery } from "@mui/material";

const LayoutComponent = ({ children }) => {
  const [showAlert, setShowAlert] = useState(true);
  const handleShowAlert = () => {
    setShowAlert(false);
  };
  return (
    <>
      <NavBarComponent />
      {showAlert && (
        <Alert
          severity="info"
          onClose={() => {
            handleShowAlert();
          }}
          sx={{ fontFamily: "Montserrat", height: "3.6rem" }}
        >
          לברורים צור קשר - 0528785050
        </Alert>
      )}

      <Container fluid style={{ width: "80vw" }}>
        {children}
      </Container>
      <FooterComponent />
    </>
  );
};
export default LayoutComponent;
