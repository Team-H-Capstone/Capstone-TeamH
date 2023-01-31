import React from "react";
import { logout } from "../firebase-config";
import Button from "@mui/material/Button";

const Logout = () => {
  return <Button color="inherit" onClick={() => logout()}>Logout</Button>

};

export default Logout;
