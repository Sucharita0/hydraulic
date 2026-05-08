'use client';

import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from 'react';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
const images = [
  
  '/r2.jpg',
  '/r3.jpg',
  '/r4.jpg',
  '/r5.jpg',
  '/r6.jpg'
];
function ImageSlide() {
     const [current, setCurrent] = useState(0);

     useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
      const nextSlide = () => {
    setCurrent((prev) =>
      (prev + 1) % images.length
    );
  
  };

 
  return (
    <>
         <div className="relative w-full h-[500px] overflow-hidden">
      
      {/* Images */}
     <div
        className="flex h-full transition-transform duration-500"
        style={{

          transform: `translateX(-${current * 100}%)`,
         
        }}
      >
        {images.map((img, index) => (
          <div key={index} className="relative min-w-full h-full">
            <Image
              
          src={img}
              alt="slider"
              fill
      
              priority
              className="object-cover transition-all duration-500"
            />
          </div>
        ))}
      </div>

       

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <CiCircleChevLeft size={30}/>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        < CiCircleChevRight size={30}/>
      </button>
    </div>

    <div className="absolute left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 mt-7 rounded-full cursor-pointer transition-all ${
              current === index
                ? 'bg-black scale-110'
                : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </>

    
  )
}

export default ImageSlide