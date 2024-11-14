'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { FaCode } from "react-icons/fa";

const Services = () => {
  const [selectedService, setSelectedService] = useState(1); // Default to service 1
  const [displayedService, setDisplayedService] = useState(1);
  const [animationState, setAnimationState] = useState('idle'); // 'idle', 'fadingOut', 'fadingIn'

  // Services Section Animation
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Handle content change with animations
  useEffect(() => {
    if (selectedService !== displayedService && animationState === 'idle') {
      setAnimationState('fadingOut');
    }
  }, [selectedService]);

  useEffect(() => {
    let timer;
    if (animationState === 'fadingOut') {
      timer = setTimeout(() => {
        setDisplayedService(selectedService);
        setAnimationState('fadingIn');
      }, 300); // Duration of the fade-out animation
    } else if (animationState === 'fadingIn') {
      timer = setTimeout(() => {
        setAnimationState('idle');
      }, 300); // Duration of the fade-in animation
    }
    return () => clearTimeout(timer);
  }, [animationState]);

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
            <div
              onClick={() => setSelectedService(1)}
              className={`bg-primaryBg rounded-lg p-8 transition-transform duration-300 hover:scale-105 cursor-pointer ${
                selectedService === 1 ? 'border-2 border-yellow-400' : ''
              }`}
            >
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
            <div
              onClick={() => setSelectedService(2)}
              className={`bg-primaryBg rounded-lg p-8 transition-transform duration-300 hover:scale-105 cursor-pointer ${
                selectedService === 2 ? 'border-2 border-yellow-400' : ''
              }`}
            >
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
            <div
              onClick={() => setSelectedService(3)}
              className={`bg-primaryBg rounded-lg p-8 transition-transform duration-300 hover:scale-105 cursor-pointer ${
                selectedService === 3 ? 'border-2 border-yellow-400' : ''
              }`}
            >
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

        {/* Service Details Section */}
        <div className="relative mt-6 px-3 md:px-0">
          <div
            className={`bg-primaryBg rounded-lg p-8 transition-opacity duration-300 ${
              animationState === 'fadingOut' ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {displayedService === 1 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Website Development Details</h3>
                <p className="text-primaryText mb-2">
                  Our website development service offers a full range of solutions to help you establish a robust online presence. We specialize in creating responsive, SEO-friendly websites that are both visually appealing and highly functional.
                </p>
                <ul className="list-disc list-inside text-primaryText">
                  <li>Custom web design tailored to your brand.</li>
                  <li>Responsive layouts for all devices.</li>
                  <li>SEO optimization for better search rankings.</li>
                  <li>Content management systems integration.</li>
                </ul>
              </div>
            )}
            {displayedService === 2 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Mobile App Development Details</h3>
                <p className="text-primaryText mb-2">
                  We develop mobile applications that provide seamless user experiences on both Android and iOS platforms. Our apps are designed to be user-friendly, fast, and reliable.
                </p>
                <ul className="list-disc list-inside text-primaryText">
                  <li>Native and cross-platform app development.</li>
                  <li>User-centric design approach.</li>
                  <li>Integration with existing systems.</li>
                  <li>App Store and Google Play deployment.</li>
                </ul>
              </div>
            )}
            {displayedService === 3 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Software Solutions Details</h3>
                <p className="text-primaryText mb-2">
                  Our software solutions are custom-built to meet the unique challenges of your business. We employ the latest technologies to deliver scalable and efficient software applications.
                </p>
                <ul className="list-disc list-inside text-primaryText">
                  <li>Custom software development.</li>
                  <li>System integration services.</li>
                  <li>Cloud-based solutions.</li>
                  <li>Maintenance and support.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
