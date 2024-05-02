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
      
      const result = await axios.post('http://localhost:4000/service', {
        
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
 
      <Carousel className='h-90 w-80 flex '>
      
     
         
      <Carousel.Item interval={1000} className='h-full w-full flex-col'>
      <div className="h-full w-full flex flex-col items-center bg-cover" style={{ backgroundImage: `url("https://www.autovista.in/assets/img/new_cars_colour_variants/new-wagonR-colour-silky-silver.jpg")`, backgroundRepeat: 'no-repeat',  backgroundSize:'cover'}}>
      <div className='h-80 w-full flex flex-col  '>
<div className='h-80 w-full '></div>
<div className='h-20 w-full  flex '>
  <div className='h-full w-30  flex items-center justify-center'>

   <button onClick={() => change('wagnor')} className='h-50 w-50 border-4 rounded-2xl bg-red-600 hover:bg-neutral-100 font-bold '>Book testdrive </button>
  </div>
</div>
      </div>
      <div className='h-20 w-90'><Carousel.Caption>
            <h3>make a test drive using our portel</h3>
            <p></p>
          </Carousel.Caption></div>
      
      </div></Carousel.Item>
      <Carousel.Item interval={1000} className='h-full w-full flex-col'>
      <div className="h-full w-full flex flex-col items-center bg-cover" style={{ backgroundImage: `url("https://www.motorbeam.com/wp-content/uploads/Hyundai-Elite-i20-1200x675.jpg")`, backgroundRepeat: 'no-repeat'}}>
      <div className='h-80 w-full flex flex-col  '>
<div className='h-80 w-full '></div>
<div className='h-20 w-full  flex '>
  <div className='h-full w-30  flex items-center justify-center'>
   <button  onClick={()=>change('i20')} className='h-50 w-50 bg-red-600 border-4 rounded-2xl font-bold hover:bg-neutral-100 '>Book testdrive </button>
  </div>
</div>
      </div>
      <div className='h-20 w-90'><Carousel.Caption>
            <h3>make a test drive using our portel</h3>
            <p></p>
          </Carousel.Caption></div>
      
      </div></Carousel.Item>
      <Carousel.Item interval={1000} className='h-full w-full flex-col'>
      <div className="h-full w-full flex flex-col items-center bg-cover" style={{ backgroundImage: `url('https://imgd.aeplcdn.com/642x361/cw/ec/28549/Hyundai-Creta-Exterior-94148.jpg?wm=0&q=80')`, backgroundRepeat: 'no-repeat'}}>
      <div className='h-80 w-full flex flex-col  '>
<div className='h-80 w-full '></div>
<div className='h-20 w-full  flex '>
  <div className='h-full w-30  flex items-center justify-center'>
   <button  onClick={()=>change('creta')} className='h-50 w-50 bg-red-600 border-4 rounded-2xl hover:bg-neutral-100 font-bold '>Book testdrive </button>
  </div>
</div>
      </div>
      <div className='h-20 w-90'><Carousel.Caption>
            <h3>make a test drive using our portel</h3>
            <p></p>
          </Carousel.Caption></div>
      
      </div></Carousel.Item>
      <Carousel.Item interval={1000} className='h-full w-full flex-col'>
      <div className="h-full w-full flex flex-col items-center bg-cover" style={{ backgroundImage: `url('https://stat.overdrive.in/wp-content/odgallery/2019/08/53381_2019_Hyundai_grand_i10_nios_14.jpg')`, backgroundRepeat: 'no-repeat'}}>
      <div className='h-80 w-full flex flex-col  '>
<div className='h-80 w-full '></div>
<div className='h-20 w-full  flex '>
  <div className='h-full w-30  flex items-center justify-center'>
   <button  onClick={()=>change('i10')} className='h-50 w-50 bg-red-600 border-4 rounded-2xl hover:bg-neutral-100 font-bold '>Book testdrive </button>
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

