'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Contact = () => {
  // Section animation
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic, such as sending data to an API or email service
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div
      ref={contactRef}
      id="contact"
      className={`py-20 bg-secondaryBg transition-all duration-1000 transform ${
        contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-secondaryText">
          Get in Touch
        </h2>
        <div className="flex flex-col items-center">
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-4">
                {/* Name Field */}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-secondaryText mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Email Field */}
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <label
                    htmlFor="email"
                    className="block text-secondaryText mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-secondaryText mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-secondaryText mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
