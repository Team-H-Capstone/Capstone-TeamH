import { Route, Routes} from 'react-router-dom';
import Home from "./components/Hello";
import Navbar from "./components/Navbar";
import About from './components/About';

const App = () => {
  return (
    <div>
    <Navbar />
    <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
