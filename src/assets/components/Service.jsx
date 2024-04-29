import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const Service = () => {
  const [type, setType] = useState("Fullservice");  
  const [carno, setCarno] = useState("");
  const[carmodel,setcarmodel]=useState();
  const [bookingDate, setBookingDate] = useState("");
  const [payment, setPayment] = useState("");
const navigate=useNavigate();
function Navigate(){
  navigate('/login')
}
  const handleTypeChange = (selectedType) => {
    setType(selectedType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      const result = await axios.post('http://localhost:4000/service', {
        Service: type,
        CarNo: carno,
        CarModel:carmodel,
        Bookingdate: bookingDate,
        PaymentOption: payment
      });
      if(result.data==="login"){ 
        alert("login")
        Navigate();
      }
      else
      alert("done")
      // Do something with the result if needed
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex h-85 w-60">
      {/* First Div */}
      <div className="flex flex-col w-3/5 h-full bg-white">
        {/* Service Buttons */}
        <button
          className={`h-25 w-full bg-black text-slate-50 text-center text-4xl border-4 border-white focus:outline-none`}
          onClick={() => handleTypeChange("Fullservice")}
        >
          <b>Full Service</b>
        </button>
        <button
          className={`h-25 w-full bg-black text-slate-50 text-center text-4xl border-4 border-white focus:outline-none`}
          onClick={() => handleTypeChange("Washing")}
        >
          <b>Washing</b>
        </button>
        <button
          className={`h-25 w-full bg-black text-slate-50 text-center text-4xl border-4 border-white focus:outline-none`}
          onClick={() => handleTypeChange("Oiling")}
        >
          <b>Oiling</b>
        </button>
        <button
          className={`h-25 w-full bg-black text-slate-50 text-center text-4xl border-4 border-white focus:outline-none`}
          onClick={() => handleTypeChange("Others")}
        >
          <b>Others</b>
        </button>
      </div>
      
      {/* Second Div */}
      <div className="flex items-center justify-center w-2/5 bg-black  border-4 border-white rounded-lg ">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <select
            className="block mb-4 px-4 py-2 rounded-lg border border-gray-400"
            onChange={(e) => setcarmodel(e.target.value)}
            value={carmodel}
          >
            <option>Select Car Company</option>
            <option>Mahindra</option>
            <option>Toyota</option>
            <option>Maruti Suzuki</option>
            <option>Tata</option>
          </select>
          <input
            className="block mb-4 px-4 py-2 rounded-lg border border-gray-400"
            type="text"
            placeholder="Registration Number"
            onChange={(e) => setCarno(e.target.value)}
            value={carno}
          />
          <input
            className="block mb-4 px-4 py-2 rounded-lg border border-gray-400"
            type="date"
            onChange={(e) => setBookingDate(e.target.value)}
            value={bookingDate}
          />
          <select
            className="block mb-4 px-4 py-2 rounded-lg border border-gray-400"
            onChange={(e) => setPayment(e.target.value)}
            value={payment}
          >
            <option>DebitCard/Creditcard</option>
            <option>UPI/phonepay </option>
            <option>Razorpay</option>
            <option>Cash</option>
          </select>
          <button
            type="submit"
            className="block px-4 py-2 rounded-lg bg-gray-800 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Service;

