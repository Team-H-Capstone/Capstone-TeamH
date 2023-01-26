import React, { useState } from "react";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase-config";
import { Link } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
<<<<<<< HEAD
  //   const [user, loading, error] = useAuthState(auth);
  //   const history = useHistory();
=======

>>>>>>> ac0a39caa275583c13deabf4cf5a1d7ab5df8a97
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
<<<<<<< HEAD
  //   useEffect(() => {
  //     if (loading) return;
  //     if (user) history.replace("/dashboard");
  //   }, [user, loading]);
=======

>>>>>>> ac0a39caa275583c13deabf4cf5a1d7ab5df8a97
  return (
    <div className="register bg-[#1e3a8a]">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <br/><Link className="text-orange-500 font-bold" to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;
