import Image from 'next/image'
import React from 'react'

function Training2() {
  return (
    <>
     <div className="bg-gradient-to-r from-[#0a0f2c] to-[#0c1b3a] rounded-2xl">
      
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        
        {/* LEFT BIG CARD */}
        <div className="relative lg:col-span-2 rounded-2xl overflow-hidden">
          
          <Image
            src="/c1.avif" // apni image daalo
            alt="internship"
            width={200}
            height={30}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute top-25 left-16 right-6 text-white">
            <h2 className="text-5xl md:text-3xl font-bold italic mb-3">
              CURRICULUM
            </h2>

            <p className="text-2xl leading-relaxed font-bold">
             
             Hydraulic technician certificate course
            </p>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
         <div className="bg-blue-950 backdrop-blur-md p-5 flex flex-col rounded-2xl">
          
          <ul className="space-y-20">
            
            {[
              "One year full time course",
                "Eligibility : 10 + 2 / ITI",
                "Approved by IISSCCC(NCVET/NSQF)",
                "Recognized By PARKAR HANNIFIN INDIA PVT. LTD",
                "A multinational company Pioneer in the field of Hydraulics"

            ].map((item, index) => (
              
              <li key={index} className="flex items-start gap-3 group mt-7">
                
                {/* Bullet */}
                <div className="min-w-[10px] h-[10px] mt-2 rounded-full bg-blue-100 group-hover:scale-125 transition"></div>

                {/* Text */}
                <p className="text-white text-xl font-bold group-hover:text-blue-300 transition">
                  {item}
                </p>

              </li>
            ))}

          </ul>

        </div>
      </div>
    </div>
    </>
  )
}

export default Training2