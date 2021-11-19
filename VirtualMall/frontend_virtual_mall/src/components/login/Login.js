import React from 'react'
import './Login.css';
import { useState } from "react";
import Google from './images/google.jpeg';
import Facebook from './images/facebook.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import GoogleAuthLogin from "../login/GoogleAuthLogin"


const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <>
      <div className="login-container">
        <div className="login_box">
          <div className="title1"> Login Page </div>
          <div className="title2"> ( Mall Owner Login ) </div>
          <div className="field">
            <form onSubmit={submitHandler} >
              <div className="login-content">
                <div>
                  <FontAwesomeIcon className="fontawsome" icon={faUser} />
                  <input className="login-input" type="email" placeholder="Email ID"
                    value={email}
                    onChange={emailChangeHandler}
                    required
                  />
                </div>
                <div>
                  <FontAwesomeIcon className="fontawsome" icon={faLock} />
                  <input className="login-input" type="password" placeholder="Password"
                    value={password}
                    onChange={passwordChangeHandler}
                    required
                  />
                </div>
                <button className="login_button" type="submit">Login</button>

                <div className="GoogleLoginButton" >
                  <GoogleAuthLogin />
                </div>
                { /* <button className="login-buttons"><img src={Google} alt="" className="buttons-logo" />Google Sign-In</button> */}
                <button className="login-buttons"><img src={Facebook} alt="" className="buttons-logo" />FaceBook Sign-In</button>
              </div>
              <div className="more-container">
                <Link className="Forgot_pass" to="/signup">Don't Have An Account? Register Here</Link>
                {/* <a href="#">Forgot Password? Reset Now</a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
