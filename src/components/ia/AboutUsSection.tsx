"use client";

import { MoreHorizontal } from "lucide-react";
import { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "../ui/card";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Memoize the chart component for better performance
const AnimatedChart = memo(() => {
  const chartRef = useRef<SVGSVGElement>(null);
  const incomeRef = useRef<SVGCircleElement>(null);
  const expenseRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!chartRef.current || !incomeRef.current || !expenseRef.current) return;

    // Animate chart on mount
    const tl = gsap.timeline();
    
    // Animate income arc
    tl.fromTo(
      incomeRef.current,
      {
        strokeDasharray: "0 220",
        opacity: 0,
      },
      {
        strokeDasharray: "167 53",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
      }
    );

    // Animate expense arc
    tl.fromTo(
      expenseRef.current,
      {
        strokeDasharray: "0 220",
        opacity: 0,
      },
      {
        strokeDasharray: "40 180",
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
      },
      "-=1"
    );

    // Rotate the entire chart slightly
    tl.to(chartRef.current, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg ref={chartRef} className="w-full h-full" viewBox="0 0 139 91">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2663ff" />
          <stop offset="100%" stopColor="#4a90e2" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f6554b" />
          <stop offset="100%" stopColor="#ff8a80" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background circle */}
      <circle 
        cx="69.5" 
        cy="45.5" 
        r="35" 
        fill="none" 
        stroke="#374151" 
        strokeWidth="8" 
        opacity="0.3"
      />

      {/* Income arc */}
      <circle
        ref={incomeRef}
        cx="69.5"
        cy="45.5"
        r="35"
        fill="none"
        stroke="url(#gradient1)"
        strokeWidth="8"
        strokeDasharray="167 53"
        strokeDashoffset="0"
        transform="rotate(-90 69.5 45.5)"
        filter="url(#glow)"
      />

      {/* Expense arc */}
      <circle
        ref={expenseRef}
        cx="69.5"
        cy="45.5"
        r="35"
        fill="none"
        stroke="url(#gradient2)"
        strokeWidth="8"
        strokeDasharray="40 180"
        strokeDashoffset="-167"
        transform="rotate(-90 69.5 45.5)"
        filter="url(#glow)"
      />
    </svg>
  );
});

AnimatedChart.displayName = "AnimatedChart";

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !statsRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        ".section-label",
        {
          opacity: 0,
          y: -20,
          letterSpacing: "0.2em",
        },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.1em",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate main heading with gradient effect
      gsap.fromTo(
        ".main-heading",
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger text paragraphs
      gsap.fromTo(
        textRefs.current.filter(Boolean),
        {
          opacity: 0,
          x: -50,
          skewY: 2,
        },
        {
          opacity: 1,
          x: 0,
          skewY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3D rotation effect for cards
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, {
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        });

        gsap.fromTo(
          card,
          {
            opacity: 0,
            rotationY: -90,
            z: -200,
            scale: 0.8,
          },
          {
            opacity: 1,
            rotationY: 0,
            z: 0,
            scale: 1,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Parallax effect for background cards
      gsap.to(".bg-card-1", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".bg-card-2", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Floating animation for stats card
      gsap.to(".stats-card", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Hover effects for interactive elements
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[60px] px-4 lg:px-8 py-8 lg:py-16 max-w-7xl mx-auto"
      aria-labelledby="about-heading"
    >
      {/* Content Section - Aligned to the left */}
      <div ref={contentRef} className="flex flex-col w-full lg:w-[548px] items-start gap-5">
        <span className="section-label font-normal text-sm lg:text-[15px] tracking-[1.50px] leading-6 lg:leading-[27px] text-color-palette-secondary uppercase">
          About Us
        </span>

        <h2
          id="about-heading"
          className="main-heading bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent font-bold text-3xl lg:text-[46px] tracking-[-0.02em] leading-[1.2] mb-6"
        >
          Artificial intelligence for a sustainable future
        </h2>

        {/* Limited to 4 paragraphs with better text alignment */}
        <div className="w-full space-y-5 text-left">
          <p
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className="font-normal text-gray text-sm lg:text-base leading-[1.75] lg:leading-[1.8] max-w-[500px]"
          >
            At Synthi AI, we develop advanced solutions in artificial
            intelligence (AI), robotics, and computer vision to accelerate
            innovation and address the strategic challenges of businesses and
            institutions.
          </p>

          <p
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className="font-normal text-gray text-sm lg:text-base leading-[1.75] lg:leading-[1.8] max-w-[500px]"
          >
            Our ambition is clear: to make Africa a global leader in AI by
            creating ethical, high-performance, and accessible technologies
            capable of transforming key sectors such as health, agriculture,
            finance and climate.
          </p>

          <p
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className="font-normal text-gray text-sm lg:text-base leading-[1.75] lg:leading-[1.8] max-w-[500px]"
          >
            We believe that AI is not just a technology, but a powerful lever
            for development and economic transformation. That&apos;s why we
            collaborate with researchers, startups, businesses, and governments
            to build a strong technological ecosystem.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        ref={statsRef}
        className="relative w-full lg:w-[565px] h-[300px] sm:h-[400px] lg:h-[467px] mt-8 lg:mt-0"
      >
        {/* Background cards with parallax effect */}
        <div
          ref={(el) => {
            cardRefs.current[0] = el;
          }}
          className="bg-card-1 hidden sm:block absolute w-64 lg:w-80 h-[150px] lg:h-[201px] top-[25px] lg:top-[35px] right-0 lg:left-[245px] rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(38, 99, 255, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        />
        <div
          ref={(el) => {
            cardRefs.current[1] = el;
          }}
          className="bg-card-2 hidden sm:block absolute w-80 lg:w-[400px] h-[180px] lg:h-[251px] top-[120px] lg:top-[216px] right-8 lg:left-[121px] rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(246, 85, 75, 0.1) 0%, rgba(255, 138, 128, 0.1) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        />

        {/* Statistics Card */}
        <Card
          ref={(el) => {
            cardRefs.current[2] = el;
          }}
          className="stats-card absolute w-full max-w-72 h-[280px] sm:h-[320px] lg:h-[344px] top-0 left-0 rounded-[14px] backdrop-blur-[10px] backdrop-brightness-[100%] border-line-gray shadow-2xl overflow-hidden"
          style={{
            background: "rgba(17, 24, 39, 0.8)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CardContent className="p-0 relative h-full">
            {/* Animated gradient background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: "linear-gradient(45deg, #2663ff 0%, #f6554b 100%)",
                animation: "gradientShift 10s ease infinite",
              }}
            />

            {/* Header */}
            <div className="relative p-4 lg:p-[22px] flex justify-between items-center">
              <span className="font-medium text-light-gray text-sm lg:text-base leading-6 lg:leading-[28.8px]">
                Statistics
              </span>
              <button
                className="text-gray hover:text-white transition-colors"
                aria-label="More options"
              >
                <MoreHorizontal className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </div>

            {/* Animated Chart */}
            <div className="flex justify-center mt-4 lg:mt-[20px]">
              <div className="relative w-[120px] lg:w-[139px] h-[80px] lg:h-[91px]">
                <AnimatedChart />

                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="block text-[8px] lg:text-[9px] text-gray leading-4 lg:leading-[16.2px] opacity-80">
                    Total Activity
                  </span>
                  <span className="block font-semibold text-xl lg:text-2xl text-light-gray leading-8 lg:leading-[43.2px]">
                    <span className="counter">436</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="relative flex justify-around mt-4 lg:mt-[20px] px-4">
              <div className="flex items-start gap-2 lg:gap-3.5">
                <div className="w-2 h-2 mt-1.5 bg-[#2663ff] rounded-full animate-pulse" />
                <div>
                  <span className="block text-[10px] lg:text-[11px] text-[#c2cde7] leading-4 lg:leading-[18.7px]">
                    Income
                  </span>
                  <span className="block font-bold text-xs lg:text-[13px] text-light-gray leading-5 lg:leading-[22.1px]">
                    <span className="counter">305</span>
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 lg:gap-3.5">
                <div className="w-2 h-2 mt-1.5 bg-[#f6554b] rounded-full animate-pulse" />
                <div>
                  <span className="block text-[10px] lg:text-xs text-[#c2cde7] leading-4 lg:leading-[20.4px]">
                    Expense
                  </span>
                  <span className="block font-bold text-xs lg:text-[13px] text-light-gray leading-5 lg:leading-[22.1px]">
                    <span className="counter">58</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="absolute w-[180px] lg:w-[200px] h-10 lg:h-11 bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2">
              <button className="w-full h-full rounded-lg border border-solid border-line-gray flex items-center justify-center hover:bg-white/5 transition-all duration-300 group">
                <span className="font-semibold text-gray group-hover:text-white text-xs lg:text-[13px] leading-4 lg:leading-[16.9px] transition-colors">
                  All Activity
                </span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .counter {
          display: inline-block;
        }
      `}</style>
    </section>
  );
}