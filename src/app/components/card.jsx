'use client'
import { GiCash } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";

import React from 'react'
const features = [
  {
    icon: <GiCash size={40} />,
    title: "Easy Education Loan",
    
  },
  {
    icon: <FaGlobe size={40} />,
    title: "Acommodation Available",
    
  },
  {
    icon: <FaBookOpen size={40} />,
    title: "Learn & Earn",
    
  },
  {
    icon: <FaIndustry size={40} />,
    title: "Industrial Visits",
    
  },
  {
    icon: <FaUserTie size={40} />,
    title: "Placement Support",
    
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Customer Commitment",
    
  },
];

function Card() {
  return (
    <>
     <div className="bg-sky-200 py-9 px-3 md:px-6">
      
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-gray-700 text-3xl md:text-4xl font-bold mb-4">
          Our Key Features
        </h2>
        </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-sky-500 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300 hover:bg-blue-900"
          >
            
            {/* ICON */}
            <div className="flex justify-center mb-4 text-white">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-white text-xl font-semibold mb-3">
              {item.title}
            </h3>

           

          </div>
        ))}

      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-gray-600 text-white px-8 py-3 rounded-full text-lg hover:bg-gray-300 transition">
          Enroll Yourself Now
        </button>
      </div>


    </div>
    </>
  )
}

export default Card