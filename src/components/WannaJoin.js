import React, { useState } from "react";

import NavbarO from "./NavbarO";
import "./Wanna.css"
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function WannaJoin() {
    const [selectedOp, setSelected] = React.useState();



    const [textColor, setTextColor] = useState('black');
    const [textColorc, setTextColorc] = useState('black');
     const handleChnageTextColor = (e) => {
        setTextColor('#CCCCCC');
    }
    return (
        <>
            <NavbarO />
            <div className="container" style={{ "margin-top": "100px" }}>

               
                <div class=" card" >
                    <div className=" text-center m-5" > <h1 style={{ "color": "#f14836" }}>Wanna Join As..</h1></div>
                    <div class="card-body">
                        <div class="container text-center">
                            <div class="row">
                                <div class="col cutomer " onClick={() =>{
                                    setSelected("customer")
                                }}>
                                  <div className="card p-4 text-center"> <h3  style={{ "color": "#f14836" }}>Customer </h3>
                                  <div className=" text-center m-2"> 
                                  <BsCheckCircleFill  style={{"color":textColorc}} size={70} onClick={() => {
                                    setTextColorc("orangered")
                                }}/>
                                
                                </div>
                                  </div>
                                </div>
                                <div class="col company" onClick={() =>{
                                    setSelected("Company")
                                }}>
                                <div className="card p-4 text-center"> 
                                <h3  style={{ "color": "#f14836" }}>Company </h3>
                                <div className=" text-center m-2"> 
                                <BsCheckCircleFill  style={{"color":textColor}} size={70} onClick={() => {
                                    setTextColor("orangered")
                                }}/>
                                
                                </div>
                                </div>
                            
                                </div>
                            </div>
                            <br />
                            <br />
                            <button className="main-btn" onClick={() => {alert(selectedOp);
                            if(selectedOp === "Company")
                                window.location.assign("/signupCompany");
                            if(selectedOp === "customer")
                                window.location.assign("/signup");
                            }}>Join</button>
                        </div>
                      

                    </div>
                </div>
          
            </div>
        </>
    )
}
export default WannaJoin;