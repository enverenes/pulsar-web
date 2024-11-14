'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const Statistics = () => {
  // State to keep track of the current statistic index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Section animation
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Data for charts and texts
  const statistics = [
    {
      data: [
        { name: 'Influenced', value: 97 },
        { name: 'Not Influenced', value: 3 },
      ],
      percentage: 97,
      color: '#0088FE',
      text: 'of customers say websites influence their purchases.',
    },
    {
      data: [
        { name: 'Visited Store', value: 91 },
        { name: 'Did Not Visit', value: 9 },
      ],
      percentage: 91,
      color: '#00C49F',
      text: 'of customers visited a store after interacting with an online website.',
    },
    {
      data: [
        { name: 'More Credible', value: 84 },
        { name: 'Less Credible', value: 16 },
      ],
      percentage: 84,
      color: '#FFBB28',
      text: 'of consumers see a business’s website as more credible than its social media presence.',
    },
  ];

  // Effect to cycle through statistics
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % statistics.length);
    }, 5000); // Change statistic every 5 seconds

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, [statistics.length]);

  // Get the current statistic
  const currentStatistic = statistics[currentIndex];

  return (
    <div
      ref={statsRef}
      id="statistics"
      className={`py-20 bg-secondaryBg transition-all duration-1000 transform  ${
        statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-secondaryText">
          Why a Website Matters
        </h2>
        <div className="flex flex-col items-start">
          {/* Animated Statistic */}
          <div className="rounded-lg md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-center space-x-6">
              {/* Chart Container */}
              <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                <div className="w-full h-full transition-transform duration-1000">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={currentStatistic.data}
                        dataKey="value"
                        innerRadius="0%"
                        outerRadius="90%"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {currentStatistic.data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              index === 0 ? currentStatistic.color : '#f0f0f0'
                            }
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              {/* Number Container */}
              <div className='flex flex-col h-48'>
              <div className=" flex-shrink-0">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={currentStatistic.percentage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-9xl font-bold text-secondaryText"
                  >
                    {currentStatistic.percentage}%
                  </motion.h3>
                </AnimatePresence>
              </div>
              {/* Text Container */}
              <div className="w-full">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentStatistic.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-secondaryText md:text-2xl max-w-full"
                  >
                    {currentStatistic.text}
                  </motion.p>
                </AnimatePresence>
              </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
