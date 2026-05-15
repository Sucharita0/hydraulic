import Image from 'next/image'
import React from 'react'

function Training() {
  return (
    <>
     <section className="bg-yellow-50 text-blue-600 py-16 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-2">

        {/* LEFT SIDE */}
        <div className='mt-4'>
          <h2 className="text-4xl font-bold mb-6">
            CORPORATE TRAININGS
          </h2>
          
          <p className=' font-bold text-md mb-3 text-justify'>Enhance team's expertise with professionals
            hands-on training programs in Industrial Hydraulics
            </p>
           
              <ul className="space-y-3">
  <li className="flex items-start gap-3 font-bold">
    <span className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></span>
    <p>Basic Industrial Hydraulics - 03 Days</p>
  </li>

  <li className="flex items-start gap-3 font-bold">
    <span className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></span>
    <p>Advanced Industrial Hydraulics - 05 Days</p>
  </li>

  <li className="flex items-start gap-3 font-bold">
    <span className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></span>
    <p>Hydraulics Fluids - 02 Days</p>
  </li>

  <li className="flex items-start gap-3 font-bold">
    <span className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></span>
    <p>Troubleshooting Hydraulics - 03 Days</p>
  </li>
</ul>
                      </div>
           {/* RIGHT SIDE GRID */}
        <div className="grid grid-cols-2 border-8 border-e-blue-600">

          {/* CARD 1 */}
          <div className=" group overflow-hidden">
            <Image
              src="/i1.jpg"
              alt="Startup"
              width={900}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 transition"
            />
            
          </div>

          {/* CARD 2 */}
          <div className=" group overflow-hidden">
            <Image
              src="/i2.avif"
              alt="Manufacturing"
              width={900}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 transition"
            />
            
          </div>

          {/* CARD 3 */}
          <div className=" group overflow-hidden">
            <Image
              src="/ar1.avif"
              alt="Schools"
              width={900}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 transition"
            />
            
          </div>

          {/* CARD 4 */}
          <div className=" group overflow-hidden">
            <Image
              src="/is1.jpg"
              alt="Oil & Gas"
              width={900}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 transition"
            />
            
          </div>

        </div>
      </div>
    </section>

    </>
  )
}

export default Training