'use client';
import React, { useState } from 'react'
const faqs = [
  {
    question: "What is hydraulic training?",
    answer: "Hydraulic training teaches how fluid power systems work in industrial machines."
  },
  {
    question: "Do you provide certification?",
    answer: "Yes, we provide industry-recognized certification after course completion."
  },
  {
    question: "Is it beginner friendly?",
    answer: "Yes, the course is designed for beginners as well as professionals."
  },
  {
    question: "Do you offer placement support?",
    answer: "Yes, we assist students with placement opportunities after training."
  }
];

function Faq() {
     const [openIndex, setOpenIndex] = useState(1);
      const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
         <div className="w-full bg-gray-100 py-16 px-4">
      
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
        OUR <span className="text-blue-500">FAQS</span>
      </h1>

      {/* FAQ Container */}
      <div className="max-w-4xl mx-auto space-y-5">

        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-xl p-5 shadow-sm"
          >

            {/* Question */}
            <div
              onClick={() => toggle(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h2 className="font-semibold text-lg">
                {item.question}
              </h2>

              <span className="text-2xl font-bold">
                {openIndex === index ? '-' : '+'}
              </span>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-4 text-gray-700 font-medium">
                {item.answer}
              </p>
            )}

          </div>
        ))}

      </div>
    </div>
    </>
  )
}

export default Faq