'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  ArrowRight,
  Microscope,
  Building2,
  GraduationCap,
  BrainCircuit,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'labs',
    name: 'Synthi AI Labs',
    tagline: 'Research & Development',
    description:
      'We design advanced algorithms in AI, NLP, and computer vision, applied to the challenges of Africa and the world.',
    icon: <Microscope className="w-7 h-7" />,
    popular: false,
    features: [
      'Collaborative research projects with universities',
      'AI models for health, environment, and finance',
      'Custom algorithm development',
      'Academic publications and datasets',
    ],
    cta: 'Start Research',
    link: 'mailto:contact@synthi-ai.com?subject=Inquiry%20-%20Synthi%20AI%20Labs',
  },
  {
    id: 'solutions',
    name: 'Synthi AI Solutions',
    tagline: 'AI for Businesses & Institutions',
    description:
      'We develop tailored AI solutions, adapted to the challenges of industries and governments.',
    icon: <Building2 className="w-7 h-7" />,
    popular: true,
    features: [
      'Health: AI for medical diagnosis and teleconsultation',
      'Agriculture: Yield prediction and disease detection',
      'Finance: Fraud detection and risk management',
      'Industry: Process automation and supply chain',
    ],
    cta: 'Get Solution',
    link: 'mailto:contact@synthi-ai.com?subject=Inquiry%20-%20Synthi%20AI%20Solutions',
  },
  {
    id: 'academy',
    name: 'Synthi AI Academy',
    tagline: 'Training & Education',
    description:
      'We train the next generation of AI experts through programs tailored to market needs.',
    icon: <GraduationCap className="w-7 h-7" />,
    popular: false,
    features: [
      'Training in AI, robotics and computer vision',
      'Mentoring and certifications',
      'Practical workshops and hands-on projects',
      'Career placement assistance',
    ],
    cta: 'Start Learning',
    link: 'mailto:contact@synthi-ai.com?subject=Inquiry%20-%20Synthi%20AI%20Academy',
  },
  {
    id: 'neuralynx',
    name: 'NeuroLynx Advisor',
    tagline: 'Strategic AI Consulting',
    description:
      'Strategic consulting in AI, data analytics, and digital transformation for enterprises.',
    icon: <BrainCircuit className="w-7 h-7" />,
    popular: false,
    isNew: true,
    features: [
      'AI implementation roadmaps',
      'Data architecture and analytics strategy',
      'Technology stack optimization',
      'Executive training and change management',
    ],
    cta: 'Get Consulting',
    link: 'mailto:contact@synthi-ai.com?subject=Inquiry%20-%20NeuroLynx%20Advisor',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* ── Full video background ── */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-blue-particles-floating/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[120px] bg-[#6b7db8]/12"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full blur-[100px] bg-[#8a9fd9]/8"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '15%', right: '10%' }}
        />
      </div>

      {/* ── Content over video ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#6b7db8] text-xs uppercase tracking-[0.3em] font-semibold mb-5">
            Flexible Solutions
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Choose the{' '}
            <span className="bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] bg-clip-text text-transparent">
              right fit
            </span>
            <br />
            for your business
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From cutting-edge research to practical business solutions, comprehensive
            education, and strategic AI consulting.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
              className="group relative"
            >
              <div
                className={`relative h-full p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                  service.popular
                    ? 'bg-white/[0.07] border-[#6b7db8]/40 shadow-lg shadow-[#6b7db8]/10'
                    : 'bg-white/[0.04] border-white/[0.08] hover:border-[#6b7db8]/30'
                } hover:shadow-xl hover:shadow-[#6b7db8]/15 hover:bg-white/[0.08]`}
              >
                {/* Badge */}
                {(service.popular || service.isNew) && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${
                        service.isNew
                          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500'
                          : 'bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9]'
                      }`}
                    >
                      {service.isNew ? 'New' : 'Popular'}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 bg-[#6b7db8]/15 rounded-xl flex items-center justify-center text-[#6b7db8] mb-5 group-hover:bg-[#6b7db8]/25 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-1">{service.name}</h3>
                <p className="text-[#6b7db8] text-xs font-semibold mb-3">
                  {service.tagline}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6b7db8]/15 flex items-center justify-center mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#6b7db8]" />
                      </div>
                      <span className="text-gray-400 text-xs leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={service.link}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] text-white hover:shadow-lg hover:shadow-[#6b7db8]/30'
                      : service.isNew
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/30'
                        : 'bg-white/[0.06] text-[#6b7db8] hover:bg-[#6b7db8] hover:text-white border border-white/[0.08] hover:border-[#6b7db8]'
                  }`}
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
