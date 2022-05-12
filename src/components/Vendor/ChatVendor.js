import "./chat.css";
import dhl from "../../asset/img/dhl.svg";
import { FaMicrophone } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import VendorHeader from "./VendorHeader";


function ChatVendor(){
    return(
        <>
        <VendorHeader />

<div class="container containerss" style={{"margin-top":"100px"}}>
  <sidebar class="sidebar">
   <span class="logo">CHAT</span>
    <div class="list-wrap">
      <div class="list">
      <img src={dhl} alt="" />
      <div class="info">
        <span class="user">Taylor Swift</span>
        <span class="text">Hi! :)</span>
      </div>
      <span class="count">20</span>
      <span class="time">now</span>
    </div>
    <div class="list">
      <img src={dhl} alt="" />
      <div class="info">
        <span class="user">Miley Cyrus</span>
        <span class="text">Good night.</span>
      </div>
      <span class="time">5 min. ago</span>
    </div>
    <div class="list">
      <img src={dhl} alt="" />
      <div class="info">
        <span class="user">Rihanna</span>
        <span class="text">Çav bella</span>
      </div>
      <span class="time">1 hour ago</span>
    </div>
    <div class="list">
      <img src={dhl} width="50" height="50" alt="" />
      <div class="info">
        <span class="user">Furry</span>
        <span class="text">Ok, lets go.</span>
      </div>
      <span class="time">1 day ago</span>
    </div>
    <div class="list">
      <img src={dhl} />
      <div class="info">
        <span class="user">Serenay Sarıkaya</span>
        <span class="text">Hi! :)</span>
      </div>
      <span class="time">now</span>
    </div>
    <div class="list">
    <img src={dhl} />
      <div class="info">
        <span class="user">Hazal Kaya</span>
        <span class="text">Good night.</span>
      </div>
      <span class="time">5 min. ago</span>
    </div>
    <div class="list">
    <img src={dhl} />
      <div class="info">
        <span class="user">Tuba Büyüküstün</span>
        <span class="text">Çav bella</span>
      </div>
      <span class="time">1 hour ago</span>
    </div>
    <div class="list">
    <img src={dhl} />
      <div class="info">
        <span class="user">Bergüzar Korel</span>
        <span class="text">Ok, lets go.</span>
      </div>
      <span class="time">1 day ago</span>
    </div>
    <div class="list">
    <img src={dhl} />
      <div class="info">
        <span class="user">Beren Saat</span>
        <span class="text">Hi! :)</span>
      </div>
      <span class="time">now</span>
    </div>
    <div class="list">
    <img src={dhl} />
      <div class="info">
        <span class="user">Fahriye Evcen</span>
        <span class="text">Good night.</span>
      </div>
      <span class="time">5 min. ago</span>
    </div>
    <div class="list">
    <img src={dhl} />
      <div class="info">
        <span class="user">Hande Erçel</span>
        <span class="text">Çav bella</span>
      </div>
      <span class="time">1 hour ago</span>
    </div>
    
    </div>
  </sidebar>
  <div class="content">
    <header>
    <img src={dhl} />
      <div class="info">
        <span class="user">DHL</span>
        <span class="time">Online - Last seen, 2.02pm</span> 
      </div>
      <div className="d-flex text-right ">
            <FaPhoneAlt class="mr-3" size={20} style={{"color":"orangered"}}/>
            <FaVideo class="mr-3" size={20} style={{"color":"orangered"}}/>
            <FaEllipsisV class="mr-3" size={20} style={{"color":"orangered"}}/>

      </div>
      <div class="open">
        <a href="javascript:;">UP</a>
      </div>
    </header>
    <div class="message-wrap">
      <div class="message-list">
        <div class="msg">
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit minus minima quo corporis.
        </p>
        </div>
        <div class="time">now</div>
      </div>
      <div class="message-list me">
        <div class="msg">
            <p>
              Lorem ipsum dolor sit amet.
            </p>
        </div>
        <div class="time">now</div>
      </div>
      <div class="message-list">
        <div class="msg">
          <p>Odit minus minima quo corporis.
        </p>
        </div>
        <div class="time">now</div>
      </div>
      <div class="message-list me">
        <div class="msg">
            <p>
              Lorem.
            </p>
        </div>
        <div class="time">now</div>
      </div>
      <div class="message-list">
        <div class="msg">
          <p>
          Lorem, ipsum dolor.
        </p>
        </div>
        <div class="time">now</div>
      </div>
      <div class="message-list me">
        <div class="msg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam laudantium illum quidem? Iste hic doloribus quos non iure libero excepturi, praesentium in, blanditiis repellat labore illo, voluptas sed fugit consequatur dolorum assumenda ea nesciunt. Pariatur.
            </p>
        </div>
        <div class="time">now</div>
      </div>
      <div class="message-list">
        <div class="msg">
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit minus minima quo corporis.
        </p>
        </div>
        <div class="time">now</div>
      </div>
      <div class="message-list me">
        <div class="msg">
            <p>
             Lorem, ipsum.
            </p>
        </div>
        <div class="time">now</div>
      </div>
      <div class="message-list">
        <div class="msg">
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nulla doloribus dolore impedit dolorem hic ex dolor quo illo tenetur ab exercitationem atque iusto, voluptatibus quos.
        </p>
        </div>
        <div class="time">now</div>
      </div>
      <div class="message-list me">
        <div class="msg">
            <p>
              Lorem dolor sit.
            </p>
        </div>
        <div class="time">now</div>
      </div>
    </div>
    <div class=" d-flex">
    <div class="input-group pl-1" style={{"width":"790px","border-radius":"25px","border":" 7px solid #dee2e6"}}>
    <button class="btn " type="button">
                                                            <FaPaperclip  style={{"color":"orangered"}}/>
                                                        </button>
                                                    <input type="text" class="form-control border-0" placeholder="Search this blog" />
                                                    <div class="input-group-append">
                                                        <button class="btn " type="button">
                                                            <FaSmileBeam style={{"color":"orangered"}} />
                                                        </button>
                                                        <button class="btn " type="button">
                                                            <FaCamera style={{"color":"orangered"}} />
                                                        </button>
                                                        
                                                       
                                                    </div>
                                </div>
      <button className="btn " style={{"background-color":"orangered","color":"white"}}><FaMicrophone /></button>
    </div>
  </div>
</div>
        </>
    )
}
export default ChatVendor;