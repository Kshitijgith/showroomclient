import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [carName, setCarName] = useState('');
  const [runningKilometers, setRunningKilometers] = useState('');
  const [price, setPrice] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [image, setImage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('carname', carName);
      formData.append('runningkilometres', runningKilometers);
      formData.append('price', price);
      formData.append('Date', purchaseDate);
      formData.append('photo', image);

      const result = await axios.post('http://localhost:4000/sellcar', formData);

      if (result.data === "Login") {
        alert("Login to Continue");
        navigate('/Login');
      } else if (result.data === "Used car created successfully") {
        alert("Done");
        
      }
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <form className="w-full h-80 p-8 rounded-lg flex flex-col items-center" onSubmit={handleSubmit}>
      <input
        className="h-20 w-90 bg-gray-800 text-white px-4 py-2 rounded-lg mb-4"
        type="text"
        placeholder="Car Name"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
      />
      <input
        className="h-20 w-90 bg-gray-800 text-white px-4 py-2 rounded-lg mb-4"
        type="text"
        placeholder="Running Kilometers"
        value={runningKilometers}
        onChange={(e) => setRunningKilometers(e.target.value)}
      />
      <input
        className="h-20 w-90 bg-gray-800 text-white px-4 py-2 rounded-lg mb-4"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        className="h-20 w-90 bg-gray-800 text-white px-4 py-2 rounded-lg mb-4"
        type="date"
        placeholder="Enter Purchase date"
        value={purchaseDate}
        onChange={(e) => setPurchaseDate(e.target.value)}
      />
      <input className='h-30 w-90 bg-white' placeholder='upload photo'
        type="file" name="photo"
        onChange={(e) => setImage(e.target.files[0])} // Set the selected file to state
      />
      <div className='h-10 w-90'></div>
      <button
        className="bg-blue-500 hover:bg-blue-700 h-20 w-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

