import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import WannaJoin from "./components/WannaJoin";
import ContactUs from "./components/ContactUs";
import About from "./components/About"
import HowWorks from "./components/HowWorks";
import Why from "./components/Why";
import SignUpScreen from "./components/SignUpCompany";
import SignUpCompany from "./components/SignUpCompany";
import Dashboard_Customer from "./components/Customer/Dashboard_Customer";
import MovingSelection from "./components/Customer/MovingSelection";
import Chat from "./components/Customer/Chat";
import CustomerPost from "./components/Customer/CustomerPost";
import Dashboard_Vendor from "./components/Vendor/Dashboard_Vendor";
import ChatVendor from "./components/Vendor/ChatVendor";
import MovingConfirm from "./components/Customer/MovingConfirm";
import FindMovers from "./components/FindMovers"

const App = () => {
  return (

    <Switch>



      {/* Vendor Routes */}


      <Route path="/Dashboard">
        <Dashboard_Vendor />
      </Route>
      <Route path="/chat-vendor">
        <ChatVendor />
      </Route>
   
 


       {/* Customer Routes */}
      <Route path="/customerDash">
        <Dashboard_Customer />
      </Route>
      <Route path="/customerpost">
        <CustomerPost />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
      <Route path="/MovingSelection">
        <MovingSelection />
      </Route>
      <Route path="/Confirm">
        <MovingConfirm />
      </Route>

      {/* Public  Routes */}
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/howorks">
        <HowWorks />
      </Route>
      <Route path="/whyMuvan">
        <Why />
      </Route>
      <Route path="/signupCompany">
        <SignUpCompany />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/join">
        <WannaJoin />
      </Route>
     
      <Route exact path="/home">
        <HomeScreen />
      </Route>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route path="/about">
        <About />
      </Route> 
      <Route path="/Contact">
        <ContactUs />
      </Route>
      <Route path="/findMovers">
        <FindMovers />
      </Route>
    </Switch>
  );
};

export default App;
