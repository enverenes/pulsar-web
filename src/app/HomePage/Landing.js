'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { FaCode } from "react-icons/fa";

import Services from './Services';
import Action from './Action';


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
  

  return (
    <div className="bg-primaryBg text-primaryText min-h-screen"
    
    >
      {/* Hero Section */}
      <header 
        ref={heroRef}
        className={`flex z-0 flex-col mx-10 md:items-start md:ml-28 justify-center h-screen transition-all duration-1000 transform ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
        
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Get a custom website in days!</h1>
        <p className="text-xl md:text-2xl text-primaryText mb-8">
          It's time to renovate your rusty website
        </p>
        <button className="bg-secondaryBg hover:bg-accentHover text-black font-semibold py-3 px-6 rounded-2xl transition-colors duration-300">
          Get Started
        </button>
      </header>

     

    <Services/>

    <Action/>

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