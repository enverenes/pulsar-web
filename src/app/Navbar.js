'use client';

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing the icons
import { Link } from 'react-scroll';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-primaryBg text-primaryText fixed w-full z-10 shadow-sm shadow-gray-500">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-[2%] py-[1%]">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link 
activeClass="active" 
to="home" 
spy={true} 
smooth={true} 
duration={500} className="md:text-[2vw] font-bold hover:text-buttonHover transition-colors duration-300">
            WeInteractive
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-[5%] py-[5%] border rounded text-primaryText border-primaryText hover:text-buttonHover hover:border-accent transition-colors duration-300"
            aria-label="Toggle navigation"
          >
            {navbarOpen ? (
              <FiX className="h-[4vh] w-[4vh]" /> // Close Icon
            ) : (
              <FiMenu className="h-[4vh] w-[4vh]" /> // Hamburger Icon
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            navbarOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'
          }`}
        >
          <div className="md:text-[1vw] lg:flex lg:flex-grow lg:space-x-6">
            <Link 
activeClass="active" 
to="home" 
spy={true} 
smooth={true} 
duration={500}
              
              className="block mt-[2%] lg:inline-block lg:mt-0 text-primaryText hover:text-buttonHover transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
activeClass="active" 
to="services" 
spy={true} 
smooth={true} 
duration={500}
             
              className="block mt-[2%] lg:inline-block lg:mt-0 text-primaryText hover:text-buttonHover transition-colors duration-300"
            >
              Services
            </Link>
            <Link 
activeClass="active" 
to="about" 
spy={true} 
smooth={true} 
duration={500}
              
              className="block mt-[2%] lg:inline-block lg:mt-0 text-primaryText hover:text-buttonHover transition-colors duration-300"
            >
              About
            </Link>
            <Link 
activeClass="active" 
to="contact" 
spy={true} 
smooth={true} 
duration={500}
             
              className="block mt-[2%] lg:inline-block lg:mt-0 text-primaryText hover:text-buttonHover transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          
           
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
