import React, { useState } from "react";
import logo from "../asset/img/logo.svg";
import "./Homescreen.css";
import profile1 from "../asset/img/profile.jpg";
import profile2 from "../asset/img/profile-n.jpg";
import why from "../asset/img/why.svg";
import how from "../asset/img/how.svg";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Navbar() {
  return(
    <>
    
    
    <header className="header-area">
        <div className="navbar-area headroom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo}alt="Logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                               <ul id="nav" className="navbar-nav m-auto">
                               <li className="nav-item ">
                                    <Link to='/findMovers'>Find Movers </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/about'>About Us </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/about'>Subscriptions </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/whyMuvan'>
                                       Why Muvan?</Link>                                    </li>
                                    <li className="nav-item">
                                    <Link to='/howorks'>
                                       How It Works?</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/Contact'>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="navbar-btn d-none d-sm-inline-block">
                            <Link to='/login' className="main-btn" data-scroll-nav="0"> Login
                              </Link> 
                              <Link to='/join' className="main-btn" data-scroll-nav="0"> Sign Up
                              </Link>  </div>
                        </nav>
                    </div>
                </div> 
            </div> 
        </div> 
        
        <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">
            <div className="container" >
                <div className="row">
                    <div className="col-lg-7">
                        <div className="header-hero-content">
                            <h3 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s"><b> <span>Let's get you <br/> Muvan! </span> </b></h3>
                            <p className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s" style={{"color":"black "}}><b>The best Moving Solution in the market is under. it’s way, Sign up below to keep getting updates. </b></p>
                            <div className="d-flex mt-5" data-wow-duration="1s" data-wow-delay="0.8s" style={{"width":"60%"}}>
                                <input type="text" className="border" style={{"border-radius":"25px","height":"50px","padding":"20px"}} placeholder="we will keep you posted..."/>
                                <button className="ml-3 main-btn" style={{"height":"50px"}}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
            <div style={{"margin-top":"00px"}} className="header-hero-image d-flex align-items-center wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="1.1s">
                <div className="image">
                    <img src="assets/images/hero.svg" alt="Hero Image"/>
                </div>
            </div>
        </div> 
    </header>
    

    </>
  )
}
export default Navbar;