'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const faqs = [
  {
    id: 1,
    question: 'What is Synthi AI?',
    answer: 'Synthi AI is an advanced AI platform specializing in innovative solutions for businesses and industries across Africa and beyond. We design cutting-edge algorithms in AI, NLP, and computer vision, applied to real-world challenges in healthcare, agriculture, finance, and education.',
    category: 'General'
  },
  {
    id: 2,
    question: 'What are Synthi AI services?',
    answer: 'We offer comprehensive AI-driven solutions including research & development through Synthi AI Labs, business solutions for enterprises, educational programs via Synthi AI Academy, and our new intelligent advisory service NeuraLynx Advisor for strategic business insights.',
    category: 'Services'
  },
  {
    id: 3,
    question: 'Which solutions does Synthi AI offer?',
    answer: 'Our solutions span multiple sectors: healthcare (medical diagnosis, teleconsultation), agriculture (yield prediction, smart irrigation), finance (fraud detection, risk management), climate & environment (modeling, resource management), and industry & logistics (process automation, supply chain management).',
    category: 'Solutions'
  },
  {
    id: 4,
    question: 'Why choose Synthi AI as your trusted tech partner?',
    answer: 'We are Africa\'s leading AI innovator, specializing in ethical, impactful AI solutions. With strong partnerships with renowned universities and institutes, cutting-edge technology, and a deep understanding of African markets, we\'re transforming key sectors and improving lives across the continent.',
    category: 'Partnership'
  },
  {
    id: 5,
    question: 'How does NeuraLynx Advisor work?',
    answer: 'NeuraLynx Advisor is our AI-powered business intelligence assistant that provides 24/7 strategic insights, market analysis, and personalized recommendations. It integrates with your existing business tools and uses advanced analytics to help you make informed decisions and optimize growth.',
    category: 'NeuraLynx'
  },
  {
    id: 6,
    question: 'What makes Synthi AI different from other AI companies?',
    answer: 'Our unique focus on African challenges, combined with world-class research capabilities and practical business applications, sets us apart. We offer end-to-end solutions from research to implementation, backed by our commitment to ethical AI and sustainable development goals.',
    category: 'Competitive Advantage'
  }
];

const categories = ['All', 'General', 'Services', 'Solutions', 'Partnership', 'NeuraLynx'];

const OBSERVER_OPTIONS: IntersectionObserverInit = { threshold: 0.1, rootMargin: "-100px" };

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sectionRef, isInView] = useIntersectionObserver(OBSERVER_OPTIONS);

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-navy text-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-32 right-32 w-2 h-2 bg-brand rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-brand/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-brand/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        <HelpCircle className="absolute top-20 right-1/4 w-6 h-6 text-brand/20 animate-bounce-slow" />
        <HelpCircle className="absolute bottom-40 left-1/3 w-4 h-4 text-brand/15 animate-bounce-slow" style={{ animationDelay: '1s' }} />
        <MessageCircle className="absolute top-1/2 right-20 w-5 h-5 text-brand/25 animate-bounce-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-start gap-12 xl:gap-20">

          {/* Left Section - Header */}
          <div className="w-full xl:w-2/5 xl:sticky xl:top-32">
            <div className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Badge className="px-4 py-2 bg-brand/10 border border-brand/20 text-brand uppercase text-xs font-semibold tracking-widest rounded-full backdrop-blur-sm mb-6">
                <HelpCircle className="w-3 h-3 mr-2" />
                Support Center
              </Badge>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-lightest to-brand-lighter bg-clip-text text-transparent">
                  Frequently Asked
                </span>
                <br />
                <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We understand that you may have some questions before making a decision,
                and we are here to provide you with all the answers you need.
                Explore our comprehensive FAQ section or reach out directly.
              </p>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4">Filter by Category:</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setOpenIndex(null);
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-brand text-white shadow-lg shadow-brand/30'
                          : 'bg-brand/20 text-brand hover:bg-brand/30'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="bg-navy-light/50 border-brand/20 hover:border-brand/40 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand/20 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-brand" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">Live Chat Support</h4>
                        <p className="text-gray-400 text-xs">Get instant answers</p>
                      </div>
                      <Button size="sm" className="bg-brand hover:bg-brand-dark text-white">
                        Chat Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-navy-light/50 border-brand/20 hover:border-brand/40 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand/20 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-brand" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">Email Support</h4>
                        <p className="text-gray-400 text-xs">contact@synthi-ai.com</p>
                      </div>
                      <Button size="sm" variant="outline" className="border-brand/30 text-brand hover:bg-brand/10">
                        Send Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Section - FAQ List */}
          <div className="w-full xl:w-3/5">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`group transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Card className="bg-navy-light/50 border-brand/20 hover:border-brand/40 transition-all duration-500 overflow-hidden backdrop-blur-sm group-hover:bg-navy-light/70">
                    <CardContent className="p-0">
                      <button
                        className="w-full text-left flex justify-between items-center p-6 lg:p-8 transition-all duration-300"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={openIndex === index}
                      >
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-brand/20 text-brand text-xs px-2 py-1">
                              {faq.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-brand transition-colors duration-300">
                            {faq.question}
                          </h3>
                        </div>
                        <div
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            openIndex === index ? 'rotate-180' : ''
                          }`}
                        >
                          <ChevronDown className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                        </div>
                      </button>

                      <div
                        className="grid transition-all duration-400 ease-in-out"
                        style={{
                          gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                          opacity: openIndex === index ? 1 : 0,
                        }}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                            <div className="w-full h-px bg-brand/20 mb-6"></div>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                              {faq.answer}
                            </p>

                            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-brand/10">
                              <span className="text-brand text-sm font-medium">
                                Was this helpful?
                              </span>
                              <div className="flex gap-2">
                                <button className="text-brand hover:text-white text-sm transition-colors duration-300">
                                  Yes
                                </button>
                                <button className="text-brand hover:text-white text-sm transition-colors duration-300">
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Still have questions section */}
            <div
              className={`mt-16 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <Card className="bg-gradient-to-br from-navy-light/80 to-navy-lighter/60 border-brand/30 shadow-2xl shadow-brand/10 overflow-hidden">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-brand animate-pulse" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-brand-lightest to-brand-lighter bg-clip-text text-transparent mb-4">
                    Still have questions?
                  </h3>

                  <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help.
                    Get in touch and we&apos;ll get back to you as soon as possible.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-brand to-brand-light hover:from-brand-dark hover:to-brand text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-brand/30 transition-all duration-300">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Support
                    </Button>
                    <Button variant="outline" className="border-brand/30 text-brand hover:bg-brand/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
