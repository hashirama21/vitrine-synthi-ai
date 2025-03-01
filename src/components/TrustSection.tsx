import React from 'react';
import Image from 'next/image';

const TrustSection = () => {
  return (
    <section className="bg-[#080a1a] py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-blue-400 text-sm uppercase tracking-wider font-medium">
            THEY TRUST US
          </p>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12">
          {/* Dribbble logo */}
          <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 hover:scale-105 transform transition-transform duration-300">
            <Image
              src="/images/dribbble.png"
              alt="Dribbble"
              width={100}
              height={30}
              className="h-10 md:h-12 w-auto max-w-[140px] md:max-w-[180px]"
            />
          </div>

          {/* Xpeng logo */}
          <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 hover:scale-105 transform transition-transform duration-300">
            <Image
              src="/images/xxpeng.png"
              alt="Xpeng"
              width={120}
              height={30}
              className="h-10 md:h-12 w-auto max-w-[140px] md:max-w-[180px]"
            />
          </div>

          {/* Veroxfloor logo */}
          <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 hover:scale-105 transform transition-transform duration-300">
            <Image
              src="/images/verox.webp"
              alt="Veroxfloor"
              width={140}
              height={30}
              className="h-10 md:h-12 w-auto max-w-[140px] md:max-w-[180px]"
            />
          </div>

          {/* Behance logo */}
          <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 hover:scale-105 transform transition-transform duration-300">
            <Image
              src="/images/bbehance.svg"
              alt="Behance"
              width={120}
              height={30}
              className="h-10 md:h-12 w-auto max-w-[140px] md:max-w-[180px]"
            />
          </div>

          {/* SurveyMonkey logo */}
          <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 hover:scale-105 transform transition-transform duration-300">
            <Image
              src="/images/SurveyMonkey.jpg"
              alt="SurveyMonkey"
              width={240}
              height={30}
              className="h-10 md:h-12 w-auto max-w-[140px] md:max-w-[180px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
