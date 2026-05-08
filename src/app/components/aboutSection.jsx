import React from 'react'

function AboutSection() {
  return (
    <>
     <div className="w-full mt-5 py-12 px-4 md:px-10">

      
      

      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-5">

        
        <div className='text-center'>
          <h2 className="text-2xl md:text-[45px] font-bold text-blue-950 mb-10 text-center">
            Build Your Career in Hydraulic Technology
          </h2>

          <div className=''>
            <p className="text-gray-700 mb-4 text-justify ">
            Resilient Institute of Hydraulics is a training and technical development centre, dedicated to imparting knowledge and practical expertise in hydraulic systems and technologies.
          </p>

          <p className="text-gray-700 mb-4 text-justify">
            The institute focuses on delivering industry-oriented education, hands-on training, and skill development programs tailored to the needs of modern industrial sectors such as mining, steel, manufacturing and heavy engineering.
          </p>

          <p className="text-gray-700 text-justify">
            With a commitment to excellence and innovation, we combine strong theoretical foundations with practical, real-world applications to prepare students, technicians, and engineers for successful careers in hydraulics and fluid power systems.
          </p>
          </div>
        </div>

        
        
          <div className="relative w-full h-[160px] sm:h-[250px] md:h-[445px] rounded-2xl ">
            
            <video
              className="w-full h-full object-cover rounded-md"
              controls
            >
              <source src="/v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>

      </div>
    
    </>
  )
}

export default AboutSection