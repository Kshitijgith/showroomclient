import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/showservice');
        setUserData(response.data); // Set userData to the fetched array of data
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-70 w-full bg-slate-300 z-1  '>
    
      <h2 className='text-2xl'>Profile</h2>
      {userData.map((user, index) => (
        <div key={index} className='h-full w-full bg-white  text-black overflow-y-auto text-2xl '  >
          <h3>Email: {user.email}</h3>

          {user.Services && user.Services.length > 0 ? (
            <ul>
              {user.Services.map((Service, serviceIndex) => (
                
                <li key={serviceIndex}>
                
                  <p>Service: {Service.Service}</p>
                  <p>Car Model: {Service.CarModel}</p>
                {Service. CarNo !==" "&&
                  <p>CarNO: {Service.CarNo}</p>
                }
                  {/* You can include other attributes here */}
                
                  
                </li>
                
              ))}
              
            </ul>
          ) : (
            <>No services available</>
          )}
          
        </div>
      ))}
     
    </div>
  );
};

export default Profile;
