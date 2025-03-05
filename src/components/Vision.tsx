import React from 'react';
import Image from 'next/image';

const VisionSection = () => {
  return (
    <div className="bg-[#0a0b1a] text-white  flex flex-col">
      {/* Stats Section */}

      <div className="relative bg-[#09091a] text-white py-7 overflow-hidden">
      {/* Background blur effect */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(30, 64, 175, 0.25) 0%, rgba(15, 23, 42, 0) 50%)',
          filter: 'blur(60px)',
        }}
      />

    <div className="container px-6 relative z-10">
        <div className=" text-3xl font-bold flex justify-center mb-8">Our Vision</div>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-center">
          We aim to position Africa as a key player in the artificial intelligence revolution by developing local solutions with a global impact
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto text-center">
          By pushing the boundaries of artificial intelligence, we aim to revolutionize industries, 
          enhance daily lives, and shape a smarter, more connected future.
        </p>
      </div>

    </div>



    </div>
);
};

export default VisionSection;