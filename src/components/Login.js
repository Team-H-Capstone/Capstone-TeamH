import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase/firebase-config";
import { Link } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login bg-[#1e3a8a]">
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
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
      <div>
        Don't have an account? <br/> <Link className="text-orange-500 font-bold" to="/register">Register</Link> now.
      </div> 
      </div>
    </div>
  );
};

export default Login;
