import './App.css';
import React, { useState } from 'react'
import Movies from './pages/Movies';
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import Profile from './pages/Profile';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/create-account" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}><Profile /></PrivateRoute>
          }
        />
        {/* <PrivateRoute path="/profile" element={<Profile />} isLoggedIn={isLoggedIn} /> */}
      </Routes>
    </div>
  );
}

export default App;
