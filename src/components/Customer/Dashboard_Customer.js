import CustomerHeader from "./CustomerHeader";
import { FaTruck } from "react-icons/fa";
import { FaTruckPickup } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";

import logo from "../../asset/img/logo.svg";
import { BsSearch } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import dhl from "../../asset/img/dhl.svg";

function Dashboard_Customer() {
    return (
        <>
            <CustomerHeader />
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

            <div>
                <div class="row justify-content-around">
                    <div class="col-4 text-center">
                       <h2 style={{"color":"orangered"}}> Our Top Movers</h2>
                        <div class="input-group pl-1" style={{ "width": "540px", "border-radius": "25px", "border": " 7px solid #dee2e6" }}>
                            <input type="text" class="form-control border-0" placeholder="Search this blog" />
                            <div class="input-group-append">
                                <button class="btn " type="button">
                                    <BsSliders style={{ "color": "orangered" }} />
                                </button>
                                <button class="btn " type="button">
                                    <BsSearch style={{ "color": "orangered" }} />
                                </button>

                            </div>
                        </div>
                        <div style={{"height":"500px", "width": "540px", "overflow-y":"scroll"}}>
                        <div className="container" style={{ "width": "520px"}}>
                            <div className="card p-2">
                                    <div className="d-flex justify-content-between">
                                        <img className="border w-25" style={{"border-radius":"20px"}} src={dhl} />
                                       
                                        <span className="text-left w-25" >
                                            <h6>DHL Express </h6>
                                            <p style={{'color':'#798795'}}><FaMapMarkerAlt />: Arizona,CA</p>
                                            <p style={{'color':'#798795'}}><FaCheckCircle />: 221 Moves</p>
                                           <p style={{'color':'#798795'}}><FaCheckCircle  />: Available Now</p>
                                        </span>
                                        <div className="text-right align-middle w-50"><button className="mt-3 main-btn">View Details </button></div>

                                    </div>
                                    <div>
                                     
                                    </div>
                            </div>
                        </div>
                        <div className="container" style={{ "width": "520px"}}>
                            <div className="card p-2">
                                    <div className="d-flex justify-content-between">
                                        <img className="border w-25" style={{"border-radius":"20px"}} src={dhl} />
                                       
                                        <span className="text-left w-25" >
                                            <h6>DHL Express </h6>
                                            <p style={{'color':'#798795'}}><FaMapMarkerAlt />: Arizona,CA</p>
                                            <p style={{'color':'#798795'}}><FaCheckCircle />: 221 Moves</p>
                                           <p style={{'color':'#798795'}}><FaCheckCircle  />: Available Now</p>
                                        </span>
                                        <div className="text-right align-middle w-50"><button className="mt-3 main-btn">View Details </button></div>

                                    </div>
                                    <div>
                                     
                                    </div>
                            </div>
                        </div>   <div className="container" style={{ "width": "520px"}}>
                            <div className="card p-2">
                                    <div className="d-flex justify-content-between">
                                        <img className="border w-25" style={{"border-radius":"20px"}} src={dhl} />
                                       
                                        <span className="text-left w-25" >
                                            <h6>DHL Express </h6>
                                            <p style={{'color':'#798795'}}><FaMapMarkerAlt />: Arizona,CA</p>
                                            <p style={{'color':'#798795'}}><FaCheckCircle />: 221 Moves</p>
                                           <p style={{'color':'#798795'}}><FaCheckCircle  />: Available Now</p>
                                        </span>
                                        <div className="text-right align-middle w-50"><button className="mt-3 main-btn">View Details </button></div>

                                    </div>
                                    <div>
                                     
                                    </div>
                            </div>
                        </div>   <div className="container" style={{ "width": "520px"}}>
                            <div className="card p-2">
                                    <div className="d-flex justify-content-between">
                                        <img className="border w-25" style={{"border-radius":"20px"}} src={dhl} />
                                       
                                        <span className="text-left w-25" >
                                            <h6>DHL Express </h6>
                                            <p style={{'color':'#798795'}}><FaMapMarkerAlt />: Arizona,CA</p>
                                            <p style={{'color':'#798795'}}><FaCheckCircle />: 221 Moves</p>
                                           <p style={{'color':'#798795'}}><FaCheckCircle  />: Available Now</p>
                                        </span>
                                        <div className="text-right align-middle w-50"><button className="mt-3 main-btn">View Details </button></div>

                                    </div>
                                    <div>
                                     
                                    </div>
                            </div>
                        </div>   <div className="container" style={{ "width": "520px"}}>
                            <div className="card p-2">
                                    <div className="d-flex justify-content-between">
                                        <img className="border w-25" style={{"border-radius":"20px"}} src={dhl} />
                                       
                                        <span className="text-left w-25" >
                                            <h6>DHL Express </h6>
                                            <p style={{'color':'#798795'}}><FaMapMarkerAlt />: Arizona,CA</p>
                                            <p style={{'color':'#798795'}}><FaCheckCircle />: 221 Moves</p>
                                           <p style={{'color':'#798795'}}><FaCheckCircle  />: Available Now</p>
                                        </span>
                                        <div className="text-right align-middle w-50"><button className="mt-3 main-btn">View Details </button></div>

                                    </div>
                                    <div>
                                     
                                    </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div class="col-4">
                        One of two columns
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard_Customer;