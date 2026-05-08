'use client';
import React from 'react'

function Map() {
  return (
    <>
     <div className="w-full py-16 px-4 bg-gray-100">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT - CONTACT FORM */}
        <div className="relative rounded-3xl overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0">
           
            <div className="absolute inset-0 bg-blue-900/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 text-white">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              Get In Touch!
            </h2>

            <p className="mb-8 text-gray-200">
              For new projects, dry-dock support, or port calls, contact us for
              tailored services and reliable vessel solutions support every time.
            </p>

            {/* Form */}
            <div className="space-y-5">
              
              <input
                type="text"
                placeholder="Name..."
                className="w-full p-4 rounded-xl bg-transparent border border-white/40 placeholder-gray-300 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email..."
                className="w-full p-4 rounded-xl bg-transparent border border-white/40 placeholder-gray-300 focus:outline-none"
              />

              <textarea
                placeholder="Message..."
                rows="4"
                className="w-full p-4 rounded-xl bg-transparent border border-white/40 placeholder-gray-300 focus:outline-none"
              ></textarea>

              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold">
                Contact Our Team
              </button>

            </div>
          </div>
        </div>

        {/* RIGHT - LOCATION */}
        <div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 mt-4">
            Our Location!
          </h2>

          <p className="text-gray-600 mb-6">
            We respond quickly, work transparently, and focus on long-term partnerships across the maritime value chain.
          </p>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Dubai&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Map