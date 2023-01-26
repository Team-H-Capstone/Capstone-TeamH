import { Route, Routes } from "react-router-dom";
import Home from "./components/Hello";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </div>
  );
};

export default App;
