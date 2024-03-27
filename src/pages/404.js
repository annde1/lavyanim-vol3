import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "gatsby";

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h1">404</Typography>
          <Typography variant="h5" sx={{ fontFamily: "Montserrat", mb: 3 }}>
            העמוד אינו קיים
          </Typography>
          <Link to="/">
            <Button variant="contained" sx={{ fontFamily: "Montserrat" }}>
              {" "}
              לעמוד הבית
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
};
export default NotFound;
