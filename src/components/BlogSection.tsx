import React from 'react';
import Image from 'next/image';
import ContactUs from './ContactUs';

const BlogSection = () => {
  return (
    <div className="bg-[#0a0b1a] text-white  min-h-screen flex flex-col">
      {/* Stats Section */}

      <div className="relative bg-[#09091a] text-white py-16 overflow-hidden">
      {/* Background blur effect */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(30, 64, 175, 0.25) 0%, rgba(15, 23, 42, 0) 50%)',
          filter: 'blur(60px)',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <div className="col-span-1 flex justify-center">
            <h2 className="text-3xl font-bold leading-tight">
              Driving<br />
              success<br />
              with data
            </h2>
          </div>
          
          <div className="col-span-1 text-center">
            <div className="text-6xl font-bold mb-1">98<span className="text-4xl">%</span></div>
            <div className="text-sm text-gray-400">Clients satisfaction</div>
          </div>
          
          <div className="col-span-1 text-center">
            <div className="text-6xl font-bold mb-1">35<span className="text-4xl">%</span></div>
            <div className="text-sm text-gray-400">Decrease expenses</div>
          </div>
          
          <div className="col-span-1 text-center">
            <div className="text-6xl font-bold mb-1">8.3<span className="text-4xl">M</span></div>
            <div className="text-sm text-gray-400">Money raised</div>
          </div>
        </div>
      </div>
    </div>
      {/* Testimonials Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <div className="text-blue-500 text-sm uppercase tracking-wider mb-2">TESTIMONIALS</div>
          <h2 className="text-3xl font-bold">Satisfied voices of success</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-[#0d0f2b] p-6 rounded-lg">
            <div className="flex mb-4">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 mb-6">&quot;Game-changing AI solution! Boosted efficiency and data-driven insights. Highly recommended!&quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src="/mia-baker.jpg" alt="Mia Baker" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-medium">Mia Baker</div>
                <div className="text-sm text-gray-400">Marketing Manager at Reliance</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#0d0f2b] p-6 rounded-lg">
            <div className="flex mb-4">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 mb-6">&quot;This AI platform streamlined our operations and boosted productivity. Highly recommend! &quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src="/allison-walt.jpg" alt="Allison Walt" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-medium">Allison Walt</div>
                <div className="text-sm text-gray-400">Product Manager at Orbital</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 (partially visible in the image) */}
          <div className="bg-[#0d0f2b] p-6 rounded-lg">
            <div className="flex mb-4">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 mb-6">&quot;AI platform! Streamlined operations and boosted productivity.&quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src="/user-avatar.jpg" alt="User" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-medium">User Name</div>
                <div className="text-sm text-gray-400">Position at Company</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs/>
    </div>
  );
};

export default BlogSection;