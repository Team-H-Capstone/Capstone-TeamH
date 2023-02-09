import React, { useState } from "react";
import {
  logInWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase/firebase-config";
import { Link } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <div className="login bg-[#DAD7CD]">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <Link to="/home">
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        </Link>
      <div>
        Don't have an account? <br/> <Link className="text-[#d62828] font-bold" to="/register">Register</Link> now.
      </div> 
      </div>
    </div>
  );
};

export default Login;
