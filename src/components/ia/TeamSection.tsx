'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    slug: 'adam-dongmo',
    name: 'Vincess Dongmo',
    role: 'Founder & CTO',
    image: '/founder/image1.jpeg',
    bio: 'Visionary leader driving AI innovation across Africa with 5+ years of experience in machine learning and robotics. Vincess has led the development of cutting-edge AI solutions for healthcare, agriculture, and smart city applications across the continent.',
  },
  {
    id: 2,
    slug: 'fokam-minyim',
    name: 'Fokam Melvin',
    role: 'Chief Operating Officer',
    image: '/founder/melvin.png',
    bio: "Master's in Machine Learning with expertise in neural networks and NLP applications. Melvin oversees operations and ensures seamless delivery of AI solutions to clients across diverse industries.",
  },
  {
    id: 3,
    slug: 'sarah-chen',
    name: 'Gaëlle Tamho',
    role: 'UI/UX Designer',
    image: '/founder/gael.jpeg',
    bio: 'BSc in Software Engineering with expertise in UI/UX design and user-centered development. Gaëlle crafts intuitive interfaces that bridge the gap between complex AI technology and everyday users.',
  },
  {
    id: 4,
    slug: 'nkemi-steve',
    name: 'Kemi Steve Christian',
    role: 'Head of Design & Founding Engineer',
    image: '/founder/woman.jpeg',
    bio: 'I\'m a proactive and creative UX/UI designer, graphics designer',
  },
  {
    id: 5,
    slug: 'michael-johnson',
    name: 'Michael Johnson',
    role: 'Robotics Engineer',
    image: '/founder/woman.jpeg',
    bio: 'Robotics specialist focused on autonomous systems and human-robot interaction design. Michael brings deep expertise in embedded systems and real-time computer vision applications.',
  },
   
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const activeMember = teamMembers[activeIndex];

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">
            Our Awesome Team
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent leading-tight">
            Leadership
          </h2>
        </motion.div>

        {/* Desktop: Tabbed Layout (opencv.ai style) */}
        <div className="hidden lg:flex gap-0 min-h-[600px]">
          {/* Left: Numbered Tab Navigation */}
          <motion.div
            className="w-[320px] flex-shrink-0 flex flex-col justify-center border-r border-[#6b7db8]/10 pr-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {teamMembers.map((member, index) => (
              <button
                key={member.id}
                onClick={() => {
                  setActiveIndex(index);
                  setIsFlipped(false);
                }}
                className={`group w-full text-left py-5 border-b border-[#6b7db8]/10 transition-all duration-500 ${
                  activeIndex === index
                    ? 'opacity-100'
                    : 'opacity-40 hover:opacity-70'
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-[#6b7db8] text-sm font-mono tracking-wider">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      activeIndex === index ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {member.name}
                  </h3>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Right: Card Display */}
          <div className="flex-1 pl-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, y: 60, rotateX: 8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[520px] cursor-pointer"
                style={{ perspective: '1200px' }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <motion.div
                  className="relative w-full"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front: Image + Name + Role */}
                  <div
                    className="relative rounded-2xl overflow-hidden border border-[#6b7db8]/15"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={activeMember.image}
                        alt={activeMember.name}
                        fill
                        className="object-cover"
                        sizes="520px"
                        priority
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-8 pt-24">
                      <p className="text-gray-400 text-sm mb-1">
                        {activeMember.name}
                      </p>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white">
                        {activeMember.role}
                      </h2>
                    </div>
                  </div>

                  {/* Back: Bio */}
                  <div
                    className="absolute inset-0 rounded-2xl border border-[#6b7db8]/15 bg-gradient-to-br from-gray-900 to-black flex flex-col justify-center p-10"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="text-[#6b7db8] text-sm font-semibold mb-2">
                      {activeMember.name}
                    </div>
                    <div className="text-gray-300 text-lg leading-relaxed">
                      {activeMember.bio}
                    </div>
                  </div>
                </motion.div>

                {/* Click hint */}
                <div className="text-center mt-4 text-gray-600 text-xs tracking-wider uppercase">
                  {isFlipped ? 'Click to see photo' : 'Click to read bio'}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="lg:hidden space-y-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/team/${member.slug}`} className="block">
                <div className="relative rounded-2xl overflow-hidden border border-[#6b7db8]/15">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-[#6b7db8] text-sm font-mono">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <p className="text-gray-400 text-sm">{member.name}</p>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.role}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
