import React from "react";
import { Link } from "gatsby";
import "../styles/global.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../static/logo2.png";
const NavBarComponent = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleMenuClick = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} dir="rtl">
        <AppBar position="static" sx={{ backgroundColor: "#0B0D12" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                mr: 2,
                fontFamily: "Rubik Scribble",
                fontWeight: 100,
                fontSize: "1.6rem",
              }}
            >
              בן אלעזר לווינים
            </Typography>

            <img
              src={logo}
              alt="Ben Elazar"
              style={{
                position: "absolute",
                top: 18,
                left: 15,
                height: "2rem",
              }}
            />
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={handleDrawerClose}
          sx={{
            "& .MuiDrawer-paper": {
              width: 250, // Adjust the width as needed
              backgroundColor: "#0B0D12",
            },
          }}
        >
          <List dir="rtl" sx={{ pt: 4 }}>
            <Link to="/">
              <ListItem button>
                <ListItemText
                  primary="בית"
                  primaryTypographyProps={{
                    style: {
                      color: "white",
                      direction: "rtl",
                      fontSize: "1.5rem",
                      textAlign: "center",
                      fontFamily: "Montserrat",
                    },
                  }}
                />
              </ListItem>
            </Link>
            <Link to="/about">
              <ListItem button>
                <ListItemText
                  primary="אודות"
                  primaryTypographyProps={{
                    style: {
                      color: "white",
                      direction: "rtl",
                      fontSize: "1.5rem",
                      textAlign: "center",
                      fontFamily: "Montserrat",
                    },
                  }}
                />
              </ListItem>
            </Link>
            <Link to="/products/diseqc">
              <ListItem button>
                <ListItemText
                  primary="DiSEqc"
                  primaryTypographyProps={{
                    style: {
                      color: "white",
                      direction: "rtl",
                      fontSize: "1.5rem",
                      textAlign: "center",
                      fontFamily: "Montserrat",
                    },
                  }}
                />
              </ListItem>
            </Link>
            <Link to="/products/dvb">
              <ListItem button>
                <ListItemText
                  primary="ממירים"
                  primaryTypographyProps={{
                    style: {
                      color: "white",
                      direction: "rtl",
                      fontSize: "1.5rem",
                      textAlign: "center",
                      fontFamily: "Montserrat",
                    },
                  }}
                />
              </ListItem>
            </Link>
            <Link to="/products/lnb">
              <ListItem button>
                <ListItemText
                  primary="LNB"
                  primaryTypographyProps={{
                    style: {
                      color: "white",
                      direction: "rtl",
                      fontSize: "1.5rem",
                      textAlign: "center",
                      fontFamily: "Montserrat",
                    },
                  }}
                />
              </ListItem>
            </Link>
            <Link to="/products/misc">
              <ListItem button>
                <ListItemText
                  primary="ציוד נלווה"
                  primaryTypographyProps={{
                    style: {
                      color: "white",
                      direction: "rtl",
                      fontSize: "1.5rem",
                      textAlign: "center",
                      fontFamily: "Montserrat",
                    },
                  }}
                />
              </ListItem>
              <Link to="/products/mounts">
                <ListItem button>
                  <ListItemText
                    primary="צלחות ורגליים"
                    primaryTypographyProps={{
                      style: {
                        color: "white",
                        direction: "rtl",
                        fontSize: "1.5rem",
                        textAlign: "center",
                        fontFamily: "Montserrat",
                        fontWeight: 100,
                      },
                    }}
                  />
                </ListItem>
              </Link>
            </Link>
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default NavBarComponent;
