import React from "react";
import NavbarO from "./NavbarO";
import w1 from "../asset/img/w1.svg";
import w2 from "../asset/img/w2.svg";
function Why(){
    return(
        <>
            <NavbarO />
            <div className="container" style={{ "margin-top": "100px" }}>
                <div className="row">


                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="box  mt-5">
                            <div className="text-center "> </div>
                            <div className=" text-left"><br /><br /><p><h1 className="hero-title text-left wow fadeInUp" style={{ "color": "#f14836" }}>Let's get you Muvan!</h1>

                                <p className="text-left">Ready to experience something different? Muvan is an all-in-one marketplace where you can Muv 1 box or a treadmill to a pallet and even an entire home locally or across the globe.</p>
                            </p>
                            </div>
                            <div className="d-flex justify-content-between mt-4">



                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="box">
                            <img src={w1} />
                        </div>
                    </div>
                </div>
            </div>







            
            <div className="container" >
                <div className="row">


                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="box  mt-5">
                            <div className="text-center "> </div>
                            <div className=" text-left"><br /><br /><p><h1 className="hero-title text-left wow fadeInUp" style={{ "color": "#f14836" }}>Here is how we 
                            do our job:</h1>

                            </p>
                            </div>
                            <div className="d-flex justify-content-between mt-4">



                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="box">
                            <iframe width="100%" height="315"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>


                        </div>
                    </div>
                </div>
            </div>






            
<div className="container mt-5">
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="box">
                <img src={w2} />
            </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="box  mt-5">
                <div className="text-center ">
                    <h3 className="hero-title wow fadeInUp" style={{"color":"#f14836"}}>Our Values</h3>
                </div>
                <div className="mt-3">
                    <div id="carousel-example-1z" className="carousel slide carousel-fade mb-5" data-ride="carousel">
                
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                            <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                        </ol>
                    
                        <div className="carousel-inner" role="listbox">
                           
                            <div className="carousel-item active">
                            <br/>
                                <span className="text-center text-dark">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum has been the industry's standard dummywhen an unknown printer took a galley of
                                    type and scrambled it to make a type <br /> <br/>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum has been the industry's standard dummywhen an unknown printer took a galley of
                                    type and scrambled it to make a type 
                                    <br /><br />
                                </span>
                            </div>
                         
                            <div className="carousel-item">
                            <br/>
                                <span className="text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum has been the industry's standard dummywhen an unknown printer took a galley of
                                    type and scrambled it to make a type <br /><br/>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum has been the industry's standard dummywhen an unknown printer took a galley of
                                    type and scrambled it to make a type 
                                    <br /><br />
                                </span>
                            </div>
                       
                            <div className="carousel-item">
                                    <br/>
                                <span className="text-center">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum has been the industry's standard dummywhen an unknown printer took a galley of
                                    type and scrambled it to make a type <br /><br/>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum has been the industry's standard dummywhen an unknown printer took a galley of
                                    type and scrambled it to make a type 
                                    <br /><br />

                                </span>
                            </div>
                   
                        </div>
                   
                        <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                       
                    </div>
                </div>
              
            </div>
        </div>
     
    </div>
</div>
        </>
    )
}
export default Why ;