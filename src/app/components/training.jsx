'use client';
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect, useState } from 'react'

const  slides = [
  {
    title: " CURRICULUM",
    desc: [
      "Hydraulic technician certificate course",
      "One year full time course",
      "Eligibility : 10 + 2 / ITI",
      "Approved by IISSCCC(NCVET/NSQF)",
      "Recognized By PARKAR HANNIFIN INDIA PVT. LTD",
      "A multinational company Pioneer in the field of Hydraulics"
    ],
    img: "/r5.jpg",
  },
  {
    title: "CORPORATE TRAININGS",
    desc:  [
            "Enhance your team's expertise with professionals",
            "Hands-on training programs in Industrial Hydraulics",
            "Basic Industrial Hydraulics - 03 Days",
            "Advanced Industrial Hydraulics -  05 Days",
            "Hydraulics Fluids - 02 Days",
            "Troubleshooting Hydraulics - 03 Days"
    ],
    img: "/r3.jpg",
  },
  {
    title: "Learn And Earn Scheme",
    desc: [
            "Four Module Training",
            "Eligible for Learn & Earn Scheme from third module",
            "50% Fee Reimbursement",
            "Subject to qulifing a test, he gets a reimbursement of 50% of the course fee for that module in lieu of working for4 hours a day",
            "Hands-on Experiences",
            "Hands-on working experience, real life working conditions"
    ],
    img: "/r4.jpg",
  },
  
];








function Training() {
   const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <div className="w-full bg-gray-300 py-10 overflow-hidden">

      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
          Training Section
        </h2>
        </div>
      
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className="min-w-full px-4 md:px-12"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center bg-white rounded-2xl shadow-lg p-8">
              
              {/* IMAGE */}
              <div className="w-full md:w-1/2 p-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h2>

                 <ul className="mb-5 space-y-2">
                  {item.desc.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <FaCheckCircle className="text-green-500 mt-1 text-md" />
                      {point}
                    </li>
                  ))}
                </ul>
                
                 </div>
          </div>
          </div>
        ))}
      </div>
      </div>
      
    </>
  )
}

export default Training





  
   
  
        



    
    
  


