'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  Globe,
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
  Sparkles,
  Brain,
  Bot,
  Eye
} from 'lucide-react';

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
  icon: React.ComponentType<any>;
  title: string;
  details: string[];
  gradient: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const contactInfos: ContactInfo[] = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: ['Douala, Cameroon', 'Central Africa Hub'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@synthi-ai.com', 'support@synthi-ai.com'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+237 6XX XXX XXX', '+237 6XX XXX XXX'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 8AM - 6PM', 'Sat: 9AM - 4PM'],
    gradient: 'from-orange-500 to-red-500'
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

// Composant ParticleBackground
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = document.documentElement.scrollHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = 80;

    class ParticleClass implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        const colors = ['#3b82f6', '#06b6d4', '#8b5cf6'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        if (!canvas) return;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = this.opacity;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new ParticleClass());
    }

    const animate = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.update();
          particle.draw(ctx);
        });

        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
    />
  );
};

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

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animation d'entrée
    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(
      contactInfoRef.current?.children || [],
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1 },
      '-=0.5'
    )
    .fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      mapRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8 },
      '-=0.5'
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
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

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      
      // Reset form after success
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-lg font-semibold text-white">Get In Touch</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Your Business with AI?
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl text-slate-300 mb-8">
            Let&apos;s discuss how SYNTHI AI can revolutionize your operations with cutting-edge artificial intelligence solutions tailored for African businesses.
          </p>

          {/* Floating AI Icons */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm animate-pulse">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm animate-pulse">
              <Eye className="w-8 h-8 text-purple-400" />
            </div>
            <div className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm animate-pulse">
              <Bot className="w-8 h-8 text-green-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section ref={contactInfoRef} className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfos.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-300 text-sm">{detail}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div ref={formRef} className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                            errors.firstName ? 'border-red-500' : 'border-white/20'
                          }`}
                          placeholder="Your first name"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                            errors.lastName ? 'border-red-500' : 'border-white/20'
                          }`}
                          placeholder="Your last name"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                            errors.email ? 'border-red-500' : 'border-white/20'
                          }`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                          placeholder="+237 6XX XXX XXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                          placeholder="Brief subject"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                          errors.service ? 'border-red-500' : 'border-white/20'
                        }`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-slate-800 text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.service}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range} className="bg-slate-800 text-white">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/20'
                      }`}
                      placeholder="Tell us about your project, goals, and how we can help you..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center"
                  >
                    {formStatus === 'loading' && (
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    )}
                    {formStatus === 'success' && (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    )}
                    {formStatus === 'error' && (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    {formStatus === 'idle' && (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    
                    {formStatus === 'loading' && 'Sending Message...'}
                    {formStatus === 'success' && 'Message Sent Successfully!'}
                    {formStatus === 'error' && 'Failed to Send Message'}
                    {formStatus === 'idle' && 'Send Message'}
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

            {/* Map & Additional Info */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Map */}
              <div ref={mapRef} className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-2" />
                  Visit Our Office
                </h3>
                
                {/* Placeholder Map */}
                <div className="w-full h-64 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">Interactive Map</p>
                    <p className="text-slate-400 text-sm">Douala, Cameroon</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
                  <p className="text-blue-400 font-semibold mb-2">🌍 Central Africa&apos;s AI Hub</p>
                  <p className="text-slate-300 text-sm">
                    Located in the heart of Douala, we&apos;re pioneering AI innovation across Central Africa. 
                    Our modern office features state-of-the-art AI labs and collaboration spaces.
                  </p>
                </div>
              </div>

              {/* Schedule Meeting */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Calendar className="w-6 h-6 text-purple-400 mr-2" />
                  Schedule a Meeting
                </h3>
                
                <p className="text-slate-300 mb-6">
                  Prefer a direct conversation? Book a consultation with our AI experts to discuss your project requirements.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
                    <h4 className="text-white font-semibold mb-2">Free Consultation</h4>
                    <p className="text-slate-400 text-sm">30-minute discovery call</p>
                  </div>
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                    <h4 className="text-white font-semibold mb-2">Technical Deep Dive</h4>
                    <p className="text-slate-400 text-sm">1-hour technical session</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Meeting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              {/* Response Time */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-orange-400 mr-2" />
                  Response Time
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
                    <div>
                      <h4 className="text-white font-semibold">Email Queries</h4>
                      <p className="text-slate-400 text-sm">General information and questions</p>
                    </div>
                    <span className="text-orange-400 font-bold">24h</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                    <div>
                      <h4 className="text-white font-semibold">Project Inquiries</h4>
                      <p className="text-slate-400 text-sm">Business proposals and partnerships</p>
                    </div>
                    <span className="text-green-400 font-bold">12h</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-xl border border-red-500/30">
                    <div>
                      <h4 className="text-white font-semibold">Urgent Support</h4>
                      <p className="text-slate-400 text-sm">Critical technical issues</p>
                    </div>
                    <span className="text-red-400 font-bold">2h</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
                  <p className="text-blue-400 font-semibold mb-2">🚀 Priority Support Available</p>
                  <p className="text-slate-300 text-sm">
                    Enterprise clients receive dedicated support with guaranteed response times and direct access to our technical team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Quick answers to common questions about our AI services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What AI services does SYNTHI AI offer?",
                answer: "We offer comprehensive AI solutions including Computer Vision, Machine Learning, Robotics Automation, Natural Language Processing, Predictive Analytics, and AI Strategy Consulting. Our services are specifically designed for African businesses and markets."
              },
              {
                question: "How long does a typical AI project take?",
                answer: "Project timelines vary based on complexity and scope. Simple AI integrations can take 2-4 weeks, while complex enterprise solutions may require 3-6 months. We provide detailed timelines during our consultation phase."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes! We offer comprehensive post-deployment support including system monitoring, performance optimization, updates, and training. Our support packages are tailored to your specific needs and budget."
              },
              {
                question: "Can you work with existing business systems?",
                answer: "Absolutely! Our AI solutions are designed to integrate seamlessly with existing business systems, databases, and workflows. We conduct thorough system assessments to ensure smooth integration."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We work across various industries including healthcare, finance, agriculture, manufacturing, retail, and logistics. Our expertise in African markets allows us to understand unique regional challenges and opportunities."
              },
              {
                question: "How do you ensure data security and privacy?",
                answer: "Data security is our top priority. We implement enterprise-grade encryption, secure cloud infrastructure, compliance with international standards (GDPR, ISO 27001), and provide detailed security audits for all projects."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mr-3">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-slate-300 leading-relaxed pl-6">
                  <span className="text-green-400 font-semibold mr-2">A:</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-white/10 p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join over 50+ African companies already transforming their businesses with SYNTHI AI&apos;s cutting-edge solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
                <div className="text-slate-400 text-sm">AI Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
                <div className="text-slate-400 text-sm">African Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">99%</div>
                <div className="text-slate-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links & Additional Contact */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Social Media */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {[
                  { name: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
                  { name: 'Twitter', color: 'from-cyan-400 to-cyan-500' },
                  { name: 'GitHub', color: 'from-gray-600 to-gray-700' },
                  { name: 'YouTube', color: 'from-red-600 to-red-700' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </button>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Emergency Support</h3>
              <p className="text-slate-300 mb-2">24/7 Critical Support Hotline</p>
              <a href="tel:+237600000000" className="text-red-400 font-semibold hover:text-red-300 transition-colors duration-300">
                +237 6XX XXX XXX
              </a>
            </div>

            {/* Newsletter */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-slate-300 mb-4">Get the latest AI insights and updates</p>
              <div className="flex max-w-sm mx-auto md:ml-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-l-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-r-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </div>
  );
}