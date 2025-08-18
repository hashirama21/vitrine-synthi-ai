'use client';

import { useState, useEffect, useRef } from 'react';
import React from 'react';

// Types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  service: string;
  budget: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  gradient: string;
}

// Icônes SVG personnalisées
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
);

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z"/>
    <path d="M19 2l1.09 3.26L24 6l-3.91 0.74L19 10l-1.09-3.26L14 6l3.91-0.74L19 2z"/>
    <path d="M5 14l0.54 1.63L7 16l-1.46 0.37L5 18l-0.54-1.63L3 16l1.46-0.37L5 14z"/>
  </svg>
);

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
  </svg>
);

const LoaderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 animate-spin">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const contactInfos: ContactInfo[] = [
  {
    icon: <MapPinIcon />,
    title: 'Our Location',
    details: ['Douala, Cameroon', 'Central Africa Hub'],
    gradient: 'from-[#6b7db8] to-[#8a9fd9]'
  },
  {
    icon: <MailIcon />,
    title: 'Email Us',
    details: ['hello@synthi-ai.com', 'support@synthi-ai.com'],
    gradient: 'from-[#8a9fd9] to-[#b3c0de]'
  },
  {
    icon: <PhoneIcon />,
    title: 'Call Us',
    details: ['+237 6XX XXX XXX', '+237 6XX XXX XXX'],
    gradient: 'from-[#b3c0de] to-[#6b7db8]'
  },
  {
    icon: <ClockIcon />,
    title: 'Business Hours',
    details: ['Mon - Fri: 8AM - 6PM', 'Sat: 9AM - 4PM'],
    gradient: 'from-[#6b7db8] to-[#9fb5e5]'
  }
];

const services = [
  'AI Development',
  'Computer Vision',
  'Machine Learning',
  'Robotics Automation',
  'Data Science & Analytics',
  'AI Strategy Consulting',
  'Cloud AI Infrastructure',
  'AI Training & Workshops'
];

const budgetRanges = [
  'Under $10K',
  '$10K - $50K',
  '$50K - $100K',
  '$100K - $500K',
  '$500K+',
  'Let\'s Discuss'
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: '',
    budget: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.service) newErrors.service = 'Please select a service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setFormStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          service: '',
          budget: ''
        });
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6b7db8]/5 via-transparent to-[#8a9fd9]/5"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-br from-[#6b7db8]/20 to-[#8a9fd9]/15 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 20}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <section className={`pt-32 pb-16 text-center transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
         
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block text-white mb-2">
              Ready to Transform
            </span>
            <span className="block bg-gradient-to-r from-[#6b7db8] via-[#8a9fd9] to-[#b3c0de] bg-clip-text text-transparent">
              Your Business with AI?
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            Let&apos;s discuss how SYNTHI AI can revolutionize your operations with cutting-edge artificial intelligence solutions tailored for African businesses.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className={`py-16 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '0.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfos.map((info, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-[#6b7db8]/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-400 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Main Contact Form */}
        <section className={`py-16 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '0.4s' }}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Send us a message</h2>
                <p className="text-gray-400 text-lg">We&apos;ll get back to you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <UserIcon />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b7db8] focus:border-transparent transition-all duration-300 ${
                          errors.firstName ? 'border-red-500' : 'border-gray-600/50'
                        }`}
                        placeholder="Your first name"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <UserIcon />
                      </div>
                    </div>
                    {errors.firstName && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertIcon />
                        <span className="ml-1">{errors.firstName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b7db8] focus:border-transparent transition-all duration-300 ${
                          errors.lastName ? 'border-red-500' : 'border-gray-600/50'
                        }`}
                        placeholder="Your last name"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <UserIcon />
                      </div>
                    </div>
                    {errors.lastName && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertIcon />
                        <span className="ml-1">{errors.lastName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b7db8] focus:border-transparent transition-all duration-300 ${
                          errors.email ? 'border-red-500' : 'border-gray-600/50'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <MailIcon />
                      </div>
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertIcon />
                        <span className="ml-1">{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b7db8] focus:border-transparent transition-all duration-300"
                        placeholder="+237 6XX XXX XXX"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <PhoneIcon />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b7db8] focus:border-transparent transition-all duration-300"
                        placeholder="Your company name"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <BuildingIcon />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b7db8] focus:border-transparent transition-all duration-300"
                        placeholder="Brief subject"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <MessageIcon />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#6b7db8] focus:border-transparent transition-all duration-300 ${
                        errors.service ? 'border-red-500' : 'border-gray-600/50'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-gray-800 text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertIcon />
                        <span className="ml-1">{errors.service}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#6b7db8] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range} className="bg-gray-800 text-white">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b7db8] focus:border-transparent transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-600/50'
                    }`}
                    placeholder="Tell us about your project, goals, and how we can help you..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertIcon />
                      <span className="ml-1">{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] hover:from-[#5a6ba3] hover:to-[#7a8fc9] disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg shadow-[#6b7db8]/25 hover:shadow-[#6b7db8]/40 flex items-center justify-center"
                >
                  {formStatus === 'loading' && <LoaderIcon />}
                  {formStatus === 'success' && <CheckIcon />}
                  {formStatus === 'error' && <AlertIcon />}
                  {formStatus === 'idle' && <SendIcon />}
                  
                  <span className="ml-2">
                    {formStatus === 'loading' && 'Sending Message...'}
                    {formStatus === 'success' && 'Message Sent Successfully!'}
                    {formStatus === 'error' && 'Failed to Send Message'}
                    {formStatus === 'idle' && 'Send Message'}
                  </span>
                </button>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <p className="text-green-400 text-center">
                      Thank you for your message! We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={`py-16 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '0.6s' }}>
          <div className="text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#6b7db8]/10 to-[#8a9fd9]/10 backdrop-blur-xl rounded-3xl border border-[#6b7db8]/20 p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your AI Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join over 50+ African companies already transforming their businesses with SYNTHI AI&apos;s cutting-edge solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] hover:from-[#5a6ba3] hover:to-[#7a8fc9] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#6b7db8]/25 hover:shadow-[#6b7db8]/40 flex items-center justify-center">
                  <SendIcon />
                  <span className="ml-2">Get Started Today</span>
                </button>
                
                <button className="border-2 border-[#6b7db8]/50 hover:border-[#6b7db8] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#6b7db8]/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                  <ClockIcon />
                  <span className="ml-2">Schedule Consultation</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-gray-400">AI Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#8a9fd9] to-[#b3c0de] bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-gray-400">African Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#b3c0de] to-[#6b7db8] bg-clip-text text-transparent mb-2">99%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CSS pour les effets personnalisés */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.8;
          }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}