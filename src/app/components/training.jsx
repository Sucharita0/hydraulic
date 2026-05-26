import Image from 'next/image'
import React from 'react'

function Training() {
  return (
    <>
     <section className="bg-yellow-50 text-blue-600 py-26 px-6 md:px-16">
      <div className="grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className='mt-2'>
          <h2 className="text-4xl font-bold mb-8">
            CORPORATE TRAININGS
          </h2>
          
         <div className='mt-3 mb-3'>
           <h6 className=' font-bold text-xl mb-3 text-justify'>Enhance team's expertise with professionals
            hands-on 
            </h6>
            <h6 className=' font-bold text-xl mb-6 text-justify'>training programs in Industrial Hydraulics</h6>
           
              <ul className="space-y-4">
  <li className="flex items-start gap-3 font-bold text-md">
     <span className="text-blue-600 text-lg">✿</span>
    <p>Basic Industrial Hydraulics - 03 Days</p>
  </li>

  <li className="flex items-start gap-3 font-bold text-md">
   <span className="text-blue-600 text-lg">✿</span>
    <p>Advanced Industrial Hydraulics - 05 Days</p>
  </li>

  <li className="flex items-start gap-3 font-bold text-md">
    <span className="text-blue-600 text-lg">✿</span>
    <p>Hydraulics Fluids - 02 Days</p>
  </li>

  <li className="flex items-start gap-3 font-bold text-md">
   <span className="text-blue-600 text-lg">✿</span>
    <p>Troubleshooting Hydraulics - 03 Days</p>
  </li>
</ul>
         </div>
                      </div>
           {/* RIGHT SIDE GRID */}
        <div className="grid grid-cols-2 border-8 border-blue-600">

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