import React, { useState } from "react";
import NavbarO from "./NavbarO";
import contact from "../asset/img/contact.svg";
import "./contact.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function ContactUs(){
    return(
        <>
        <NavbarO />
            
<div className="container" style={{"margin-top":"150px"}}>
  <div className="row">
    
    <div className="col-xs-12 col-sm-12 col-md-6">
      <div className="box">
		<img src = {contact}/>
      </div>
    </div>
    
    <div className="col-xs-12 col-sm-12 col-md-6">
      <div className="box  mt-5">
       <div className="text-center "> </div>
		<div className="mt-5 text-center"><br /><br /><p><h1  className="hero-title wow fadeInUp" style={{"color":"#f14836"}}>Contact Us </h1></p>
		</div>
		<div className="d-flex justify-content-between mt-4">
		
	
                              
		</div>
	  </div>
    </div>
  </div>
</div>
<div>
<div class="container">
  <h1 class="brand text-center">Get In Touch!</h1>
  
  <div class="wrapper animated bounceInLeft">
    <div class="company-info text-white">
      <h4 className="text-white">Contact Information</h4>
      <p className="text-white" >Fill up the form and our team will get back to you within 24 hours.</p>   <br />   <br />
      <ul>
      
        <li><BsFillTelephoneFill /> &nbsp;&nbsp;&nbsp;  +09190222000</li><br />
        <li><BsFillPinMapFill /> &nbsp;&nbsp;&nbsp; Hello@mytestproject.com</li><br />
        <li><i class="fa fa-road"></i> &nbsp;&nbsp;&nbsp; 102 Street 2277 CA, USA</li><br />
      </ul><br/><br/><br/>
      You can also connect us through
      <div className="d-flex "><BsLinkedin style={{"margin-right":"10px"}}/><BsFacebook  style={{"margin-right":"10px"}}/> <BsTwitter /></div> 
    </div>
 
    <div class="contact">
      <h3></h3>
      <form>
        <p>
          <span>First Name</span>
          <input type="text "class="border border-dark rounded" name="name"/>
        </p>
        <p>
          <span>Last Name</span>
          <input type="text" class="border border-dark rounded"  name="company"/>
        </p>
        <p>
          <span>Email</span>
          <input type="email" class="border border-dark rounded"  name="email"/>
        </p>
        <p>
          <span>Phone </span>
          <input type="text" class="border border-dark rounded"  name="phone"/>
        </p>
        <p class="full">
          <span>Mensagem</span>
          <textarea name="message" class="border border-dark rounded"  rows="5"></textarea>
        </p>
        

      </form>
      <div className="text-center"> <button className=" main-btn">submit</button></div>

    </div>
  </div>
</div>
</div>







        </>
    )
}

export default ContactUs