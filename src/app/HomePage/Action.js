'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';



const Action = () => {
 

    const [ctaRef, ctaInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
      });
  

  return (
       <div 
       ref={ctaRef}
       id="contact" 
       className={`py-20 bg-primaryBg transition-all duration-1000 transform ${
         ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
       }`}
     >
       <div className="container mx-auto px-6 text-center">
         <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
         <p className="text-primaryText mb-8">
           Contact us today to turn your ideas into reality.
         </p>
         <button className="bg-secondaryBg hover:bg-accentHover text-black font-semibold py-3 px-6 rounded-2xl transition-colors duration-300">
           Contact Us
         </button>
       </div>
     </div>
 
  );
};

export default Action;