import React, { useState } from "react";
import "./sign.css";
import logo from "../asset/img/logo.svg";
import login from "../asset/img/login.svg"
function SignUp() {
    return (
  <>
  <div id="container">
        <div id="left">
            <div className="d-flex justify-content-center"> <img src={logo} height="130" width="250" /></div>
            <div className="text-center"><h6 style={{"color":"white"}}>We Make Moving Simplified
                <p id="lorem " style={{"color":"white"}}>
                </p>     </h6></div>
            <div className="d-flex  justify-content-start" style={{"height":"70vh","width":"100%"}}> <img src={login}/></div>
        
        </div>
        <div id="right">
                    <div id="card">
                        <div id="card-content">
                            <div id="card-title">
                                <h4>Sign Up with Us</h4>
                              
                            </div>
                            <form method="post" class="form">
                                <p for="user-email" style={{ "padding-top": "13px" }}>
                                        Email
                                </p>
                                <input id="user-email" class="border border-dark rounded form-content inputd" type="email" name="email" autocomplete="on" required />
                                <p for="user-password" style={{"padding-top":"22px"}}>Password
                                </p>
                                <input id="user-password" class=" border border-dark rounded   form-content inputd" type="password" name="password" required />
                                <p for="user-password" style={{"padding-top":"22px"}}> Confirm Password
                                </p>
                                <input id="user-password" class=" border border-dark rounded   form-content inputd" type="password" name="password" required />
                                <p for="user-password" style={{"padding-top":"22px"}}>Contact Number
                                </p>
                                <input id="user-password" class=" border border-dark rounded   form-content inputd" type="text" name="password" required />
                                
                               
                                <input id="submit-btn" type="submit" name="submit" value="Sign Up" />
                                <a href="#" id="signup">Already a registered Vendor? <a><b>  LOGIN</b></a></a>
                            </form>
                        </div>
                    </div>

                </div>


  </div>
  
  </>
  )
}
export default SignUp
        

