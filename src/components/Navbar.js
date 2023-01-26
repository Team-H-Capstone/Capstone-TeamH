import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState("false");

  const handleClick = () => {
    setOpen(!open);
    console.log("dropdown");
  };

  const handleRoom1 = () => {
    setOpen(!open);
    console.log("Room 1 open!");
  };

  const handleRoom2 = () => {
    setOpen(!open);

    console.log("Room 2 open!");
  };

  return (
    <div style={{ position: "fixed", width: "100vw", zIndex: 200 }}>
      <Box sx={{ flexGrow: 0 }}>
        <AppBar>
          <Toolbar>
            <Link to="/home">
              <Button color="inherit" sx={{ ml: 0 }}>
                Home
              </Button>
            </Link>
            <Button color="inherit">MyDashboard</Button>
            <Button color="inherit">Profile Settings</Button>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 5 }}
              style={{ textAlign: "center" }}
            ></Typography>
            <Link to="/aboutUs">
              <Button color="inherit">About</Button>
            </Link>
            <Button color="inherit">Forum</Button>
            <Button color="inherit">Login</Button>
            <IconButton
              className="dropdown"
              onClick={handleClick}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <MenuIcon />
            </IconButton>
            {open ? null : (
              <ul className="menu">
                <li className="menuItem">
                  <Button onClick={handleRoom1}>Room 1</Button>
                </li>
                <li className="menuItem">
                  <Button onClick={handleRoom2}>Room 2</Button>
                </li>
              </ul>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
