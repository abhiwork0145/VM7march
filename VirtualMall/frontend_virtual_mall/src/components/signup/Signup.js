import { React, useState } from 'react'
import './Signup.css'
import Google from './images/google.jpeg';
import Facebook from './images/facebook.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import GoogleAuthLogin from "../login/GoogleAuthLogin"


function Signup({ onSignup }) {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const userChangeHandler = (event) => {
    setUser(event.target.value);
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    onSignup(user, email, password);
  }

  return (
    <>
      <div className="signup_page">
        <div className="container">
          <h2 className="signup_title1">Ragister</h2>
          <h2 className="signup_title2"> ( Mall Owner Registration )</h2>

          <form onSubmit={submitHandler}>

            <div className="form_group">
              <FontAwesomeIcon className="fontawsome" icon={faUser} />
              <input type="text" className="input_data" id="name" placeholder="Your Name" onChange={userChangeHandler} />
            </div>
            <FontAwesomeIcon className="fontawsome" icon={faEnvelope} />
            <input type="text" className="input_data" id="Mobile Number" placeholder="Email" onChange={emailChangeHandler} /><br />

            <FontAwesomeIcon className="fontawsome" icon={faLock} />
            <input type="password" className="input_data" placeholder="Password" onChange={passwordChangeHandler} /><br />

            <div>
              <input type="submit" name="signup" id="signup" className="submit_button" value="Resister" />
            </div>
            <div className="GoogleLoginButton" >
              <GoogleAuthLogin />
            </div>

           {/* <button className="login-buttons"><img src={Google} alt="" className="buttons-logo" />Google Sign-In</button> */}
            <button className="login-buttons"><img src={Facebook} alt="" className="buttons-logo" />FaceBook Sign-In</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
