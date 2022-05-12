import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../../asset/img/logo.svg";
import { BsSearch } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { Link } from 'react-router-dom';
function CustomerHeader(){
    return(
        <>
     

 
    
    <header className="header-area">
        <div className="navbar-area headroom">
            <div className="">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">

                                    <Link to='/customerDash'>
                                        <img src={logo} alt="Logo" />
                                    </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                               <ul id="nav" className="navbar-nav m-auto">
                                    <li className="nav-item ">
                                    <Link to='/customerDash'>Dashboard </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/customerpost'>Your Post</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/chat'>Messages </Link>
                                    </li>
                                            <li  className="nav-item ">
                                                <div class="input-group pl-1" style={{"width":"500px","border-radius":"25px","border":" 7px solid #dee2e6"}}>
                                                    <input type="text" class="form-control border-0" placeholder="Search this blog" />
                                                    <div class="input-group-append">
                                                        <button class="btn " type="button">
                                                            <BsSliders style={{"color":"orangered"}} />
                                                        </button>
                                                        <button class="btn " type="button">
                                                            <BsSearch  style={{"color":"orangered"}}/>
                                                        </button>
                                                       
                                                    </div>
                                                </div>
                                            </li>
                                </ul>
                            </div>
                            
                            <div className="navbar-btn d-none d-sm-inline-block">
                                <BsFillBellFill className="mr-5" size={30} style={{"color":"orangered"}}/>
                                <BsPersonCircle className="mr-5" size={30} style={{"color":"orangered"}}/>
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
export default CustomerHeader;