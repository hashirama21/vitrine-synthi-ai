'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Eye,
  Brain,
  Bot,
  Lightbulb,
  MessageSquare,
  BarChart3,
  Wifi,
  Zap,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Code,
  Database,
  Shield,
  Users,
  Cpu,
  Cloud,
  Target,
  Briefcase,
  BookOpen,
  Globe,
  HeartPulse,
  Utensils,
  Wheat
} from 'lucide-react';

// Types
interface NavItem {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

interface Service {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  category: 'development' | 'consulting' | 'infrastructure' | 'training';
  gradient: string;
}

interface Solution {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  category: string[];
  gradient: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/solutions', label: 'Solutions', hasDropdown: true },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/hub', label: 'Hub' },
];

const services: Service[] = [
  {
    title: 'AI Development',
    description: 'Custom AI model development and integration',
    href: '/services/ai-development',
    icon: Code,
    category: 'development',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Data Science & Analytics',
    description: 'Advanced data analysis and insights generation',
    href: '/services/data-science',
    icon: Database,
    category: 'development',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'AI Security & Ethics',
    description: 'Secure and ethical AI implementation',
    href: '/services/ai-security',
    icon: Shield,
    category: 'consulting',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    title: 'AI Training & Workshops',
    description: 'Comprehensive AI education and skill development',
    href: '/services/training',
    icon: Users,
    category: 'training',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Cloud AI Infrastructure',
    description: 'Scalable cloud-based AI solutions',
    href: '/services/cloud-infrastructure',
    icon: Cloud,
    category: 'infrastructure',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'AI Performance Optimization',
    description: 'Optimize AI models for maximum efficiency',
    href: '/services/optimization',
    icon: Cpu,
    category: 'development',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    title: 'AI Strategy Consulting',
    description: 'Strategic planning for AI adoption',
    href: '/services/strategy-consulting',
    icon: Target,
    category: 'consulting',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Enterprise AI Solutions',
    description: 'Large-scale AI implementation for enterprises',
    href: '/services/enterprise',
    icon: Briefcase,
    category: 'consulting',
    gradient: 'from-slate-500 to-gray-500'
  }
];



const solutions: Solution[] = [
  {
    title: 'Farm\'sToMarket',
    description: 'A transformative digital platform revolutionizing agriculture with AI-driven crop yield prediction, computer vision for crop and livestock monitoring, optimized delivery through smart logistics, an intelligent marketplace, integrated banking, and real-time price exchange for sustainable and profitable agro-pastoral ecosystems.',
    href: 'http://farmstomarket.synthi-ai.com/',
    icon: Wheat, // Represents agriculture and farming
    category: ['agriculture'],
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    title: 'Ndinga Eats',
    description: 'A revolutionary food delivery platform connecting urban consumers with restaurants, supermarkets, and local vendors, offering geolocated delivery, flexible payments, and a digital infrastructure for inclusive economic growth in Africa.',
    href: '/solutions/ndinga-eats',
    icon: Utensils, // Represents food and dining
    category: ['food-delivery'],
    gradient: 'from-orange-600 to-red-600'
  },
  {
    title: 'UBora AI',
    description: 'An AI-driven platform optimizing resource management and decision-making in critical sectors like health and environment, leveraging advanced data analytics for predictive modeling and crisis anticipation.',
    href: 'https://ubora-ai.synthi-ai.com',
    icon: Brain, // Represents AI and intelligence
    category: ['IDP'],
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'KamerHeaven',
    description: 'A technology ecosystem accelerating digitalization in Africa, providing localized, innovative solutions to enhance access to services in agriculture, health, and education, tailored to regional needs.',
    href: 'https://heaven.synthi-ai.com',
    icon: Globe, // Represents global/local digital ecosystems
    category: ['digital-transformation'],
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'HealthSync AI',
    description: 'An AI-powered medical solution enhancing healthcare delivery through predictive diagnostics, patient monitoring, and personalized treatment plans, integrating IoT and real-time analytics for improved health outcomes.',
    href: '/solutions/healthsync-ai',
    icon: HeartPulse, // Represents healthcare and vitality
    category: ['ai', 'healthcare'],
    gradient: 'from-teal-600 to-blue-600'
  },
  {
    title: 'EduGrow AI',
    description: 'An innovative educational platform leveraging AI to democratize learning, offering personalized curriculums, real-time performance analytics, and accessible digital tools for students and educators.',
    href: '/solutions/edugrow-ai',
    icon: BookOpen, // Represents education and learning
    category: ['education'],
    gradient: 'from-yellow-600 to-orange-600'
  }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);


  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Throttled scroll event
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);

  // Handle dropdown hover
  const handleDropdownEnter = useCallback((type: 'solutions' | 'services') => {
    const timeoutToRef = type === 'solutions' ? timeoutRef : servicesTimeoutRef;
    const setDropdownOpen = type === 'solutions' ? setSolutionsDropdownOpen : setServicesDropdownOpen;
    const setOtherDropdownOpen = type === 'solutions' ? setServicesDropdownOpen : setSolutionsDropdownOpen;

    if (timeoutToRef.current) {
      clearTimeout(timeoutToRef.current);
    }
    setDropdownOpen(true);
    setOtherDropdownOpen(false);
  }, []);

  const handleDropdownLeave = useCallback((type: 'solutions' | 'services') => {
    const timeoutToRef = type === 'solutions' ? timeoutRef : servicesTimeoutRef;
    const setDropdownOpen = type === 'solutions' ? setSolutionsDropdownOpen : setServicesDropdownOpen;

    timeoutToRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);



  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      development: 'bg-blue-500/10 text-blue-400',
      consulting: 'bg-green-500/10 text-green-400',
      infrastructure: 'bg-purple-500/10 text-purple-400',
      training: 'bg-orange-500/10 text-orange-400',
      ai: 'bg-blue-500/10 text-blue-400',
      vision: 'bg-purple-500/10 text-purple-400',
      robotics: 'bg-green-500/10 text-green-400',
      advisory: 'bg-orange-500/10 text-orange-400',
      agriculture: 'bg-green-500/10 text-green-400',
      'food-delivery': 'bg-orange-500/10 text-orange-400',
      IDP: 'bg-blue-500/10 text-blue-400',
      'digital-transformation': 'bg-purple-500/10 text-purple-400',
      healthcare: 'bg-teal-500/10 text-teal-400',
      education: 'bg-yellow-500/10 text-yellow-400'
    };
    return colorMap[category] || 'bg-gray-500/10 text-gray-400';
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 ease-out
          ${isScrolled
            ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 py-2 sm:py-3'
            : 'bg-transparent py-4 sm:py-6'
          }
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="nav-logo flex items-center space-x-2 group"
              aria-label="Go to homepage"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={140}
                  height={50}
                  sizes="(max-width: 640px) 120px, 140px"
                  priority
                  className="h-auto w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map(({ href, label, hasDropdown }) => (
                <div
                  key={href}
                  className="relative"
                  ref={hasDropdown && label === 'Solutions' ? dropdownRef : hasDropdown && label === 'Services' ? servicesDropdownRef : null}
                  onMouseEnter={hasDropdown ? () => handleDropdownEnter(label === 'Solutions' ? 'solutions' : 'services') : undefined}
                  onMouseLeave={hasDropdown ? () => handleDropdownLeave(label === 'Solutions' ? 'solutions' : 'services') : undefined}
                >
                  {hasDropdown ? (
                    <button
                      className={`
                        nav-item relative px-4 py-2 rounded-lg font-medium text-sm xl:text-base
                        transition-all duration-200 group flex items-center space-x-1
                        ${isActiveLink(href)
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-slate-200 hover:text-white hover:bg-white/5'
                        }
                      `}
                      onClick={() => {
                        if (label === 'Solutions') {
                          setSolutionsDropdownOpen(!solutionsDropdownOpen);
                          setServicesDropdownOpen(false);
                        } else {
                          setServicesDropdownOpen(!servicesDropdownOpen);
                          setSolutionsDropdownOpen(false);
                        }
                      }}
                    >
                      <span>{label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${(label === 'Solutions' && solutionsDropdownOpen) || (label === 'Services' && servicesDropdownOpen) ? 'rotate-180' : ''
                          }`}
                      />
                      <span
                        className={`
                          absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400
                          transition-all duration-200 -translate-x-1/2
                          ${isActiveLink(href) ? 'w-3/4' : 'w-0 group-hover:w-1/2'}
                        `}
                      />
                    </button>
                  ) : (
                    <Link
                      href={href}
                      className={`
                        nav-item relative px-4 py-2 rounded-lg font-medium text-sm xl:text-base
                        transition-all duration-200 group
                        ${isActiveLink(href)
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-slate-200 hover:text-white hover:bg-white/5'
                        }
                      `}
                      aria-current={isActiveLink(href) ? 'page' : undefined}
                    >
                      {label}
                      <span
                        className={`
                          absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400
                          transition-all duration-200 -translate-x-1/2
                          ${isActiveLink(href) ? 'w-3/4' : 'w-0 group-hover:w-1/2'}
                        `}
                      />
                    </Link>
                  )}

                  {/* Services Dropdown */}
                  {hasDropdown && label === 'Services' && (
                    <div
                      className={`
                        absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[800px]
                        transition-all duration-200 origin-top
                        ${servicesDropdownOpen
                          ? 'opacity-100 visible scale-100'
                          : 'opacity-0 invisible scale-95'
                        }
                      `}
                    >
                      <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-500/20 border border-slate-700/50 p-6">
                        <div className="mb-4">
                          <h3 className="text-white font-semibold text-lg mb-2">Our Services</h3>
                          <p className="text-slate-400 text-sm">Comprehensive AI services to accelerate your digital transformation</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="group p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-200 hover:bg-slate-800/50"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className={`
                                    flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${service.gradient}
                                    flex items-center justify-center text-white
                                    transition-transform duration-200
                                  `}>
                                    <IconComponent className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                      <h4 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors duration-300">
                                        {service.title}
                                      </h4>
                                      <span className={`
                                        px-2 py-1 rounded-full text-xs font-medium
                                        ${getCategoryColor(service.category)}
                                      `}>
                                        {service.category.toUpperCase()}
                                      </span>
                                    </div>
                                    <p className="text-slate-400 text-xs line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-700/50">
                          <Link
                            href="/services"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            View All Services
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Solutions Dropdown */}
                  {hasDropdown && label === 'Solutions' && (
                    <div
                      className={`
                        absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[800px]
                        transition-all duration-200 origin-top
                        ${solutionsDropdownOpen
                          ? 'opacity-100 visible scale-100'
                          : 'opacity-0 invisible scale-95'
                        }
                      `}
                    >
                      <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-500/20 border border-slate-700/50 p-6">
                        <div className="mb-4">
                          <h3 className="text-white font-semibold text-lg mb-2">Our AI Solutions</h3>
                          <p className="text-slate-400 text-sm">Discover our cutting-edge artificial intelligence solutions designed for African businesses</p>
                        </div>



                        <div className="grid grid-cols-2 gap-4">
                          {solutions.map((solution, index) => {
                            const IconComponent = solution.icon;
                            return (
                              <Link
                                key={solution.href}
                                href={solution.href}
                                className="group p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-200 hover:bg-slate-800/50"
                                onClick={() => setSolutionsDropdownOpen(false)}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className={`
            flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${solution.gradient}
            flex items-center justify-center text-white
            transition-transform duration-200
          `}>
                                    <IconComponent className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                      <h4 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors duration-300">
                                        {solution.title}
                                      </h4>
                                      <div className="flex flex-wrap gap-1">
                                        {solution.category.map((cat) => (
                                          <span
                                            key={cat}
                                            className={`
                      px-2 py-1 rounded-full text-xs font-medium
                      ${getCategoryColor(cat)}
                    `}
                                          >
                                            {cat.toUpperCase()}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                    <p className="text-slate-400 text-xs line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                                      {solution.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>



                        <div className="mt-6 pt-4 border-t border-slate-700/50">
                          <Link
                            href="/solutions"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                            onClick={() => setSolutionsDropdownOpen(false)}
                          >
                            View All Solutions
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="
                nav-cta hidden lg:flex items-center justify-center
                bg-blue-600 hover:bg-blue-700
                text-white font-semibold text-sm xl:text-base
                px-6 py-3 rounded-xl
                transition-all duration-300 transform hover:scale-105
                shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40
                min-w-[160px] xl:min-w-[180px] group
              "
            >
              <span>Get In Touch</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-50 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden transition-all duration-500
          ${mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
          }
        `}
      >
        {/* Backdrop */}
        <div
          className={`
            absolute inset-0 bg-slate-900/90 backdrop-blur-sm
            transition-opacity duration-500
            ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`
            absolute right-0 top-0 h-full w-full max-w-sm
            bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
            shadow-2xl transform transition-transform duration-500 ease-out
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            overflow-y-auto
          `}
        >
          <div className="flex flex-col h-full pt-24 pb-6 px-6">

            {/* Mobile SYNTHI AI Brand */}
            <div className="flex items-center space-x-2 mb-8 pb-6 border-b border-slate-700/50">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  sizes="120px"
                  className="h-auto w-auto"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 space-y-2" role="navigation">
              {navItems.map(({ href, label, hasDropdown }, index) => (
                <div key={href}>
                  {hasDropdown ? (
                    <div className="space-y-2">
                      <button
                        className={`
                          w-full text-left px-6 py-4 rounded-xl font-medium text-lg
                          transition-all duration-200 transform flex items-center justify-between
                          ${isActiveLink(href)
                            ? 'text-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/20'
                            : 'text-slate-200 hover:text-white hover:bg-white/10'
                          }
                          ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
                        `}
                        style={{
                          transitionDelay: mobileMenuOpen ? `${index * 100 + 200}ms` : '0ms'
                        }}
                        onClick={() => {
                          if (label === 'Solutions') {
                            setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            setServicesDropdownOpen(false);
                          } else {
                            setServicesDropdownOpen(!servicesDropdownOpen);
                            setSolutionsDropdownOpen(false);
                          }
                        }}
                      >
                        <span>{label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${(label === 'Solutions' && solutionsDropdownOpen) || (label === 'Services' && servicesDropdownOpen) ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {/* Mobile Services Dropdown */}
                      {label === 'Services' && servicesDropdownOpen && (
                        <div className="ml-4 space-y-1">
                          {services.slice(0, 4).map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="flex items-center space-x-3">
                                  <IconComponent className="w-5 h-5 text-blue-400" />
                                  <div>
                                    <div className="font-medium text-sm">{service.title}</div>
                                    <div className="text-xs text-slate-400">{service.description}</div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                          <Link
                            href="/services"
                            className="block px-4 py-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View All Services →
                          </Link>
                        </div>
                      )}

                      {/* Mobile Solutions Dropdown */}
                      {label === 'Solutions' && solutionsDropdownOpen && (
                        <div className="ml-4 space-y-1">
                          {solutions.slice(0, 4).map((solution) => {
                            const IconComponent = solution.icon;
                            return (
                              <Link
                                key={solution.href}
                                href={solution.href}
                                className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="flex items-center space-x-3">
                                  <IconComponent className="w-5 h-5 text-blue-400" />
                                  <div>
                                    <div className="font-medium text-sm">{solution.title}</div>
                                    <div className="text-xs text-slate-400">{solution.description}</div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                          <Link
                            href="/solutions"
                            className="block px-4 py-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View All Solutions →
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={href}
                      className={`
                        block px-6 py-4 rounded-xl font-medium text-lg
                        transition-all duration-200 transform
                        ${isActiveLink(href)
                          ? 'text-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/20'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                        }
                        ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
                      `}
                      style={{
                        transitionDelay: mobileMenuOpen ? `${index * 50 + 100}ms` : '0ms'
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <Link
              href="/contact"
              className={`
                flex items-center justify-center
                bg-blue-600 hover:bg-blue-700
                text-white font-semibold text-lg
                px-6 py-4 rounded-xl mt-6
                transition-all duration-300 transform hover:scale-105
                shadow-lg shadow-blue-500/25
                ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
              `}
              style={{
                transitionDelay: mobileMenuOpen ? '400ms' : '0ms'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get In Touch</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;