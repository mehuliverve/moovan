
import React from "react";
import "./Mov.css";
import ms1 from "../../asset/img/ms1.svg"
import ms2 from "../../asset/img/ms2.svg"
import ms3 from "../../asset/img/ms3.svg"
import ms4 from "../../asset/img/ms4.svg"
import ms5 from "../../asset/img/ms5.svg"
import ms6 from "../../asset/img/ms6.svg"
import { FaCheckCircle } from "react-icons/fa";

function MovingSelection() {
    return (
        <>
            <section class="three-column-images" >
                <div class="container text-center" >
                    <div class="row">
                        <div class="hov col-xs-6 col-sm-4">
                            <img src={ms1}
                                class=" img-responsive" style={{"border-radius":"25px"}} height="160" width="400"/>
                            <a href="#" target="_blank">Office Move</a>
                            <div class="edit"><a href="#"><FaCheckCircle size={75} style={{ "color": "#f14836" }} /></a></div>

                        </div>

                        <div class="hov col-xs-6 col-sm-4">
                            <img src={ms2}
                                class=" img-responsive" style={{"border-radius":"25px"}} height="160" width="400"/>
                            <a href="#" target="_blank">Studio Move</a>
                            <div class="edit"><a href="#"><FaCheckCircle size={75} style={{ "color": "#f14836" }}/></a></div>

                        </div>

                        <div class="hov col-xs-6 col-sm-4">
                            <img src={ms3}
                                class="img-responsive" style={{"border-radius":"25px"}}height="160" width="400"/>
                            <a href="#" target="_blank">No Truck, Labor Only</a>
                            <div class="edit"><a href="#"><FaCheckCircle size={75} style={{ "color": "#f14836" }}/></a></div>

                        </div>



                        <div class="hov col-xs-6 col-sm-4">
                            <img src={ms4}
                                class=" img-responsive"  style={{"border-radius":"25px"}} height="160" width="400"/>
                            <a href="#" target="_blank">Appartment Move</a>
                            <div class="edit"><a href="#"><FaCheckCircle size={75} style={{ "color": "#f14836" }} /></a></div>

                        </div>

                        <div class="hov col-xs-6 col-sm-4">
                            <img src={ms5}
                                class=" img-responsive" style={{"border-radius":"25px"}} height="160" width="400"/>
                            <a href="#" target="_blank">Relocation &nbsp;</a>
                            <div class="edit"><a href="#"><FaCheckCircle size={75} style={{ "color": "#f14836" }} /></a></div>

                        </div>

                        <div class="hov col-xs-6 col-sm-4">
                            <img src={ms6}
                                class="img-responsive" style={{"border-radius":"25px"}} height="160" width="400"/>
                            <a href="#" target="_blank">Other  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;</a>
                            <div class="edit"><a href="#"><FaCheckCircle size={75} style={{ "color": "#f14836" }} /></a></div>

                        </div>


                    </div>
                            <br />
                            <br />
                        <button className="main-btn">Next </button>
                </div>
            </section>
        </>
    )
}
export default MovingSelection;