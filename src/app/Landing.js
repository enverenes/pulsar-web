'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { FaCode } from "react-icons/fa";

const LandingPage = () => {
  // Hero Section Animation
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Services Section Animation
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // CTA Section Animation
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-primaryBg text-primaryText min-h-screen">
      {/* Hero Section */}
      <header 
        ref={heroRef}
        className={`flex flex-col items-center justify-center h-screen bg-primaryBg transition-all duration-1000 transform ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">WeInteractive</h1>
        <p className="text-xl md:text-2xl text-secondaryText mb-8">
          Your Partner in Digital Innovation
        </p>
        <button className="bg-accent hover:bg-accentHover text-white font-semibold py-3 px-6 rounded transition-colors duration-300">
          Get Started
        </button>
      </header>

      {/* Services Section */}
      <div 
        ref={servicesRef}
        id="services" 
        className={`py-20 bg-secondaryBg transition-all duration-1000 transform ${
          servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {/* Service 1 */}
            <div className="md:w-1/3 px-3 mb-6">
              <div className="bg-cardBg rounded-lg p-8 transition-transform duration-300 hover:scale-105">
                <div className="text-accent w-16 h-16 mb-4 flex items-center justify-center">
                  <CgWebsite size={64} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Website Development</h3>
                <p className="text-secondaryText">
                  We build responsive and modern websites that help your business stand out.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="md:w-1/3 px-3 mb-6">
              <div className="bg-cardBg rounded-lg p-8 transition-transform duration-300 hover:scale-105">
                <div className="text-accent w-16 h-16 mb-4 flex items-center justify-center">
                  <CiMobile1 size={64} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
                <p className="text-secondaryText">
                  Creating user-friendly mobile applications for both Android and iOS platforms.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="md:w-1/3 px-3 mb-6">
              <div className="bg-cardBg rounded-lg p-8 transition-transform duration-300 hover:scale-105">
                <div className="text-accent w-16 h-16 mb-4 flex items-center justify-center">
                  <FaCode size={64} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Software Solutions</h3>
                <p className="text-secondaryText">
                  Custom software development tailored to your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div 
        ref={ctaRef}
        id="contact" 
        className={`py-20 bg-primaryBg transition-all duration-1000 transform ${
          ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-secondaryText mb-8">
            Contact us today to turn your ideas into reality.
          </p>
          <button className="bg-accent hover:bg-accentHover text-white font-semibold py-3 px-6 rounded transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 bg-secondaryBg">
        <div className="container mx-auto px-6 text-center">
          <p className="text-footerText">&copy; 2024 WeInteractive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;