'use client';

import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const menuAnimation = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: navbarOpen ? 200 : 0,
      opacity: navbarOpen ? 1 : 0,
    },
    config: { tension: 300, friction: 30 }
  });

  const desktopStyles = {
    height: 'auto',
    opacity: 1,
  };

  return (
    <nav className="bg-primaryBg text-primaryText fixed w-full z-10 shadow-sm shadow-gray-500">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <a href="#" className="text-2xl font-bold hover:text-accent transition-colors duration-300">
            WeInteractive
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded text-primaryText border-primaryText hover:text-accent hover:border-accent transition-colors duration-300"
            aria-label="Toggle navigation"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {navbarOpen ? (
                <path
                  fillRule="evenodd"
                  d="M14.348 14.849a1 1 0 010 1.415l-1.415 1.415a1 1 0 01-1.415 0L10 15.414l-1.518 1.518a1 1 0 01-1.415 0l-1.415-1.415a1 1 0 010-1.415L7.586 12l-1.518-1.518a1 1 0 010-1.415l1.415-1.415a1 1 0 011.415 0L10 8.586l1.518-1.518a1 1 0 011.415 0l1.415 1.415a1 1 0 010 1.415L12.414 12l1.518 1.518a1 1 0 010 1.415z"
                  clipRule="evenodd"
                />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <animated.div
          style={{
            ...menuAnimation,
            ...(!navbarOpen && window?.innerWidth >= 1024 ? desktopStyles : {}),
          }}
          className="w-full lg:flex lg:items-center lg:w-auto"
        >
          <div className="text-sm lg:flex lg:flex-grow">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-primaryText hover:text-accent mr-4 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="block mt-4 lg:inline-block lg:mt-0 text-primaryText hover:text-accent mr-4 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-primaryText hover:text-accent mr-4 transition-colors duration-300"
            >
              About
            </a>
          </div>
          <div className="text-sm lg:flex lg:items-center lg:text-right">
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-primaryText hover:text-accent transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </animated.div>
      </div>
    </nav>
  );
}

export default Navbar;
