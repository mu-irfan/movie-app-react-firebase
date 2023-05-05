import './App.css';
import React, { useState } from 'react'
import Movies from './pages/Movies';
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/create-account" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
