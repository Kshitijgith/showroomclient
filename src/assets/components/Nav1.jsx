import React from 'react';
import toyota from './images/header.jpg';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const Nav = () => {
    
},



    // Call the fetchCars function when the component mounts
    
  const navigate = useNavigate();

  function go() {
    navigate('/Login');
  }
 

  function go2() {
    navigate('/Signup');
  }
  const go3=async()=>{
    await axios.post('http://localhost:3000/logout');
    navigate('/')
  }

  return (
    <div className="  w-full h-10 bg-black flex justify-between items-center ">
      <div className="h-full w-30 bg-white">
        <img src={toyota} className="h-full w-full" alt="Toyota Logo" />
      </div>
      <div className="h-full w-50 flex items-center justify-between">
      {state === false && (  
  <>
    <button
      onClick={go2}
      className="h-50 w-20  text-black text-2xl border-2 bg-white hover:bg-stone-700 border-black rounded-full hover:text-white  font-bold"
    >
      Signup
    </button>
    <button
      onClick={go}
      className="h-50 w-20 bg-white text-black border-2 text-2xl border-black rounded-full hover:bg-white hover:text-black font-bold"
    >
      Login
    </button>
  </>
)}

{state === true && (  // Use && operator for conditional rendering
  <button
    onClick={go3}
    className="h-50 w-20  text-black text-2xl border-2 bg-white hover:bg-stone-700 border-black rounded-full hover:text-white  font-bold"
  >
    Logout
  </button>
)}

       

        <button className="h-50 w-20 bg-white text-black border-2 text-2xl border-black rounded-full hover:bg-white hover:text-black font-bold">
          <ScrollLink
            to="servicesSection"
            spy={true}
            smooth={true}
            duration={500}
            className="h-full w-full flex items-center justify-center"
          >
            Service
          </ScrollLink>
        </button>

        <button className="h-50 w-20 bg-white text-black border-2 text-2xl border-black rounded-full hover:bg-white hover:text-black font-bold">
          <ScrollLink
            to="contactsection"
            spy={true}
            smooth={true}
            duration={500}
            className="h-full w-full flex items-center justify-center"
          >
            ContactUs
          </ScrollLink>
        </button>
      </div>
    </div>
  );
};

export default Nav;