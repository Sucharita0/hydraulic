'use client';
import React, { useRef } from 'react'


import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import Image from 'next/image';


const services = [
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
   const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
   
    <>
    <div className="relative w-full py-16 px-6 text-white">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-blue-950">
       
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        

        <h1 className="text-2xl md:text-4xl font-bold max-w-4xl mx-auto">
          Industry-focused training with Learn & Earn model
        </h1>
      </div>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto">

        {/* Left */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-4xl"
        >
          < CiSquareChevLeft/>
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 scroll-smooth"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-blue-950 text-white rounded-xl shadow-lg p-5 flex flex-col gap-4 w-full"
            >
              {/* Small Image */}
              <div className="w-full h-32 relative rounded-lg overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <h2 className="text-lg font-bold text-center">{item.title}</h2>
              <ul className="text-sm text-white text-center space-y-1 font-semibold">
                {item.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              
            </div>
          ))}
        </div>

        {/* Right */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-4xl"
        >
          <CiSquareChevRight />
        </button>

      </div>
    </div>
    </>
        



    
    
  )
}

export default Training