import React from 'react'
import './Login.css';
import Google from './google.jpeg';
import Facebook from './facebook.png';
function Login() {
    return (
        <>
          <div className="login-container">
              <p className="mall-heading" id="v-mall-heading">VMall</p>
              <p className="mall-heading">Mall Owner Login</p> 
              <div className="login-content">
                <input className="login-input" type="email" required placeholder="Email ID"></input>
                <input className="login-input" type="password" required placeholder="Password"></input>
                <button className="login-buttons" id="normal-login-button" type="submit">Login</button>
                <button className="login-buttons" type="submit"><img src={Google} alt="" className="buttons-logo"/>Google Sign-In</button>
                <button className="login-buttons" type="submit"><img src={Facebook} alt="" className="buttons-logo"/>FaceBook Sign-In</button>
              </div>   
              <div className="more-container">
                  <a href="#">Don't Have An Account? Register Here</a>
                  <a href="#">Forgot Password? Reset Now</a>
              </div>
          </div>     
        </>
    )
}

export default Login
