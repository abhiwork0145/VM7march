import React from 'react'
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} 
from 'react-router-dom';

function App() {
  return (
    <div>
      <Login />
      <Signup />    
    </div>
  );
}

export default App;
