// Carsauel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import jeep from './images/gwagon.jpg';
import maruti from './images/r8.jpeg'

 import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import axios from 'axios';
const Carsauel = () => {
const naviagte=useNavigate();
function navigate(){
  naviagte('/login');
}

const [car,updatecar]=useState("");
function run(val){
  updatecar(val);
}

  const updateservice=async()=>{
    
    try { 
      
      const result = await axios.post('https://kkshowroom.onrender.com/service', {
        
          Service: "Booked test drive",
          CarModel: car,
      
      
        
      });
      if(result.data==="login"){ 
        alert("login");
        navigate()
        
      }
      else
      alert("done")
      // Do something with the result if needed
    }
  
  catch(error){
     console.log(error)
  }

}

function change(val){
  run(val);
  updateservice();
}
  return (
 
      <Carousel className='h-90 w-90 flex '>
      
     
         
      <Carousel.Item interval={1000} className='h-full w-full flex-col'>
      <div className="h-full w-full flex flex-col items-center" style={{ backgroundImage: `url("https://www.autovista.in/assets/img/new_cars_colour_variants/new-wagonR-colour-superior-white.jpg")`, backgroundRepeat: 'no-repeat',  backgroundSize:'cover'}}>
      <div className='h-80 w-full flex flex-col  '>
<div className='h-80 w-full '></div>
<div className='h-20 w-full  flex '>
  <div className='h-full w-30  flex items-center justify-center'>

   <button onClick={() => change('wagnor')} className='h-50 w-40 bg-red-600 hover:bg-neutral-100 font-bold '>Book testdrive </button>
  </div>
</div>
      </div>
      <div className='h-20 w-90'><Carousel.Caption>
            <h3>make a test drive using our portel</h3>
            <p></p>
          </Carousel.Caption></div>
      
      </div></Carousel.Item>
      <Carousel.Item interval={1000} className='h-full w-full flex-col'>
      <div className="h-full w-full flex flex-col items-center" style={{ backgroundImage: `url("https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/150603/i20-exterior-right-front-three-quarter-12.jpeg?isig=0&q=80)`, backgroundRepeat: 'no-repeat',  backgroundSize:'cover'}}>
      <div className='h-80 w-full flex flex-col  '>
<div className='h-80 w-full '></div>
<div className='h-20 w-full  flex '>
  <div className='h-full w-30  flex items-center justify-center'>
   <button  onClick={()=>change('i20')} className='h-50 w-40 bg-red-600 font-bold hover:bg-neutral-100 '>Book testdrive </button>
  </div>
</div>
      </div>
      <div className='h-20 w-90'><Carousel.Caption>
            <h3>make a test drive using our portel</h3>
            <p></p>
          </Carousel.Caption></div>
      
      </div></Carousel.Item>
      <Carousel.Item interval={1000} className='h-full w-full flex-col'>
      <div className="h-full w-full flex flex-col items-center" style={{ backgroundImage: `url('https://imgd.aeplcdn.com/370x208/n/cbfdmua_1553527.jpg?q=80')`, backgroundRepeat: 'no-repeat',  backgroundSize:'cover'}}>
      <div className='h-80 w-full flex flex-col  '>
<div className='h-80 w-full '></div>
<div className='h-20 w-full  flex '>
  <div className='h-full w-30  flex items-center justify-center'>
   <button  onClick={()=>change('creta')} className='h-50 w-40 bg-red-600 hover:bg-neutral-100 font-bold '>Book testdrive </button>
  </div>
</div>
      </div>
      <div className='h-20 w-90'><Carousel.Caption>
            <h3>make a test drive using our portel</h3>
            <p></p>
          </Carousel.Caption></div>
      
      </div></Carousel.Item>
      <Carousel.Item interval={1000} className='h-full w-full flex-col'>
      <div className="h-full w-full flex flex-col items-center" style={{ backgroundImage: `url('https://imgd.aeplcdn.com/370x208/n/cw/ec/26859/grand-i10-exterior-right-front-three-quarter.jpeg?q=80')`, backgroundRepeat: 'no-repeat',  backgroundSize:'cover'}}>
      <div className='h-80 w-full flex flex-col  '>
<div className='h-80 w-full '></div>
<div className='h-20 w-full  flex '>
  <div className='h-full w-30  flex items-center justify-center'>
   <button  onClick={()=>change('i10')} className='h-50 w-40 bg-red-600 hover:bg-neutral-100 font-bold '>Book testdrive </button>
  </div>
</div>
      </div>
      <div className='h-20 w-90'><Carousel.Caption>
            <h3>make a test drive using our portel</h3>
            <p></p>
          </Carousel.Caption></div>
      
      </div></Carousel.Item>
          

      </Carousel>
 
  );
}

export default Carsauel;

