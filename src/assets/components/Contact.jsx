import React from 'react';
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa"; // Changed to FaWhatsapp from FaWhatsappSquare
import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="h-full w-full flex justify-around items-center bg-red-500">
            <button className="h-50 w-10 items-center justify-center flex text-black border-2 border-red-500 rounded-lg hover:bg-white hover:text-black">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" ><GrInstagram size={50} /></a>
            </button>

            <button className="h-50 w-10 items-center justify-center flex border-2 border-red-500 rounded-lg text-black hover:bg-white hover:text-black">
                <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer"><CgMail size={50} /></a>
            </button>

            <button className="h-50 w-10 items-center justify-center flex border-2 border-red-500 rounded-lg text-black hover:bg-white hover:text-black">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={50} /></a>
            </button>

            <button className="h-50 w-10 items-center justify-center flex border-2 border-red-500 rounded-lg text-black hover:bg-white hover:text-black">
                <a href="tel:1234567890"><IoCallOutline size={50} /></a>
            </button>
        </div>
    );
}

export default Contact;

