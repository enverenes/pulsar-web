'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { FaCode } from "react-icons/fa";


const Services = () => {
 

  // Services Section Animation
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  

  return (
   
      <div 
        ref={servicesRef}
        id="services" 
        className={`py-20 bg-secondaryBg transition-all duration-1000 transform ${
          servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-secondaryText">Our Services</h2>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {/* Service 1 */}
            <div className="md:w-1/3 px-3 mb-6">
              <div className="bg-primaryBg rounded-lg p-8 transition-transform duration-300 hover:scale-105">
                <div className="text-white w-16 h-16 mb-4 flex items-center justify-center">
                  <CgWebsite size={64} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Website Development</h3>
                <p className="text-primaryText">
                  We build responsive and modern websites that help your business stand out.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="md:w-1/3 px-3 mb-6">
              <div className="bg-primaryBg rounded-lg p-8 transition-transform duration-300 hover:scale-105">
                <div className="text-white w-16 h-16 mb-4 flex items-center justify-center">
                  <CiMobile1 size={64} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
                <p className="text-primaryText">
                  Creating user-friendly mobile applications for both Android and iOS platforms.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="md:w-1/3 px-3 mb-6">
              <div className="bg-primaryBg rounded-lg p-8 transition-transform duration-300 hover:scale-105">
                <div className="text-white w-16 h-16 mb-4 flex items-center justify-center">
                  <FaCode size={64} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Software Solutions</h3>
                <p className="text-primaryText">
                  Custom software development tailored to your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    

    
   
  );
};

export default Services;