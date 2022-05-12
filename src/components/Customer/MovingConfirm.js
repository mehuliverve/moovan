import React, { useState } from "react";
import CustomerHeader from "./CustomerHeader";
import "./moving_confirm.css"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa"
function MovingConfirm() {

    return (
        <>
            <CustomerHeader />
            <div className="container" style={{ "margin-top": "100px" }}>
                <div className="row">
                    <div class="col-sm-12 col-lg-6">
                        <div className="d-flex justify-content-center" style={{ "border-radius": "25px", "border": " 2px solid #000000" }}>
                            <div className="btn"><button className="border-0 bg-white">1 RK </button></div><div className="vl"></div>
                            <div className="btn"><button className="border-0 bg-white">1 RHK</button></div><div className="vl"></div>
                            <div className="btn"><button className="border-0 bg-white">2 RHK</button></div><div className="vl"></div>
                            <div className="btn"><button className="border-0 bg-white">3 RHK</button></div><div className="vl"></div>
                            <div className="btn"><button className="border-0 bg-white">4 RHK</button></div><div className="vl"></div>
                            <div className="btn"><button className="border-0 bg-white">Studio</button></div>
                        </div>
                        <div className="container p-5  mt-2 d-flex justify-content-center align-items-center " style={{ "border-radius": "25px", "border": " 2px dotted #000000" }}>
                            <FaPlus style={{ "color": "black" }} />
                        </div>
                        <div className="container border mt-2 d-flex justify-content-between  align-items-center" style={{ "border-radius": "25px" }}>
                            <p>Sofa</p>
                            <button className="btn"><FaPlus /></button>
                            <p>1</p>
                            <button className="btn"><FaMinus /></button>
                            <input type="checkbox" />
                            <p>Foldable</p>
                        </div>
                        <div className="container border mt-2" style={{ "border-radius": "25px" }}>
                            <textarea className="border-0" rows="3" cols="65" placeholder="Start Destination"></textarea>
                        </div>
                        <div className="container border mt-2" style={{ "border-radius": "25px" }}>
                            <textarea className="border-0" rows="3" cols="65" placeholder="End Destination"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-6" >
                        <div className="container d-flex justify-content-cenetr  align-items-center " style={{ "background": "lightgreen", "border-radius": "25px" }}>
                            <FaPhoneAlt style={{ "color": "green" }} />
                            <p className="pl-3" style={{ "color": "green" }}>Reach Out to us if you have any questions: 810-220-9114 </p>
                        </div>

                        <div className="container border mt-2" style={{ "border-radius": "25px", "background": "#dedede" }}>
                            <p>Estimated Price </p>
                            <p className="text-center">$2000 - 4000</p>

                        </div>
                      
                        <div className="container mt-2">
                            <div class="upload__box">
                                <div class="upload__btn-box">
                                    <label class="upload__btn">
                                        <p><FaPlus /></p>
                                        <input type="file" multiple="" data-max_length="20" class="upload__inputfile" />
                                    </label>
                                </div>
                                <div class="upload__img-wrap"></div>
                            </div>
                        </div>
                        <div className="container border mt-2" style={{ "border-radius": "25px" }}>
                            <textarea className="border-0" rows="3" cols="65" placeholder="Note:"></textarea>
                        </div>
                        <div className="container text-center mt-2">
                            <button className="main-btn">Post</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MovingConfirm;