import React from "react";
import { logout } from "../firebase-config";

const Logout = () => {
  return <button onClick={() => logout()}>Log Out</button>;
};

export default Logout;
