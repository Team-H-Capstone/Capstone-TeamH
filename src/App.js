import { Route, Routes} from 'react-router-dom';
import Home from "./components/Hello";
import Navbar from "./components/Navbar";
import About from './components/About';
import MyDashboard from './components/Dashboard/MyDasboard';

const App = () => {
  return (
    <div>
    <Navbar />
    <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mydashboard" element={<MyDashboard/>} />
    </Routes>
    </div>
  );
}

export default App;
