import { Route, Routes } from "react-router-dom";
import Home from "./components/Hello";
import Navbar from "./components/Navbar";
import About from './components/About';
import MyDashboard from './components/Dashboard/MyDasboard';
import MemoryGame from './components/MemoryGame';
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/mydashboard" element={<MyDashboard/>} />
        <Route path="/memoryGame" element={<MemoryGame />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </div>
  );
};

export default App;
