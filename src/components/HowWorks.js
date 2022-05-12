import React from "react";
import "./how.css"
import NavbarO from "./NavbarO";
import h1 from "../asset/img/h1.svg"
import h2 from "../asset/img/h2.svg"
import h3 from "../asset/img/h3.svg"
import hmain from "../asset/img/HowMain.svg"
function HowWorks(){
    return(
        
        <>
       <NavbarO />
            
<div className="container" style={{"margin-top":"150px"}}>
  <div className="row">
    
    <div className="col-xs-12 col-sm-12 col-md-6">
      <div className="box">
		<img src = {hmain}/>
      </div>
    </div>
    
    <div className="col-xs-12 col-sm-12 col-md-6">
      <div className="box  mt-5">
       <div className="text-center "> </div>
		<div className="mt-5 text-center"><br /><br /><p><h1  className="hero-title wow fadeInUp" style={{"color":"#f14836"}}>Moving Simplified!</h1>
        
        <p className="text-center"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </p>
		</div>
		<div className="d-flex justify-content-between mt-4">
		
	
                              
		</div>
	  </div>
    </div>
  </div>
</div>
  <div class="timeline" style={{"margin-top":"100px"}}>
    <ul>
      <li>
        <div class="content">
          <h3>Step 1</h3>
          <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div class="time fill"  style={{"height":"200px"}}>
        <img src={h1} height="300" width="250" />
        </div>
      </li>
      
      <li>
        <div class="content">
          <h3>Step 2</h3>
          <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div class="time fill"  style={{"height":"200px"}}>
        <img src={h2} height="300" width="250" />
        </div>
      </li>
      <li>
        <div class="content">
          <h3>Step 3</h3>
          <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div class="time fill"  style={{"height":"200px"}}>
        <img src={h3} height="300" width="250" />
        </div>
      </li>
 
    
      
    
    
  
      <div style={{"clear":"both"}}></div>
    </ul>
  </div>

        </>
    )
}

export default HowWorks