import React from "react";
import { logout } from "../firebase-config";

const Logout = () => {
  return <button onClick={() => logout()}>LOG OUT</button>;
};

export default Logout;
