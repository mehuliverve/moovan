import React, { useState } from "react";
import logo from "../asset/img/logo.svg";
import "./Homescreen.css";
import profile1 from "../asset/img/profile.jpg";
import profile2 from "../asset/img/profile-n.jpg";
import why from "../asset/img/why.svg";
import how from "../asset/img/how.svg";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function NavbarO() {
  return(
    <>
    
    
    <header className="header-area">
        <div className="navbar-area headroom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                        <Link to='/home'>
                                <img src={logo}alt="Logo" />
                        </Link>
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
                              </Link> 
                            </div>
                        </nav>
                    </div>
                </div> 
            </div> 
        </div> 
  
    </header>
    

    </>
  )
}
export default NavbarO;