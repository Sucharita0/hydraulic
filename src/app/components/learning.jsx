import Image from 'next/image'
import React from 'react'


function Learning() {
      const data = {
    title: "Learn And Earn Scheme",
    desc: [
      "Four Module Training",
      "Eligible for Learn & Earn Scheme from third module",
      "50% Fee Reimbursement",
      "Subject to qualifying a test, he gets a reimbursement of 50% of the course fee for that module in lieu of working for 4 hours a day",
      "Hands-on Experiences",
      "Hands-on working experience, real life working conditions"
    ]
  }
  return (
    <>
     <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 md:px-12 border border-green-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center
         gap-0 ">
        
        {/* LEFT IMAGE */}
        <div className="w-full h-[275px] sm:h-[375px] md:h-[475px] p-6 gap-4 sm:gap-0 relative">
          <Image
            src="/ro1.avif" // apna image yaha daalo
            alt="analytics"
           fill
            className=" object-cover"
          />

          {/* small number badge */}
          
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-white p-5 sm:p-6 md:p-8">
          
          {/* top small heading */}
         

          

          <h2 className="text-xl sm:2xl font-extrabold text-green-700 text-center">
            {data.title}
          </h2>

          {/* ✅ UL LIST */}
          <ul className="mt-6 space-y-4">
            {data.desc.map((item, index) => (
              <li key={index} className="flex justify-start p-2 gap-3 text-green-600 font-bold mb-2">
                
                {/* Custom Bullet */}
                <span className="text-green-600 text-lg">✿</span>

                {/* Text */}
                <p className=" text-sm sm:text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default Learning