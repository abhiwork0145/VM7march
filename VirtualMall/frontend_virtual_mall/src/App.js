import React from 'react'
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} 
from 'react-router-dom';

function App() {

  const signupHandler = (user, email, password) =>{
    axios
      .post("http://localhost:8000/users/registration/", { "username" : user, "email": email, "password" : password})
      .then((response) => {
        console.log(response);
        console.log(response.data);
        if (response.data.success){
          alert(response.data.success)
          window.location.href = "/login"
        }
        else{
          alert(response.data.error)
        }          
    }); 
  }

  return (
    <div>
      <BrowserRouter>
        <Link to="/login">Login </Link>
        <Link to="/signup">Signup </Link>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup onSignup={signupHandler} />}></Route>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
