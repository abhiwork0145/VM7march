import React from 'react'
import './Signup.css'
import Google from './images/google.jpeg';
import Facebook from './images/facebook.png';

function Signup() {
    return (
    <div class = "container">
      <h1 >VMALL </h1>
      <h2>Mall Owner Registration</h2>
         
      <div >  
        <input type = "text" class="Name" placeholder="Full Name"/> <br/><br/>
        <input type = "text"  class="Number" id = "Mobile number" placeholder=  "Phone Number" /><br/><br/>
        <input type = "password" class="Password" placeholder="Password"/><br/><br/>
        <button type="Button" class = "next">Next</button><br/><br/>
        <button className="login-buttons"><img src={Google} alt="" className="buttons-logo"/>Google Sign-In</button>
        <button className="login-buttons"><img src={Facebook} alt="" className="buttons-logo"/>FaceBook Sign-In</button>
      </div>
    </div>
    )
        
}

export default Signup
