import React, { useState, useEffect } from 'react';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Home from './components/Home';
import axios from 'axios';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
}
  from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('calling useEffect');
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === '1') {
      setIsLoggedIn(true);
    }

  }, []);

  const loginHandler = (email, password) => {
    axios
      .post("http://localhost:8000/users/login/", { "email": email, "password": password },)
      .then((response) => {
        console.log(response.data)
        if (response.data.success) {
          localStorage.setItem('isLogin', '1');
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('id', response.data.id);
          localStorage.setItem('password', response.data.password);
          localStorage.setItem('access', response.data.access);
          localStorage.setItem('refresh', response.data.refresh);
          setIsLoggedIn(true);
          window.location.href = "/home";
        }
        else {
          alert(response.data.error)
        }

      });
  };
  
  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  const signupHandler = (user, email, password) => {
    axios
      .post("http://localhost:8000/users/registration/", { "username": user, "email": email, "password": password })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        if (response.data.success) {
          alert(response.data.success)
          window.location.href = "/login"
        }
        else {
          alert(response.data.error)
        }
      });
  }
  return (
    <div>
      <BrowserRouter>
        {!isLoggedIn &&
          <div className="logintag">

            <span className="First_Letter">V</span>irtual
            <span className="First_Letter">M</span>all

            <Link className="Nav_login" to="/login">Login </Link>
            <Link className="Nav_logout" to="/signup">Signup </Link>
          </div>
        }

        {isLoggedIn &&
          <button onClick={logoutHandler}>Logout</button>
        }
        <Routes>
          <Route path="/login" element={<Login onLogin={loginHandler} />}></Route>
          <Route path="/signup" element={<Signup onSignup={signupHandler} />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
