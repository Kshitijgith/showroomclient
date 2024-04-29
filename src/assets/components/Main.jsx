import React from "react";
import Nav from "./Nav";
import Cartypes from "./types/Cartypes";
import Sellcar from "./types/Sellcar";
import logo from './images/Logos.jpg'
import Service from "./Service";
import { Element } from 'react-scroll';
import { Bounce } from 'react-reveal';
import Contact from "./Contact";
import Kk from './images/Kk.jpg'
import about from './images/about.jpg'
import { Slide } from 'react-reveal';
import { useState } from "react";
// import  Carsauel from './Carsuel'
import Carsauel from "./Carsuel";

const Main = () => {
  
  
  return (
    <>
      <div className=" h-100vh w-full    bg-slate-950  ">
      <Nav />
      <div className=" h-90vh w-full    bg-slate-950 overflow-y-auto ">
      <div className=" h-90vh w-full flex justify-center items-center  ">
        <Carsauel/>

              
        </div>
        
         
         <Slide left duration={2000}>
          <div className="h-90vh w-full flex flex-col items-center justify-center ">
          
            <div className="h-60 w-80 flex flex-row bg-red-500">
              <div className="h-full w-60 flex flex-col">
                <div className="h-15 w-60 text-white text-4xl font-extrabold">Welcome To K&K</div>
                <div className="h-60 w-full text-white text-2xl font-thin">K&K, a stalwart in the automotive industry since 2000, has been synonymous with 
                trust, reliability, and innovation. With a legacy spanning over two decades, we have consistently delivered excellence in providing 
                brand new vehicles, facilitating seamless transactions for pre-owned cars, 
                and offering comprehensive automotive services. Our commitment to customer satisfaction is unwavering,
                evident through our exceptional after-sales service and transparent business practices. At K&K,
                we pride ourselves on our integrity, ensuring that every interaction with us is built on honesty and fairness.
                Join us on a journey where quality meets experience, and let K&K be your partner in all your automotive needs.</div>
                
              </div>
              <div className="h-full w-40 bg-white" style={{ backgroundImage: `url(${Kk})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', objectFit:'cover' }}></div>
            </div>
          </div>
          </Slide>
            <Slide bottom>
            <div className="h-full w-full flex flex-col items-center justify-center ">
          
          <div className="h-70 w-80 flex flex-col items-center  ">
          
          <div className="h-70 w-80  flex  justify-around">
            <div className="h-full w-20 flex flex-col justify-center text-center text-6xl text-white"><b>500+ Happy Clients</b>
            </div>
            <div className="h-full w-20  flex flex-col justify-center text-center text-6xl text-white"><b>1000+ Vehicles</b>
            </div>
            <div className="h-full w-20  flex flex-col justify-center text-center text-6xl text-white"><b>20+ Brands</b>
            </div>
            <div className="h-full w-20  flex flex-col justify-center text-center text-6xl text-white"><b>1000+ Deals</b>
            </div>
          </div>
          <div className="h-20 w-full"></div>
          <div className="h-30 w-60 text-center text-6xl text-white "><h2><b>Dealing With 🤝</b></h2></div>
        
        <div className="h-20 w-full"></div>
        <div className="h-30 w-full  flex items-center justify-center"  ><img src={logo} class="w-80 h-full rounded-full shadow-lg" alt="..."></img></div>
          </div>
            
          </div>
          </Slide>
        <div className="h-full w-full flex items-center justify-center">
<div className="h-90 w-full flex flex-col">
<div className="h-20 w-full text-center flex justify-center  items-center text-6xl text-white"><h2><b>Browse By Category </b></h2></div>
        <div className="h-80 w-full">
           <Cartypes/> 
        </div>
</div>
        </div>
        <div className="h-full w-full flex  justify-center items-center">
          <div className="h-80 w-full flex  flex-col justify-center items-center">
          <div className="h-30 w-full text-center text-6xl text-white"><h2><b>Wanna  Sell Your Car<br/> Checkout This </b></h2></div>
          
<div className="h-10 w-full"></div>
          <Sellcar/>
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center">
        <div className="h-60 w-full"><Element name="servicesSection" className="h-full w-full  flex flex-col justify-center items-center">
       
       <div className="h-30 w-80 flex items-center justify-center text-center text-6xl text-white "><h1><b>Other Services</b></h1></div>
          <Service/>

       </Element></div>
        </div>      
        <div className="h-full w-full flex items-end">
        <Element name="contactsection" className="h-full w-full  flex justify-center items-end flex-row  ">
        <div className="h-70 w-full flex flex-row">
          <div className="h-full w-60 bg-white"><img src={about} class="w-full h-full" alt="..."></img></div>
          <div className="h-full w-40 bg-red-500 flex flex-col justify-between">
            <div className="h-60 w-full text-center text-white text-4xl flex flex-col">
            <div className="h-20 w-full"></div>
              <h2>OPENING HOURS</h2>
              <br/>
              <h6 className="text-2xl">MONDAY TO SATURDAY</h6>
              <br/>
              <h6 className="text-2xl">9AM TO 12AM</h6>
              <br/>
              <h6 className="text-2xl">SUNDAY</h6>
              <br/>
              <h6 className="text-2xl">9AM TO 12PM</h6>
            </div>
            <div className="h-20 w-full  flex justify-center items-end text-4xl text-white "><b>Connect With Us</b></div>
            <div className="h-15 w-full ">

              <Contact/>
            </div>
          </div>
        </div>
        </Element>
        </div>
  
        {/* <div className="h-10 w-full text-center text-6xl text-white"><h2><b>Dealing With 🤝</b></h2></div>
        
        
        <div className="h-30 w-full  flex items-center justify-center"  ><img src={logo} class="w-80 h-full rounded-full shadow-lg" alt="..."></img></div>
        
        <div className="h-20 w-full text-center flex justify-center  items-center text-6xl text-white"><h2><b>Browse By Category </b></h2></div>
        <div className="h-70 w-full">
           <Cartypes/> 
        </div>
        <div className="h-10 w-full"></div>
        <div className="h-10 w-full text-center text-6xl text-white"><h2><b>Wanna  Sell Your Car<br/> Checkout This </b></h2></div>
        <Sellcar/>
        
<div className="h-60 w-full"><Element name="servicesSection" className="h-full w-full  flex flex-col justify-center items-center">
       
       <div className="h-30 w-80 flex items-center justify-center text-center text-6xl text-white "><h1><b>Other Services</b></h1></div>
          <Service/>

       </Element></div>

       
        
        <div className="h-full w-full flex  "  >
        
        
        <Element name="contactsection" className="h-full w-full  flex justify-center items-end flex-row  ">
        <div className="h-70 w-full flex flex-row">
          <div className="h-full w-60 bg-white"><img src={about} class="w-full h-full" alt="..."></img></div>
          <div className="h-full w-40 bg-red-500 flex flex-col justify-between">
            <div className="h-60 w-full text-center text-white text-4xl flex flex-col">
            <div className="h-20 w-full"></div>
              <h2>OPENING HOURS</h2>
              <br/>
              <h6 className="text-2xl">MONDAY TO SATURDAY</h6>
              <br/>
              <h6 className="text-2xl">9AM TO 12AM</h6>
              <br/>
              <h6 className="text-2xl">SUNDAY</h6>
              <br/>
              <h6 className="text-2xl">9AM TO 12PM</h6>
            </div>
            <div className="h-20 w-full  flex justify-center items-end text-4xl text-white "><b>Connect With Us</b></div>
            <div className="h-15 w-full ">

              <Contact/>
            </div>
          </div>
        </div>
        </Element>
        
        </div>
        
        
        </div> */}
        </div>
        </div>
    </>
  );
};

export default Main;
