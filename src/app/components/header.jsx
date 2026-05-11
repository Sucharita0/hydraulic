'use client';
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Header() {
     const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
<nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
<div className='max-w-7xl mx-auto px-4 py-6 flex items-center justify-between h-22 '>
   <div className='flex items-center gap-2 p-6'>
     <img src='/r1.jpeg' alt='logo' className='h-13 w-auto'
    />
   </div>

    {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-black">
          <li className="text-blue-600 cursor-pointer">Home</li>

          {/* Dropdown */}
          <li
            className="relative cursor-pointer group"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <div className="flex items-center gap-1 text-black hover:text-blue-400">
              Courses <FaChevronDown size={16} />
            </div>

            {dropdown && (
              <div className="absolute top-full left-0 hidden  group-hover:block shadow-lg text-black bg-white rounded-md p-2 w-44 z-50 border border-t-blue-500">
                <p className="p-2 hover:bg-gray-100">Course 1</p>
                <p className="p-2 hover:bg-gray-100">Course 2</p>
              </div>
            )}
          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            Accreditation And Affiliation
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Career And Placement
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            About Us
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Contact Us
          </li>
        </ul>

         {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-lg rounded-b-xl">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className='text-blue-600'>Home</li>

            <li>
              <div
                onClick={() => setDropdown(!dropdown)}
                className="flex justify-between items-center"
              >
                Courses <FaChevronDown size={16} />
              </div>

              {dropdown && (
                <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                  <p>Course 1</p>
                  <p>Course 2</p>
                </div>
              )}
            </li>

            <li>Accreditation And Affiliation</li>
            <li>Career And Placement</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        
      
    
   
</div>
      )}
</nav>
    </>
  )
}

export default Header