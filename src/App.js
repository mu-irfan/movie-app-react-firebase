import './App.css';
import Movies from './pages/Movies';
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<Signup />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
