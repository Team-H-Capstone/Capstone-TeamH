import React from "react";
import { logout } from "../firebase/firebase-config";
import Button from "@mui/material/Button";

const Logout = () => {
  return <Button onClick={() => logout()} style={{fontSize:30, marginRight:5, fontFamily:"Oddly Calming"}}>Log Out</Button>;
};

export default Logout;
