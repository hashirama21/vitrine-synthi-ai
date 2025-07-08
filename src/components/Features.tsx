"use client";

import { MoreHorizontal, ArrowRight } from "lucide-react";
import { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Statistics data
const STATISTICS_DATA = {
  totalActivity: 436,
  income: 305,
  expense: 58,
};

// Memoize the animated chart component
const AnimatedChart = memo(() => {
  const chartRef = useRef<SVGSVGElement>(null);
  const incomeArcRef = useRef<SVGCircleElement>(null);
  const expenseArcRef = useRef<SVGCircleElement>(null);
  const totalNumberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!chartRef.current || !incomeArcRef.current || !expenseArcRef.current) return;

    const ctx = gsap.context(() => {
      // Create timeline for coordinated animations
      const tl = gsap.timeline();

      // Animate income arc
      tl.fromTo(
        incomeArcRef.current,
        {
          strokeDasharray: "0 251.2",
          opacity: 0,
        },
        {
          strokeDasharray: "188.4 62.8", // 75% of circumference
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        }
      );

      // Animate expense arc
      tl.fromTo(
        expenseArcRef.current,
        {
          strokeDasharray: "0 251.2",
          opacity: 0,
        },
        {
          strokeDasharray: "50.24 201", // 20% of circumference
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=1"
      );

      // Animate total number
      if (totalNumberRef.current) {
        tl.fromTo(
          totalNumberRef.current,
          {
            textContent: 0,
            opacity: 0,
            scale: 0.8,
          },
          {
            textContent: STATISTICS_DATA.totalActivity,
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
          },
          "-=1.5"
        );
      }

      // Subtle rotation animation
      gsap.to(chartRef.current, {
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-[139px] h-[91px]">
      <svg ref={chartRef} className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2663ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4a90e2" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="expenseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f6554b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff8a80" stopOpacity="1" />
          </linearGradient>
          <filter id="chartGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="8"
        />

        {/* Income arc */}
        <circle
          ref={incomeArcRef}
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="url(#incomeGradient)"
          strokeWidth="8"
          strokeDasharray="0 251.2"
          strokeDashoffset="0"
          transform="rotate(-90 50 50)"
          filter="url(#chartGlow)"
          className="drop-shadow-lg"
        />

        {/* Expense arc */}
        <circle
          ref={expenseArcRef}
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="url(#expenseGradient)"
          strokeWidth="8"
          strokeDasharray="0 251.2"
          strokeDashoffset="-188.4"
          transform="rotate(-90 50 50)"
          filter="url(#chartGlow)"
          className="drop-shadow-lg"
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-['Manrope'] font-normal text-gray text-[9px] text-center tracking-[0] leading-[16.2px]">
          Total Activity
        </span>
        <span
          ref={totalNumberRef}
          className="font-['Manrope'] font-semibold text-light-gray text-2xl text-center tracking-[0] leading-[43.2px]"
        >
          0
        </span>
      </div>
    </div>
  );
});

AnimatedChart.displayName = "AnimatedChart";

// Memoize credit cards component
const CreditCards = memo(() => {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!card1Ref.current || !card2Ref.current) return;

    const ctx = gsap.context(() => {
      // 3D card animations
      gsap.set([card1Ref.current, card2Ref.current], {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });

      // Card 1 animation
      gsap.to(card1Ref.current, {
        rotateY: 10,
        rotateX: -5,
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Card 2 animation
      gsap.to(card2Ref.current, {
        rotateY: -10,
        rotateX: 5,
        y: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      // Hover effects
      [card1Ref.current, card2Ref.current].forEach((card) => {
        card!.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card!.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Credit Card 1 */}
      <div
        ref={card1Ref}
        className="absolute w-80 h-[201px] top-[35px] left-[245px] rounded-xl shadow-2xl overflow-hidden cursor-pointer transition-all"
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="text-white/90">
              <p className="text-xs font-light">Premium Card</p>
              <p className="text-sm font-medium mt-1">Peter White</p>
            </div>
            <div className="text-white/60">
              <svg width="50" height="30" viewBox="0 0 50 30" fill="currentColor">
                <circle cx="20" cy="15" r="10" opacity="0.8" />
                <circle cx="30" cy="15" r="10" opacity="0.8" />
              </svg>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-white text-lg font-medium tracking-wider">
              •••• •••• •••• 3456
            </p>
            <div className="flex justify-between items-center">
              <p className="text-white/70 text-xs">03/26</p>
              <p className="text-white/70 text-xs">DEBIT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Card 2 */}
      <div
        ref={card2Ref}
        className="absolute w-[400px] h-[251px] top-[216px] left-[121px] rounded-xl shadow-2xl overflow-hidden cursor-pointer transition-all"
      >
        <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-600 to-violet-800 p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="text-white/90">
              <p className="text-sm font-light">Platinum Card</p>
              <p className="text-base font-medium mt-1">Emre Huayde Bastas</p>
            </div>
            <div className="text-white/60">
              <svg width="60" height="36" viewBox="0 0 60 36" fill="currentColor">
                <circle cx="24" cy="18" r="12" opacity="0.8" />
                <circle cx="36" cy="18" r="12" opacity="0.8" />
              </svg>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-white text-xl font-medium tracking-wider">
              •••• •••• •••• 7890
            </p>
            <div className="flex justify-between items-center">
              <p className="text-white/70 text-sm">10/26</p>
              <p className="text-white/70 text-sm">CREDIT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

CreditCards.displayName = "CreditCards";

export default function FinanceOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const statsCardRef = useRef<HTMLDivElement>(null);
  const textElementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Create master timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate section label
      masterTl.fromTo(
        ".section-label",
        {
          opacity: 0,
          y: -20,
          letterSpacing: "0.3em",
        },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.1em",
          duration: 1,
          ease: "power3.out",
        }
      );

      // Animate main heading with gradient effect
      masterTl.fromTo(
        ".main-heading",
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Animate paragraph
      masterTl.fromTo(
        ".description-text",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Animate button
      masterTl.fromTo(
        ".learn-more-btn",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      // Animate statistics card with 3D effect
      gsap.fromTo(
        statsCardRef.current,
        {
          opacity: 0,
          rotateY: -90,
          x: -100,
          scale: 0.8,
        },
        {
          opacity: 1,
          rotateY: 0,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightContentRef.current,
            start: "top 75%",
          },
        }
      );

      // Floating animation for stats card
      gsap.to(statsCardRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Animate statistics numbers
      gsap.fromTo(
        [".income-number", ".expense-number"],
        {
          textContent: 0,
        },
        {
          textContent: (index) => index === 0 ? STATISTICS_DATA.income : STATISTICS_DATA.expense,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsCardRef.current,
            start: "top 75%",
          },
        }
      );

      // Background gradient animation
      gsap.to(".gradient-bg", {
        backgroundPosition: "100% 100%",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      // Parallax effect for right section
      gsap.to(rightContentRef.current, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: rightContentRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-color-palette-dark-bg overflow-hidden py-20"
    >
      {/* Animated background gradient */}
      <div 
        className="gradient-bg absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(82, 134, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(21, 69, 201, 0.3) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 0%",
        }}
      />

      <div className="relative z-10 flex flex-col items-start gap-2.5 container mx-auto px-4">
        <div className="relative w-full max-w-[1270px] h-auto md:h-[467px] flex flex-col md:flex-row mx-auto">
          {/* Left Section - Company Info */}
          <div 
            ref={leftContentRef}
            className="w-full md:w-[596px] md:h-[372px] md:ml-[55px] flex flex-col justify-center"
          >
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[41px]">
                <span className="section-label font-['Arial'] font-normal text-color-palette-secondary text-[15px] tracking-[1.50px] leading-[27.0px] uppercase">
                  AI-DRIVEN COMPANY
                </span>

                <h1 className="main-heading bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent font-['Arial_Rounded_MT_Bold'] text-[46px] tracking-[-0.92px] leading-[55.2px]">
                  Artificial intelligence for a<br />
                  sustainable future
                </h1>
              </div>

              <p className="description-text font-['Arial'] font-normal text-gray text-base tracking-[0] leading-[28.8px] max-w-[522px]">
                Synthi-AI is a leading technology company specializing in
                providing advanced solutions in artificial intelligence (AI),
                custom software development, and robotics. we are passionate about
                harnessing the power of AI to transform businesses and drive
                innovation.
              </p>

              <Button
                variant="outline"
                className="learn-more-btn h-[50px] min-w-[200px] flex items-center justify-center gap-2 border border-line-gray rounded-md hover:bg-color-palette-primary/10 hover:border-color-palette-primary transition-all duration-300 group"
              >
                <span className="group-hover:text-color-palette-primary transition-colors">
                  Learn More
                </span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:text-color-palette-primary transition-all" />
              </Button>
            </div>
          </div>

          {/* Right Section - Statistics and Cards */}
          <div 
            ref={rightContentRef}
            className="w-full md:w-[565px] h-auto md:h-[467px] relative mt-8 md:mt-0"
          >
            <div className="relative h-full">
              {/* Credit Cards */}
              <CreditCards />

              {/* Statistics Card */}
              <Card 
                ref={statsCardRef}
                className="absolute w-72 h-[344px] top-0 left-0 rounded-[14px] border border-solid border-line-gray backdrop-blur-[10px] backdrop-brightness-[100%] bg-color-palette-dark-bg-2/80 shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
              >
                <CardContent className="p-0 h-full relative">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-color-palette-primary/5 to-color-palette-secondary/5 rounded-[14px]" />

                  {/* Card Header */}
                  <div className="relative flex justify-between items-center p-[22px]">
                    <h3 className="font-['Manrope'] font-medium text-light-gray text-base tracking-[0] leading-[28.8px]">
                      Statistics
                    </h3>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-6 h-6 p-0 hover:bg-color-palette-primary/10 transition-colors"
                    >
                      <MoreHorizontal className="w-5 h-5 text-light-gray" />
                    </Button>
                  </div>

                  {/* Circular Chart */}
                  <div className="absolute w-[135px] h-[101px] top-[89px] left-[75px] flex items-center justify-center">
                    <AnimatedChart />
                  </div>

                  {/* Income Indicator */}
                  <div className="absolute w-[54px] h-[42px] top-[193px] left-[66px] flex items-start">
                    <div className="w-2 h-2 mt-1.5 bg-[#2663ff] rounded-full animate-pulse shadow-lg shadow-[#2663ff]/50" />
                    <div className="ml-3.5">
                      <span className="block font-['Manrope'] font-normal text-[#c2cde7] text-[11px] tracking-[0] leading-[18.7px]">
                        Income
                      </span>
                      <span className="income-number block font-['Manrope'] font-bold text-light-gray text-[13px] leading-[22.1px]">
                        0
                      </span>
                    </div>
                  </div>

                  {/* Expense Indicator */}
                  <div className="absolute w-16 h-[43px] top-48 left-[158px] flex items-start">
                    <div className="w-2 h-2 mt-[7px] bg-[#f6554b] rounded-full animate-pulse shadow-lg shadow-[#f6554b]/50" />
                    <div className="ml-3.5">
                      <span className="block font-['Manrope'] font-normal text-[#c2cde7] text-xs tracking-[0] leading-[20.4px]">
                        Expense
                      </span>
                      <span className="expense-number block font-['Manrope'] font-bold text-light-gray text-[13px] leading-[22.1px]">
                        0
                      </span>
                    </div>
                  </div>

                  {/* All Activity Button */}
                  <div className="absolute w-[200px] h-11 top-[259px] left-[43px]">
                    <Button
                      variant="outline"
                      className="w-full h-full rounded border border-solid border-line-gray hover:bg-color-palette-primary/10 hover:border-color-palette-primary font-['Manrope'] font-semibold text-gray hover:text-color-palette-primary text-[13px] text-center transition-all duration-300"
                    >
                      All Activity
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