import React from 'react'
import './Login.css';
import { useState } from "react";
import Google from './images/google.jpeg';
import Facebook from './images/facebook.png';
import {Link} from 'react-router-dom'

const Login = (props) =>{
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = e =>{
        e.preventDefault();
        props.onLogin(email, password);
    }

    return (
        <>
          <div className="login-container">
              <p className="mall-heading" id="v-mall-heading">VMall</p>
              <p className="mall-heading">Mall Owner Login</p>
              <form onSubmit={submitHandler} className="login-form"> 
                <div className="login-content">
                  <input className="login-input" type="email" placeholder="Email ID" 
                    value={email}
                    onChange={emailChangeHandler}
                    required
                  />
                  <input className="login-input" type="password" placeholder="Password"
                    value={password}
                    onChange={passwordChangeHandler}
                    required
                  />
                  <button className="login-buttons" id="normal-login-button" type="submit">Login</button>
                  <button className="login-buttons"><img src={Google} alt="" className="buttons-logo"/>Google Sign-In</button>
                  <button className="login-buttons"><img src={Facebook} alt="" className="buttons-logo"/>FaceBook Sign-In</button>
                </div> 
              </form>  
              <div className="more-container">
                  <Link to= "/signup">Don't Have An Account? Register Here</Link>
                  {/* <a href="#">Forgot Password? Reset Now</a> */}
              </div>
          </div>     
        </>
    )
}

export default Login
