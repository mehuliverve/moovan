import React, { useState } from "react";
import logo from "../asset/img/logo.svg";
import "./Homescreen.css";
import profile1 from "../asset/img/profile.jpg";
import profile2 from "../asset/img/profile-n.jpg";
import why from "../asset/img/why.svg";
import how from "../asset/img/how.svg";
import { BsFillPlayFill } from "react-icons/bs";
import Navbar from "./Navbar";

function HomeScreen(){
return(

    <>


   <Navbar />
    <section id="service" className="service-area">
    <div className="row">
                <div className="col-lg-6 col-md-8">
                    <div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                        <h6 className="sub-title title"><b>Our Top Movers</b></h6>
                    </div>
                </div>
            </div> 
            <br />
            <div className="d-flex justify-content-center">
                <div className="frames">
                    <div className="card-lists">
                        <div className="cards text-center">
                            <img className="topmi" src={profile2} />
                            <div className="text-center">
                            <p>Name: </p>
                            <p>Success Rates: </p>
                            <p>Total Move : </p>
                            </div>
                        </div>
                        <div className="cards text-center">
                            <img className="topmi" src={profile1} />
                            <div className="text-center">
                            <p>Name: </p>
                            <p>Success Rates: </p>
                            <p>Total Move : </p>
                            </div>
                        </div>
                        <div className="cards text-center">
                            <img className="topmi" src={profile2} />
                            <div className="text-center">
                            <p>Name: </p>
                            <p>Success Rates: </p>
                            <p>Total Move : </p>
                            </div>
                        </div>
                        <div className="cards text-center">
                            <img className="topmi" src={profile1} />
                            <div className="text-center">
                            <p>Name: </p>
                            <p>Success Rates: </p>
                            <p>Total Move : </p>
                            </div>
                        </div>
                        <div className="cards text-center">
                            <img className="topmi" src={profile2} />
                            <div className="text-center">
                            <p>Name: </p>
                            <p>Success Rates: </p>
                            <p>Total Move : </p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
    </section>
    



    
<div className="container mt-5">
  <div className="row">
    
    <div className="col-xs-12 col-sm-12 col-md-6">
      <div className="box">
		<img src = {why}/>
      </div>
    </div>
    
    <div className="col-xs-12 col-sm-12 col-md-6">
      <div className="box  mt-5">
       <div className="text-center "> <h3  className="hero-title wow fadeInUp" style={{"color":"#f14836"}}>Why Muvan? </h3></div>
		<div className="mt-3"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,  and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum</p>
		</div>
		<div className="d-flex justify-content-between mt-4">
		
	
                                <a className="main-btn" data-scroll-nav="0">Read More </a>
                            
                                <a className="main-btn" data-scroll-nav="0" >Watch <i className="fa fa-solid fa-play"></i></a>
		</div>
	  </div>
    </div>
  </div>
</div>



<div className="container mt-5">
    <div className="row">

        <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="box  mt-5">
                <div className="text-center ">
                    <h3 className="hero-title wow fadeInUp" style={{"color":"#f14836"}}>How It will Work </h3>
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
                                <h3>Step 1:</h3>
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum has been the industry's standard dummywhen an unknown printer took a galley of
                                    type and scrambled it to make a type
                                    <br /><br />
                                </span>
                            </div>
                         
                            <div className="carousel-item">
                                <h3>Step 2:</h3>
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                                    Ipsum has been the industry's standard dummywhen an unknown printer took a galley of
                                    type and scrambled it to make a type

                                    <br /><br />
                                </span>
                            </div>
                       
                            <div className="carousel-item">
                                <h3>Step 3:</h3>
                                <span>
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
                <div className="d-flex justify-content-between mt-4">


                    <input type="text" className="border" style={{"border-radius":"25px","height":"50px","padding":"20px" }}
                        placeholder="we will keep you posted..." />
                    <button className="ml-3 main-btn" style={{"height":"50px"}}>Sign Up</button>
                </div>
            </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="box">
                <img src="assets/images/how.svg" />
            </div>
        </div>
    </div>
</div>
<br />
<div className="text-center">

           
                    <div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                        <h6 className="sub-title title"><b>Become Member Of Our Moving Community</b></h6>
                    </div>
          

    
<div className="row m-5 d-flex justify-content-center">


<div class="card border rounded p-4 m-4 w-25" style={{"width":"18rem","background":"#cccfd2fc"}}>
<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                        <p className="sub-title title"style={{"text-transform":"none"}}><b>Basic </b></p>
</div>
  <div class="card-body">
    <h5 class="card-title"><b>$49</b>/m </h5>
    <p class="card-text"> <button className="btn main-btn" style={{"height":"50px"}}>Start Free Trial </button>
</p>
<br />
<br />
<p><b>This Plan Includes :</b></p>
<br />
<div>
       <div className="d-flex justify-content-start"> <BsFillPlayFill size={28}/>  <p>X numbers of regional Leads </p></div>
       <div className="d-flex justify-content-start"> <BsFillPlayFill size={28}/>  <p>X numbers of Monthly  Leads </p></div>
       <div className="d-flex justify-content-start"> <BsFillPlayFill size={28}/>  <p>X numbers of regional Leads </p></div>
       <div className="d-flex justify-content-start"> <BsFillPlayFill size={28}/>  <p>X numbers of Monthly  Leads </p></div>

    </div>

  </div>
 

        
</div>

<div class="card border rounded p-4 m-4 w-25" style={{"width":"18rem","background":"#cccfd2fc"}}>
<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                        <p className="sub-title title" style={{"text-transform":"none"}}><b>Professional  </b></p>
</div>
  <div class="card-body">
    <h5 class="card-title"><b>$100</b>/m </h5>
    <p class="card-text"><button className="btn main-btn" style={{"height":"50px"}}>Start Free Trial </button></p>
    <br />
    <br />
    <p><b>This Plan Includes :</b></p>
    <br />
    <div>
       <div className="d-flex justify-content-start"> <BsFillPlayFill size={28}/>  <p>X numbers of regional Leads </p></div>
       <div className="d-flex justify-content-start"> <BsFillPlayFill size={28}/>  <p>X numbers of Monthly  Leads </p></div>
       <div className="d-flex justify-content-start"> <BsFillPlayFill size={28}/>  <p>X numbers of regional Leads </p></div>
       <div className="d-flex justify-content-start"> <BsFillPlayFill size={28}/>  <p>X numbers of Monthly  Leads </p></div>

    </div>



  </div>
</div>
</div>
</div>


<footer class="footer-distributed">

<div class="footer-left">

  <img src={logo} alt="" />
  <div class="footer-icons">

<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
<a href="#"><i class="fa fa-linkedin"></i></a>
<a href="#"><i class="fa fa-github"></i></a>

</div>
 

  
</div>

<div class="footer-center">

  <div> 
  <p class="">
  <h4  style={{"color":"#f14836"}}><b>Quick Links </b></h4>

      <ul style={{"color":"black" , "font-weight":"bolder"}}>
    <li> <a href="#">Find Movers </a> </li> 
    <li>  <a href="#">About Us </a> </li> 
    <li> <a href="#">Subscriptions</a> </li> 
    <li> <a href="#">Why Muvan?</a> </li> 
    <li> <a href="#">How It Works ?</a> </li> 
    </ul>
  </p>
  </div>




</div>

<div class="footer-right">
<div className="">
                                <a className="main-btn " style={{"width":"200px"}} data-scroll-nav="0" href="#pricing">Login</a>
                            </div>
                            <br />
                            <div className="">
                                <a className="main-btn" style={{"width":"200px"}} data-scroll-nav="0" href="#pricing">Sign Up</a>
                            </div>
  
 
</div>

</footer>
    </>
)} 

export default HomeScreen;