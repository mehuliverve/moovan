import React, { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { FaTruckPickup } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import "./dashboard.css"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";

import logo from "../../asset/img/logo.svg";
import { BsSearch } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import dhl from "../../asset/img/dhl.svg";
import VendorHeader from "./VendorHeader";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
function Dashboard_Vendor() {
    const [show, setShow] = useState(false);


    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true)

    }
    return (
        <>
            <VendorHeader />
            <div className="container" style={{ "margin-top": "100px" }}>
                <h2 style={{ "color": "orangered" }}>Wants to Move...</h2>


                <div class="card-body">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col cutomer ">
                                <div className="card p-4 text-center" style={{ "background-color": "#c1c4c7" }}>
                                    <div className="text-center"><FaTruck size={75} style={{ "color": "#f14836" }} /></div>

                                    <h3 style={{ "color": "#f14836" }}>Regional </h3>
                                    <div className=" text-center m-2">


                                    </div>
                                </div>
                            </div>
                            <div class="col company">
                                <div className="card p-4 text-center" style={{ "background-color": "#c1c4c7" }}>
                                    <div className="text-center"><FaPlane size={75} style={{ "color": "#f14836" }} /></div>

                                    <h3 style={{ "color": "#f14836" }}>International </h3>
                                    <div className=" text-center m-2">


                                    </div>
                                </div>

                            </div>
                            <div class="col company">
                                <div className="card p-4 text-center" style={{ "background-color": "#c1c4c7" }}>
                                    <div className="text-center"><FaTruckPickup size={75} style={{ "color": "#f14836" }} /></div>
                                    <h3 style={{ "color": "#f14836" }}>Relocation </h3>
                                    <div className=" text-center m-2">


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <div className="container">
                <div class="row my-2">

                    <div class="col-12 d-flex text-center justify-content-center" style={{ "border-radius": "25px", "border": "2px solid black" }}>
                        <div className="col-xs-12 col-sm-3">
                            <h3 style={{ "color": "orangered" }}>Appartment Move</h3>
                            <p className="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummywhen an unknown printer took a galley of type and scrambled it to make a type </p>
                        </div>
                        <div className="col-xs-12 col-sm-3 ">
                            <p>Start Destination</p>
                            <div class="outer">
                                <div class="inner"></div>
                            </div>
                            <p>End Destination</p>
                            <b  ><p>Bed:4</p>
                                <p>Bed:5</p>
                            </b>
                        </div>
                        <div className=" col-xs-12 col-sm-3  d-flex align-items-center " style={{ "vertical-align": "middle" }}>
                            <h2><b className="text-black">$2000 - $4000</b></h2>
                        </div>
                        <div className="col-xs-12 col-sm-3  d-flex justify-content-center align-items-center">
                            <button className="main-btn"  onClick={handleShow} >View Details </button>
                        </div>
                    </div>
                </div>
                <div class="row my-2">

                    <div class="col-12 d-flex  justify-content-center" style={{ "border-radius": "25px", "border": "2px solid black" }}>
                        <div className="col-xs-12 col-sm-3">
                            <h3 style={{ "color": "orangered" }}>Appartment Move</h3>
                            <p className="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummywhen an unknown printer took a galley of type and scrambled it to make a type </p>
                        </div>
                        <div className="col-xs-12 col-sm-3 text-center">
                            <p>Start Destination</p>
                            <div class="outer">
                                <div class="inner"></div>
                            </div>
                            <p>End Destination</p>
                            <b  ><p>Bed:4</p>
                                <p>Bed:5</p>
                            </b>
                        </div>
                        <div className=" col-xs-12 col-sm-3 d-flex align-items-center " style={{ "vertical-align": "middle" }}>
                            <h2><b className="text-black">$2000 - $4000</b></h2>
                        </div>
                        <div className="col-xs-12 col-sm-3  d-flex justify-content-center align-items-center">
                            <button className="main-btn" onClick={handleShow}>View Details </button>
                        </div>
                    </div>
                </div>
            </div>


            <Modal
                class="modal-lg"
                show={show}
                id="hl"
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
              {/* <Modal.Header closeButton>
                    <Modal.Title>Health and safety disclaimer</Modal.Title>
    </Modal.Header> */}
                <Modal.Body closeButton>
                    <div class="card border-0" style={{ "width": "100%" }}>
                        <div className="text-center">
                            <img src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" height={100} width={100} className="border rounded-circle" alt="..." />
                            <p className="pt-1">Brian Dix</p>

                            <div className="d-flex justify-content-center">
                            <p>Start Destination </p>
                            <div>
                                <div> &#8594;</div>
                            </div>
                            <p> End Destination </p>
                            </div>
                        </div>
                        <div className=""  ><hr /></div>
                        <div class="card-body">
                            <h5 class="card-title">About Move:</h5>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummywhen an unknown printer took a galley of type and scrambled it to make a type </p>
                        </div>
                        <div className=""  ><hr /></div>
                        <div class="card-body">
                            <h5 class="card-title">Items:</h5>
                            <p class="card-text">Bed: 2(Non - Foldable), 1 (Foldable)  </p>
                            <p className="card-text">Sofa: 2(Non - Foldable), 1 (Foldable) </p>
                        </div>
                        <div className=""  ><hr /></div>
                        <div class="card-body">
                            <h5 class="card-title">Contact:</h5>
                            <p class="card-text">Contact Number: +1 (909) - 707 - 707 </p>
                            <p class="card-text">Address:  97 E Camino Del Abedul, Sahuarita, AZ 85629</p>
                     

                        </div>
                        <div className=""  ><hr /></div>
                        <div className="card-body">
                            <h5 class="card-title">Budget:</h5>
                            <div className="pl-3 text-black">
                                        <h3> <b>$2000 - 4000</b></h3>
                            </div>
                        </div>
                        <div className="text-center"><button className="main-btn">Connect</button></div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default Dashboard_Vendor;