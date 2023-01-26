import { Route, Routes} from 'react-router-dom';
import Home from "./components/Hello";
import Navbar from "./components/Navbar";
import About from './components/About';
import MoodTracker from './components/Dashboard/MoodTracker';

const App = () => {
  return (
    <div>
    <Navbar />
    <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/moodTracker" element={<MoodTracker />} />
    </Routes>
    </div>
  );
}

export default App;
