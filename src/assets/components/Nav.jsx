import React from 'react';
import toyota from './images/header.jpg';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import logout from './Logout'
import Profile from './Profile';

const Nav = () => {

  const[state,updatestate]=useState(false);
  const[username,setusername]=useState("");
  const[userdata,setuserdata]=useState("");
  const [val,setval]=useState(1);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:4000/state');
            const userdata=await axios.post('http://localhost:4000/showservice')
            updatestate(response.data.success);
             setusername(response.data.username);
             setuserdata(userdata.data);
            console.log(response.data);
            console.log(userdata);
        } catch (error) {
            console.error('Error fetching cars data:', error);
        }
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
}, []);



    // Call the fetchCars function when the component mounts
    
  const navigate = useNavigate();

  function go() {
    navigate('/Login');
  }
 
  console.log(val)
  function go2() {
    navigate('/Signup');
  }
  const go3=async()=>{
    await axios.post('http://localhost:4000/logout');
    navigate('/')
  }
   function go4(){
    navigate('/Profile')
   }
function go5(v){
  setval(v);  
} 
console.log(val);
  return (
    <div className="  w-full h-10 bg-black flex justify-between items-center ">
      <div className="h-full w-30 bg-white">
        <img src={toyota} className="h-full w-full" alt="Toyota Logo" />
      </div>
      <div className="h-full w-50 flex items-center justify-between">
        {/*<button className="h-50 w-20 bg-black text-black border-2 text-2xl border-black rounded-full hover:bg-white hover:text-black font-bold"> */}
         {/* <button className='h-50 w-20 bg-black text-white text-2xl hover:text-black font-bold '> */}
         <button className='h-50 w-20 bg-black hover:bg-white  text-2xl font-bold text-white hover:text-slate-300  '>
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

        <button className='h-50 w-20 bg-black hover:bg-white  text-2xl font-bold text-white hover:text-slate-300  '>
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
        {state === true && (  // Use && operator for conditional rendering
        <>
  {
    val===1 &&(
    <>
    <button
      onClick={() => go5(0)}
      className="h-50 w-20 bg-black hover:bg-white  text-2xl font-bold text-white hover:text-slate-300"
    >
      {username}
    </button>
    </>
  )

  }
 
  </>
)}
{state === false && (  
  <>
    <button
      onClick={go2}
      className="h-50 w-20 bg-black hover:bg-white  text-2xl font-bold text-white hover:text-slate-300"
    >
      Signup
    </button>
    <button
      onClick={go}
      className="h-50 w-20 bg-black hover:bg-white  text-2xl font-bold text-white hover:text-slate-300"
    >
      Login
    </button>


    
  </>
)}

{val===0 &&(
  
<>
  
  {
    state==true&&
    <div className='h-600 w-50 bg-red-500  border-4 border-white translate-y-64 z-10'>
 <div className='h-10 w-full bg-white text-2xl text-center'><b>{username}</b></div>
 <Profile/>
  <button onClick={go3} className='h-10 w-full bg-black text-white text-2xl hover:bg-slate-300 hover:text-white'>Logout</button> 
  
  <button onClick= {() => go5(1)} className='h-10 w-full bg-black  text-white text-2xl text-center'>Close</button>
  
  </div>
  }
  



  </>
)}

      </div>
    </div>
  );
};

export default Nav;
