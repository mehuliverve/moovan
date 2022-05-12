import NavbarO from "./NavbarO";
import sign from "../asset/img/sign-Company.svg";
import "./signC.css";
function SignUpCompany() {
    return (
        <>

            <NavbarO />
            <div className="container" style={{ "margin-top": "150px" }}>
                <div className="row">

                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="box">
                            <img src={sign} />
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="box ">
                            <div className="text-center "> </div>
                            <div className="text-center"><br /><br /><p><h3 className="hero-title wow fadeInUp" style={{ "color": "#f14836" }}>Register Your Company with Us</h3>

                                <p className="mt-4 text-center"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            </p>
                            </div>
                            <div className="d-flex justify-content-between mt-4">



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ "margin-top": "100px" }}>

               
<div class=" card" >
    <div className=" text-center m-5" > <h4 style={{ "color": "#f14836" }}>Register Your Company with Us and Get Clients Around the world</h4></div>
    <div class="card-body">
        <div class="container text-center">
                
    <div class="contact">
      <h3></h3>
      <form>
          <div className="tg">
        <p  className=" tg1 text-left">
          <span>First Name</span>
          <input type="text "class="border border-dark rounded" name="name"/>
        </p>
        <p  className="tg2 text-left">
          <span>Last Name</span>
          <input type="text" class="border border-dark rounded"  name="company"/>
        </p>
        <p  className="tg3 text-left">
          <span>Email</span>
          <input type="email" class="border border-dark rounded"  name="email"/>
        </p>
        </div>
   
        <p  className="text-left">
          <span>Phone </span>
          <input type="text" class="border border-dark rounded"  name="phone"/>
        </p>
        <p  className="text-left">
          <span>Address </span>
          <input type="text" class="border border-dark rounded"  name="phone"/>
        </p>
        <p   className=" full text-left">
          <span>Company</span>
          <input type="text" class="border border-dark rounded"  name="phone"/>
        </p>
        

      </form>

    </div>

            <button className="mt-5 main-btn">Submit</button>
        </div>
      

    </div>
</div>

</div>

        </>
    )
}
export default SignUpCompany;