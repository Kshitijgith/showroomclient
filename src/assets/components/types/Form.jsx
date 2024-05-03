import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [carName, setCarName] = useState('');
  const [runningKilometers, setRunningKilometers] = useState('');
  const [price, setPrice] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [image, setImage] = useState('');

  const convertImageToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
      console.log(reader.result);
    };
    reader.onerror = (error) => {
      console.log('error', error);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedDate = new Date(purchaseDate).toISOString().split('T')[0];
      const result = await axios.post('https://kkshowroom.onrender.com/sellcar', {
        carname: carName,
        runningkilometres: runningKilometers,
        price: price,
        purchasedate:formattedDate,
        photo: image,
      });

      if (result.data === 'Login') {
        alert('Login to Continue');
        navigate('/Login');
      } else if (result.data === 'Used car created successfully') {
        alert('Done');
      }
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <form className="w-full h-80 p-8 rounded-lg flex flex-col items-center" onSubmit={handleSubmit}>
      {/* Car Name input */}
      <input
        className="h-20 w-90 bg-gray-800 text-white px-4 py-2 rounded-lg mb-4"
        type="text"
        placeholder="Car Name"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
      />
      {/* Running Kilometers input */}
      <input
        className="h-20 w-90 bg-gray-800 text-white px-4 py-2 rounded-lg mb-4"
        type="text"
        placeholder="Running Kilometers"
        value={runningKilometers}
        onChange={(e) => setRunningKilometers(e.target.value)}
      />
      {/* Price input */}
      <input
        className="h-20 w-90 bg-gray-800 text-white px-4 py-2 rounded-lg mb-4"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {/* Purchase Date input */}
      <input
        className="h-20 w-90 bg-gray-800 text-white px-4 py-2 rounded-lg mb-4"
        type="date"
        placeholder="Enter Purchase date"
        value={purchaseDate}
        onChange={(e) => setPurchaseDate(e.target.value)}
      />
      {/* File input for uploading photo */}
      <input
        className="h-20 w-90 bg-white"
        placeholder="Upload Photo"
        type="file"
        name="photo"
        onChange={convertImageToBase64}
      />
      {/* Submit button */}
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



