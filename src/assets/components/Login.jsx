import React from 'react';
import toyota from './images/toyotabg.jpeg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [email,setemail]=useState();
const[password,setpassword]=useState();
 const navigate=useNavigate();
 const handlsubmit= async(event)=>{
event.preventDefault();
   try{
       const result= await axios.post('https://kkshowroom.onrender.com/login',{email,password})
if(result.data==="successful"){
  alert('Login Successful')
  navigate('/');
}
else if(result.data==="no user found"){
  alert('No User Found')
}
else{
  alert('Wrong Password')
}
   }
   catch(err){
console.log(err);
   }

 }
  const signup=()=>{
    navigate('/Signup')
  }
  return (
    <div className='h-screen w-screen bg-slate-950 flex items-center justify-center'>

      <div className='h-70 w-30 bg-white border-r-neutral-950 flex flex-col items-center'>
      
        <img className='h-20 w-full' src={toyota} alt="Toyota Background" /> 
        <div className='h-10 w-full'></div>
        <div className='h-80 w-80  justify-center  flex-col '> 
        <form  onSubmit={handlsubmit}  className='h-full w-full  flex flex-col  items-center'><input type='email'    onChange={(event) => setemail(event.target.value)}
       required className='h-10 w-90  bg-black  text-gray-50' placeholder='Enter Your Name'></input>
        <div className='h-10 w-full'></div>
        <input className='h-10 w-90  bg-black  text-gray-50' placeholder='Create Password' onChange={(event) => setpassword(event.target.value)}
       required></input>
        <div className=' h-10 w-full'></div> 
        <button className='h-20 w-90 bg-black text-neutral-50'>Login</button>
        <div className='h-10 w-90 font-thin text-1xl'>Don't have an account click below to signup</div>
        <button className='h-10 w-30 bg-black  text-slate-50' onClick={signup}>Signup</button>
        </form>
        
        </div>
      </div>
    </div>
  );
}

export default Login;

