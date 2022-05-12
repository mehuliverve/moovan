import NavbarO from "./NavbarO";
import "./Find.css";



function FindMovers(){
    

    return(
        <>
            <NavbarO />
            <div class="box" style={{"margin-top":"100px"}}>
                <input type="text" id="search" placeholder="🔎 Search here..." />
                <ul id="list"></ul>
            </div>
        </>
    )
}

export default FindMovers;