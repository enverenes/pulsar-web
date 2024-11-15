'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const previousWorks = [
  {
    videoUrl: '/assets/vid1.mp4',
    
    companyName: 'Company One',
  },
  {
    videoUrl: '/assets/vid2.mp4',
    
    companyName: 'Company Two',
  },
  {
    videoUrl: '/assets/vid3.mp4',
    
    companyName: 'Company Three',
  },
];

const PreviousWork = () => {
  return (
    <div id="previous-work" className="py-20 bg-primaryBg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primaryText">
          Our Previous Work
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={false} // Set to false if not enough slides
          pagination={{ clickable: true }}
        >
          {previousWorks.map((work, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center space-y-2">
              <h3 className="mb-10 text-2xl font-semibold text-primaryText">
                  {work.companyName}
                </h3>
                <div className="w-2/3 h-auto mb-6">
                  <video
                    src={work.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PreviousWork;
