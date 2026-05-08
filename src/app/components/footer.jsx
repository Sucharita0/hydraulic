'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { CiCircleChevUp } from "react-icons/ci";

function Footer() {
      const [showTop, setShowTop] = useState(false);
        useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
    <footer className="bg-[#061B3A] text-white px-3 md:px-16 py-12">
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* LOGO + DESCRIPTION */}
        <div className="">
          <div className="bg-white inline-block rounded-md p-2 mb-4">
            <Image
              src="/r1.jpeg"
              alt="logo"
              width={180}
              height={60}
            />
          </div>

          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Rerum recusandae saepe sed. Voluptas inventore laudantium 
            fugit beataasi, consum provident dignissimos! Nostrum.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className='mt-11'>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className='mt-11'>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Parker Distributor</li>
            <li>Reconditioning Hydraulic</li>
            <li>Hydraulic System</li>
            <li>Enggname</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className='mt-11'>
          <h3 className="font-semibold text-lg mb-4">Explore Our Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li>product</li>
            <li>product2</li>
            <li>product3</li>
            <li className="pt-2 font-medium text-white">
              Explore Other Products
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className='mt-11'>
          <h3 className="font-semibold text-lg mb-4">Contact us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Phone: +971 4 244 3933</li>
            <li>Email: info@abhiifd.net</li>
            <li>
              Head Office: Lorem ipsum, dolor corrupti, elit illum voluptatibus.
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400">
         Copyright © 2026 | Resilient Institute Of Hydraulics | All rights reserved
      </div>

    

      {/* Footer Text */}
     

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md shadow-lg transition"
        >
          <CiCircleChevUp size={20} />
        </button>
      )}
    </footer>
    </>
  )
}

export default Footer 