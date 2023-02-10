import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { auth, logout } from "../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";


const Navbar = () => {
  const [open, setOpen] = useState('false');

  const handleClick = () => {
    setOpen(!open);
    console.log('dropdown');
  };

  const handleRoom1 = () => {
    setOpen(!open);
    console.log('Room 1 open!');
  };

  const handleRoom2 = () => {
    setOpen(!open);
    console.log('Room 2 open!');
  };

  const [user] = useAuthState(auth);

  return (
    <div style={{ position: 'fixed', width: '100vw', zIndex: 200}}>
      <Box sx={{ flexGrow: 0}}>
        <AppBar sx={{backgroundColor: "#344E41", color:"#DAD7CD"}}>
          <Toolbar>
            <Link to="/home">
              <Button color="inherit" sx={{ ml: 0 }} style={{fontSize:23, marginRight:5}} id="navBarHome">
                Home
              </Button>
            </Link>

            {user ? (
              <>
              <Link to="/mydashboard">
                <Button color="inherit" style={{fontSize:23, marginRight:5}} id="navBarDashboard">Dashboard</Button>
              </Link>  
              </>            
            ):(
              <Link to="/login">
                <Button color="inherit" style={{fontSize:23, marginRight:5}} id="navBarLogin">Dashboard</Button>
              </Link>
            )
              }

            <Link to="/data">
              <Button color="inherit" style={{fontSize:23, marginRight:5}} id="navBarData">data</Button>
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 5 }}
              style={{ textAlign: 'center', fontFamily: "Peaceful", fontSize: 60}}
            ></Typography>
            <Link to="/about">
              <Button color="inherit" style={{fontSize:23, marginRight:5}} id="navBarAbout">About</Button>
            </Link>

            <Link to="/forum">
              <Button color="inherit" style={{fontSize:23, marginRight:5}} id="navBarForum">Forum</Button>
            </Link>

            {user ? (
              <>
                <Link to="/createpost">
                  <Button color="inherit" style={{fontSize:23, marginRight:5}} id="navBarCreate">Post</Button>
                </Link>
                <Link to="/">
                <Button color="inherit" style={{fontSize:23, marginRight:5}} onClick={() => logout()} id="navBarLogout">Logout</Button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <Button color="inherit" style={{fontSize:23, marginRight:5}} id="navBarLogin">Login</Button>
              </Link>
            )}

            <IconButton
              className="dropdown"
              onClick={handleClick}
              size= "large"
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
                <Link to="/music">
                  <Button onClick={handleRoom1} style={{color:"black", textAlign:"center", fontSize:15}} id="navBarMusic">Music</Button>
                </Link>
                </li>
                <li className="menuItem">
                  <Link to="/memoryGame" >
                  <Button onClick={handleRoom2} style={{color:"black", textAlign:"center", fontSize:15}} id="navBarMemory">Game</Button>
                  </Link>
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
