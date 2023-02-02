import { Route, Routes } from 'react-router-dom';
import Home from './components/Hello';
import Navbar from './components/Navbar';
import About from './components/About';
import MyDashboard from './components/Dashboard/MyDasboard';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/Forum/CreatePost';
import Forum from './components/Forum/Forum';
import MemoryGame from './components/MemoryGame';
import EditProfile from './components/Dashboard/Profile';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mydashboard" element={<MyDashboard />} />
        <Route path="/memoryGame" element={<MemoryGame />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/music" element={<MusicPlayer />} />
      </Routes>
    </div>
  );
};

export default App;
