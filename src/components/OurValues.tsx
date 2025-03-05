'use client';

import { FaLightbulb, FaStar, FaBalanceScale, FaUsers, FaHandshake } from 'react-icons/fa';

const values = [
  {
    title: 'Innovation',
    description: "Designing cutting-edge solutions adapted to the market realities.",
    icon: <FaLightbulb className='text-yellow-400 text-3xl' />,
  },
  {
    title: 'Excellence',
    description: "Maintaining high technological standards and ensuring reliable solutions.",
    icon: <FaStar className='text-red-400 text-3xl' />,
  },
  {
    title: 'Ethics & Transparency',
    description: "Ensuring responsible, secure, and user-respectful AI.",
    icon: <FaBalanceScale className='text-yellow-500 text-3xl' />,
  },
  {
    title: 'Society Impact',
    description: "Improving people’s lives and contributing to the Sustainable Development Goals (SDGs).",
    icon: <FaUsers className='text-red-500 text-3xl' />,
  },
  {
    title: 'Collaboration',
    description: "Working with key players to build a strong AI ecosystem in Africa.",
    icon: <FaHandshake className='text-blue-400 text-3xl' />,
  },
];

export default function OurValues() {
  return (
    <section className='bg-black text-white py-16 px-6 text-center'>
      <h3 className='text-blue-400 uppercase tracking-widest text-sm'>The DNA of our AI</h3>
      <h2 className='text-3xl font-bold mt-2'>Our Values</h2>
      <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
        We work closely with our clients to understand their unique challenges and deliver tailored solutions that drive tangible results.
      </p>
      <div className='mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto'>
        {values.map((value, index) => (
          <div key={index} className='lg:bg-black bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-start text-left'>
            {value.icon}
            <h3 className='text-xl font-semibold mt-4'>{value.title}</h3>
            <p className='text-gray-400 mt-2'>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
