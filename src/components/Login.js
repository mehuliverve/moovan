import React, { useState } from "react";
import "./Login.css";
import logo from "../asset/img/logo.svg";
import login from "../asset/img/sign.svg"
function Login() {
    return (
  <>
  <div id="container">
        <div id="left">
            <div className="d-flex justify-content-center"> <img src={logo} height="130" width="250" /></div>
            <div className="text-center"><h6 style={{"color":"white"}}>We Make Moving Simplified
                <p id="lorem " style={{"color":"white"}}>
                Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text ever since the 1500s, 
                </p>     </h6></div>
            <div className="d-flex fill justify-content-center" style={{"height":"60vh","width":"100%"}}> <img src={login} height="300" width="250" /></div>
        
        </div>
        <div id="right">
                    <div id="card">
                        <div id="card-content">
                            <div id="card-title">
                                <h4>Hello Again!</h4>
                              
                            </div>
                            <form method="post" class="form">
                                <p for="user-email" style={{ "padding-top": "13px" }}>
                                        Email
                                </p>
                                <input id="user-email" class="border border-dark rounded form-content inputd" type="email" name="email" autocomplete="on" required />
                                <p for="user-password" style={{"padding-top":"22px"}}>Password
                                </p>
                                <input id="user-password" class="border border-dark rounded form-content inputd" type="password" name="password" required />
                                
                              <div className="d-flex justify-content-between "> <p for="rememberMe"><input type="checkbox" value="lsRememberMe" id="rememberMe" /> Remember me</p>
                                <a href="#">
                                    <legend id="forgot-pass">Forgot password?</legend>
                                </a>
                                </div> 
                                <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
                                <a href="#" id="signup">Do not have an Account? <a><b> Sign Up</b></a></a>
                            </form>
                        </div>
                    </div>

                </div>


  </div>
  
  </>
  )
}
export default Login
        

