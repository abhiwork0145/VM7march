import React from 'react'
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} 
from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/login">Login </Link>
        <Link to="/signup">Signup </Link>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
