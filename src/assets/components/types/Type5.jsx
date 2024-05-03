import React from 'react'
import Demo from './demo'
import axios from 'axios'; 
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const Type5 = () => {
  const navigate=useNavigate();
  function Navigate(){
    navigate('/login')
  }
      const [cars, setCars] = useState([]);
    const[Car,Setcar]=useState("");
    
    const change=(car)=>{
      Setcar(car)
  
    }
    
    const updateservice=async()=>{
      
      
        try { 
          
          const result = await axios.post('https://kkshowroom.onrender.com/service', {
            Service:"test drive",
            CarModel:Car,
          
            
          });
          if(result.data==="login"){ 
            alert("login");
            Navigate()
            
          }
          else
          alert("done")
          // Do something with the result if needed
        }
      
      catch(error){
         console.log("some error occured")
      }
    }
    
    const run=(val)=>{
      updateservice();
      change(val);
    }
    
      useEffect(() => {
        // Function to fetch cars data
        const fetchCars = async () => {
          try {
            
            const response = await axios.post('https://kkshowroom.onrender.com/usedcars'); // Replace '/cars' with your actual endpoint
            setCars(response.data); // Update state with the fetched cars data
          
            
          } catch (error) {
            console.error('Error fetching cars data:', error);
          }
        };
    
        // Call the fetchCars function when the component mounts
        fetchCars();
        
      }, []);
    return (<>
      <div className='h-full w-full flex row   justify-around overflow-y-auto  '>
        
        {cars.map((car) => (
          <div key={car._id} className='h-full w-30   flex flex-col '>
            <div className='h-90 w-full bg-white  flex flex-col items-center justify-center bg  border-2 border-black rounded-3xl ' style={{ backgroundImage: `url(${car.photo})`, backgroundRepeat: 'no-repeat',  backgroundSize:'cover'}}>
            {/* <img src={car.photoUrl} alt={car.carname} className='w-full h-60' /> */}
            <div className='h-70 w-full'></div>
              <h1 className='text-white text-4xl hover:text-6xl font-bold '>{car.carname}</h1>
             
              <p className='text-white hover:text-xl font-bold'>Model: {car.carmodel}</p>
              <p className='text-white hover:text-xl font-bold'>Price: ${car.price}</p>
              <p className='text-white hover:text-xl font-bold'>runningkilometres:{car.runningkilometres}</p>
              <p className='text-white hover:text-xl font-bold'>Date:{car.purchasedate}</p>
            </div>
            <div className='h-10 w-full'></div>
            <button onClick={() => run(car.carname)} className='h-10 w-full bg-neutral-300 text-black text-4xl hover:bg-white border-2 border-black rounded-3xl'>Book Test Drive</button>
          <div className='h-10 w-full'></div>
          </div>
        ))}
        
        
        {/* <div className='h-90 w-30 bg-black border-8 border-black  rounded-3xl'></div>
        <div className='h-90 w-30 bg-black border-8 border-black  rounded-3xl'></div> */}
      </div>
              </>
    )
  }

  


export default Type5
