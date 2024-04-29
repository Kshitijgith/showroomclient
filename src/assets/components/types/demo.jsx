import React from 'react'
import axios from 'axios'; 
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


  const Demo = (Type) => {
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
          
          const response = await axios.post('https://kkshowroom.onrender.com/cars',{Type}); // Replace '/cars' with your actual endpoint
          setCars(response.data); // Update state with the fetched cars data
        
          
        } catch (error) {
          console.error('Error fetching cars data:', error);
        }
      };
  
      // Call the fetchCars function when the component mounts
      fetchCars();
    }, []);
  return (<>
    <div className='h-full w-full flex row   justify-around  '>
      
      {cars.map((car) => (
        <div key={car._id} className='h-full w-30 bg-black   flex flex-col '>
          <div className='h-90 w-full bg-white  flex flex-col items-center justify-center bg  border-2 border-black rounded-3xl ' style={{ backgroundImage: `url(${car.photoUrl})`, backgroundRepeat: 'no-repeat',  backgroundSize:'fit'}}>
          {/* <img src={car.photoUrl} alt={car.carname} className='w-full h-60' /> */}
          <div className='h-70 w-full'></div>
            <h1 className='text-black text-4xl h-10 w-full text-center  '>{car.carname}</h1>
           
            <p>Model: {car.carmodel}</p>
            <p>Price: ${car.price}</p>
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

export default Demo
