'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const TrustSection = () => {
  const logos = [
    { src: '/images/dribbble.png', alt: 'Dribbble' },
    { src: '/images/xxpeng.png', alt: 'Xpeng' },
    { src: '/images/founders_hub.png', alt: 'Founders Hub' },
    { src: '/images/bbehance.svg', alt: 'Behance' },
    { src: '/images/SurveyMonkey.jpg', alt: 'SurveyMonkey' },
    { src: '/images/verox.webp', alt: 'Veroxfloor' },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    gsap.from('.swiper-slide', {
      opacity: 0,
      y: 50,
      rotationX: -45,
      stagger: 0.2,
      duration: 3,
      ease: 'power3.out',
      delay: 0.5,
    });
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-wider font-medium">
            THEY TRUST US
          </p>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="w-full h-48"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 hover:scale-105 transform transition-transform duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={128}
                  height={20}
                  className="w-auto h-12 md:h-16"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustSection;