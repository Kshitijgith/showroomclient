import React, { useState } from 'react';
import toyota from './images/toyotabg.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigate=useNavigate()
  const handleSubmit =  async (event) => {
    event.preventDefault();
    try{
const result=await axios.post('http://localhost:4000/register',{email,username,password});
  if(result.data==="already registerd"){
    alert('username already registerd')
  }
  else if(result.data==="try another username"){
    alert("try another username");
    
  }
  else{
    alert('register done')
    navigate('/Login')
    }
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className='h-screen w-screen bg-slate-950 flex items-center justify-center'>
      <div className='h-70 w-30 bg-white border-r-neutral-950 flex flex-col items-center'>
        <img className='h-20 w-full' src={toyota} alt="Toyota Background" /> 
        <div className='h-10 w-full'></div>
        <div className='h-80 w-80 justify-center flex-col'>
          <form onSubmit={handleSubmit} className='h-full w-full flex flex-col items-center'>
            <input 
              type='email' 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required 
              className='h-10 w-90 bg-black text-white'  // Added bg-green-100 class
              placeholder='Enter Your Email' 
            />
            <div className='h-10 w-full'></div>
            <input 
              type='text' 
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required 
              className='h-10 w-90 bg-black text-white'  // Added bg-green-100 class
              placeholder='Enter Your Username' 
            />
            <div className='h-10 w-full'></div>
            <input 
              type='password' 
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required 
              className='h-10 w-90 bg-black text-white'  // Added bg-green-100 class
              placeholder='Create Password' 
            />
            <div className='h-10 w-full'></div> 
            <button className='h-20 w-90 bg-black text-neutral-50'>Signup</button>
            <div className='h-10 w-90 font-thin text-1xl'>Already have an account? <a href="/login" className="text-blue-500">Login</a></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;




