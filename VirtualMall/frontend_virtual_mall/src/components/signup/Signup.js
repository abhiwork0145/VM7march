import React from 'react'
import './Signup.css'
import Login from '../login/Login'

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
              </div>
              <Login/>
          </div>
          
    
      
     
    )
        
}

export default Signup
