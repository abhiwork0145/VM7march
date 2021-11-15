import {React, useState} from 'react'
import './Signup.css'
import Google from './images/google.jpeg';
import Facebook from './images/facebook.png';

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

  const submitHandler = e =>{
      e.preventDefault();
      onSignup(user, email, password);
  }

  return (
    <div class = "container">
      <h1 >VMALL </h1>
      <h2>Mall Owner Registration</h2>
        <form onSubmit={submitHandler}>             
          <input type = "text" class="Name" placeholder="Full Name" onChange={userChangeHandler} /> <br/>
          <input type = "text"  class="Number" id="Mobile Number" placeholder="Email" onChange={emailChangeHandler} /><br/>
          <input type = "password" class="Password" placeholder="Password" onChange={passwordChangeHandler} /><br/>
          <input type="submit" class = "next" value="Signup" /><br />
          <button className="login-buttons"><img src={Google} alt="" className="buttons-logo"/>Google Sign-In</button>
          <button className="login-buttons"><img src={Facebook} alt="" className="buttons-logo"/>FaceBook Sign-In</button>
        </form>             
    </div>  
  )       
}

export default Signup
